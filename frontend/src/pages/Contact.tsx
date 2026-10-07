import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Clock,
  ShieldCheck,
  Loader,
} from "lucide-react";

import {
  parsePhoneNumberFromString,
  getCountries,
  getCountryCallingCode,
  type CountryCode,
} from "libphonenumber-js";

import { api } from "../lib/api";
import { useLanguage } from "../lib/LanguageContext";
import { staticTranslations } from "../lib/translations";
import { sendEmail } from "../services/emailService";
import { EMAIL_TO, PHONE_NUMBER } from "../lib/constants";
import { useSeo } from "../lib/useSeo";

export default function Contact() {
  // =========================================================
  // FORM STATES
  // =========================================================

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState<CountryCode>("IN");
  const [message, setMessage] = useState("");

  // =========================================================
  // OTP STATES
  // =========================================================

  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [emailVerificationToken, setEmailVerificationToken] = useState("");
  const [verifiedEmail, setVerifiedEmail] = useState("");

  // =========================================================
  // UI STATES
  // =========================================================

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // =========================================================
  // FIELD ERRORS
  // =========================================================

  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  }>({});

  // =========================================================
  // COUNTRY DATA
  // =========================================================

  const countries = getCountries();

  const countryNames = new Intl.DisplayNames(["en"], {
    type: "region",
  });

  // =========================================================
  // LANGUAGE
  // =========================================================

  const { lang } = useLanguage();

  const t = staticTranslations[lang] || staticTranslations.en;

  useSeo({
    title:
      t.seo?.contactTitle ||
      staticTranslations.en.seo?.contactTitle,

    description:
      t.seo?.contactDesc ||
      staticTranslations.en.seo?.contactDesc,
  });

  // =========================================================
  // API BASE URL
  // Handles both:
  // VITE_API_URL=http://localhost:3000
  // and
  // VITE_API_URL=http://localhost:3000/api
  // =========================================================

  const getApiRoot = () => {
    const configuredUrl =
      import.meta.env.VITE_API_URL || "http://localhost:5000";

    const cleanUrl = configuredUrl.replace(/\/+$/, "");

    if (cleanUrl.endsWith("/api")) {
      return cleanUrl;
    }

    return `${cleanUrl}/api`;
  };

  // =========================================================
  // EMAIL FORMAT VALIDATION
  // =========================================================

  const validateEmail = (value: string): string => {
    const trimmedEmail = value.trim();

    if (!trimmedEmail) {
      return "Email address is required.";
    }

    if (trimmedEmail.length > 254) {
      return "Email address must not exceed 254 characters.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      return "Please enter a valid email address.";
    }

    return "";
  };

  // =========================================================
  // PHONE VALIDATION
  // Same approach as InquiryModal
  // =========================================================

  const validatePhoneNumber = (): string => {
    if (!phone.trim()) {
      return "Phone number is required.";
    }

    try {
      const parsedPhone = parsePhoneNumberFromString(
        phone.trim(),
        country
      );

      if (!parsedPhone) {
        return `Enter a valid phone number for ${
          countryNames.of(country) || "selected country"
        }.`;
      }

      if (!parsedPhone.isPossible()) {
        return `Phone number length is not valid for ${
          countryNames.of(country) || "selected country"
        }.`;
      }

      if (!parsedPhone.isValid()) {
        return `Enter a valid phone number for ${
          countryNames.of(country) || "selected country"
        }.`;
      }

      return "";
    } catch {
      return "Enter a valid phone number.";
    }
  };

  // =========================================================
  // SEND OTP
  // =========================================================

  const handleSendOtp = async () => {
    const trimmedEmail = email.trim().toLowerCase();

    // Validate email first
    const emailError = validateEmail(trimmedEmail);

    if (emailError) {
      setFieldErrors((prev) => ({
        ...prev,
        email: emailError,
      }));

      return;
    }

    setOtpLoading(true);
    setOtpError("");
    setError("");

    try {
      const response = await fetch(
        `${getApiRoot()}/inquiries/send-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: trimmedEmail,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Failed to send OTP."
        );
      }

      // OTP successfully sent
      setOtpSent(true);
      setOtpVerified(false);
      setOtp("");
      setEmailVerificationToken("");
      setVerifiedEmail("");
      setOtpError("");

      setFieldErrors((prev) => ({
        ...prev,
        email: undefined,
      }));
    } catch (err: any) {
      setOtpError(
        err.message ||
          "Failed to send OTP. Please try again."
      );
    } finally {
      setOtpLoading(false);
    }
  };

  // =========================================================
  // VERIFY OTP
  // =========================================================

  const handleVerifyOtp = async () => {
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedOtp = otp.trim();

    if (!trimmedEmail) {
      setOtpError("Please enter your email address first.");
      return;
    }

    if (!trimmedOtp) {
      setOtpError("Please enter the OTP.");
      return;
    }

    if (!/^\d{6}$/.test(trimmedOtp)) {
      setOtpError("OTP must be a 6-digit number.");
      return;
    }

    setOtpLoading(true);
    setOtpError("");
    setError("");

    try {
      const response = await fetch(
        `${getApiRoot()}/inquiries/verify-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: trimmedEmail,
            otp: trimmedOtp,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "OTP verification failed."
        );
      }

      // OTP verified successfully
      setEmailVerificationToken(
        data.verificationToken
      );

      setVerifiedEmail(trimmedEmail);
      setOtpVerified(true);
      setOtpError("");

      setFieldErrors((prev) => ({
        ...prev,
        email: undefined,
      }));
    } catch (err: any) {
      setOtpVerified(false);
      setEmailVerificationToken("");
      setVerifiedEmail("");

      setOtpError(
        err.message ||
          "Invalid OTP. Please try again."
      );
    } finally {
      setOtpLoading(false);
    }
  };

  // =========================================================
  // FORM SUBMIT
  // =========================================================

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const errors: {
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
    } = {};

    // =======================================================
    // NAME VALIDATION
    // =======================================================

    const trimmedName = name.trim();

    if (!trimmedName) {
      errors.name = "Full name is required.";
    } else if (trimmedName.length < 2) {
      errors.name =
        "Full name must be at least 2 characters.";
    } else if (trimmedName.length > 50) {
      errors.name =
        "Full name must not exceed 50 characters.";
    } else if (!/^[A-Za-z ]+$/.test(trimmedName)) {
      errors.name =
        "Full name can contain only letters and spaces.";
    }

    // =======================================================
    // EMAIL VALIDATION
    // =======================================================

    const trimmedEmail = email.trim().toLowerCase();

    const emailError = validateEmail(trimmedEmail);

    if (emailError) {
      errors.email = emailError;
    }

    // =======================================================
    // PHONE VALIDATION
    // =======================================================

    const phoneError = validatePhoneNumber();

    if (phoneError) {
      errors.phone = phoneError;
    }

    // =======================================================
    // MESSAGE VALIDATION
    // =======================================================

    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      errors.message =
        "Your inquiry or requirement is required.";
    } else if (trimmedMessage.length < 10) {
      errors.message =
        "Please enter at least 10 characters.";
    } else if (trimmedMessage.length > 2000) {
      errors.message =
        "Message must not exceed 2000 characters.";
    }

    // =======================================================
    // SHOW FIELD ERRORS
    // =======================================================

    setFieldErrors(errors);

    // Stop if any validation error exists
    if (Object.keys(errors).length > 0) {
      return;
    }

    // =======================================================
    // OTP VERIFICATION CHECK
    // =======================================================

    if (
      !otpVerified ||
      !emailVerificationToken ||
      verifiedEmail !== trimmedEmail
    ) {
      setOtpError(
        "Please verify your email with OTP before submitting the inquiry."
      );

      return;
    }

    // =======================================================
    // PARSE PHONE TO INTERNATIONAL FORMAT
    // =======================================================

    let formattedPhone = "";

    try {
      const parsedPhone = parsePhoneNumberFromString(
        phone.trim(),
        country
      );

      if (!parsedPhone || !parsedPhone.isValid()) {
        setFieldErrors((prev) => ({
          ...prev,
          phone:
            "Please enter a valid phone number for the selected country.",
        }));

        return;
      }

      // Example:
      // India: +919175462485
      formattedPhone = parsedPhone.number;
    } catch {
      setFieldErrors((prev) => ({
        ...prev,
        phone: "Enter a valid phone number.",
      }));

      return;
    }

    // =======================================================
    // SUBMIT
    // =======================================================

    setLoading(true);
    setError("");

    try {
      // Save inquiry in backend
      await api.createInquiry({
        name: trimmedName,
        email: trimmedEmail,
        phone: formattedPhone,
        message: trimmedMessage,
        company: "General Consultation",
        emailVerificationToken,
      });

      // Send notification email
      await sendEmail({
        name: trimmedName,
        email: trimmedEmail,
        phone: formattedPhone,
        subject: `Contact Inquiry: General Consultation from ${trimmedName}`,
        message: trimmedMessage,
        inquiryType: "Contact",
        pageSource: "/contact",
      });

      setSuccess(true);
    } catch (err: any) {
      setError(
        err.message ||
          "Failed to log contact message."
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // SUCCESS MESSAGE
  // =========================================================

  const transmissionDescMessage = (
    t.contact.transmissionDesc ||
    "Your message, {name}, has been processed. A council coordinate advisor from the appropriate division will contact you shortly."
  ).replace("{name}", name);

  // =========================================================
  // UI
  // =========================================================

  return (
    <div className="bg-white text-gray-900 min-h-screen pt-28 pb-20 px-4 font-sans relative">

      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">

        {/* =====================================================
            PAGE TITLE
        ====================================================== */}

        <div className="text-center space-y-3 max-w-2xl mx-auto">

          <span className="text-[10px] font-mono tracking-[0.45em] text-orange-600 font-semibold uppercase block">
            {t.contact.accessLines ||
              "DIRECT ACCESS LINES"}
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900">
            {t.contact.council ||
              "Contact the DharaAveda Council"}
          </h1>

          <p className="text-xs text-gray-600 leading-relaxed font-light">
            {t.contact.desc ||
              "Whether arranging shipping vessels for bulk spice operations or planning custom clinical healing admissions, our representatives provide elite corporate care."}
          </p>

        </div>

        {/* =====================================================
            MAIN GRID
        ====================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* ===================================================
              LEFT SIDE - CONTACT INFORMATION
          ==================================================== */}

          <div className="lg:col-span-5 space-y-7 text-left">

            {/* EXPORT LOGISTICS DESK */}

            <div className="p-6 rounded-2xl border border-gray-200 bg-slate-50 shadow-sm space-y-4">

              <span className="text-[9px] font-mono tracking-widest text-orange-600 font-semibold uppercase block">
                {t.contact.exportDesk ||
                  "EXPORT LOGISTICS DESK"}
              </span>

              <h2 className="font-serif text-xl font-semibold text-gray-900">
                {t.contact.cargoAffairs ||
                  "Commodity & Sea Cargo Affairs"}
              </h2>

              <div className="space-y-3 text-xs text-gray-700">

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />

                  <span className="leading-relaxed">
                    {t.contact.addressLine1 ||
                      "B 501 Springwood, Near HP Petrol Pump, Mharunji, Pune – 411057, Maharashtra, India"}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange-500 shrink-0" />

                  <span>{PHONE_NUMBER}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-500 shrink-0" />

                  <span className="break-all">
                    {EMAIL_TO}
                  </span>
                </div>

              </div>
            </div>

            {/* SANCTUARY VILLA */}

            <div className="p-6 rounded-2xl border border-gray-200 bg-slate-50 shadow-sm space-y-4">

              <span className="text-[9px] font-mono tracking-widest text-orange-600 font-semibold uppercase block">
                {t.contact.sanctuaryAdmissions ||
                  "SANCTUARY VILLA ADMISSIONS"}
              </span>

              <h2 className="font-serif text-xl font-semibold text-gray-900">
                {t.contact.healingReserves ||
                  "Holistic Healing Reserves"}
              </h2>

              <div className="space-y-3 text-xs text-gray-700">

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />

                  <span className="leading-relaxed">
                    {t.contact.addressLine2 ||
                      "B 501 Springwood, Near HP Petrol Pump, Mharunji, Pune – 411057, Maharashtra, India"}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange-500 shrink-0" />

                  <span>{PHONE_NUMBER}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-500 shrink-0" />

                  <span className="break-all">
                    {EMAIL_TO}
                  </span>
                </div>

              </div>
            </div>

            {/* RESPONSE RATE */}

            <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-[10px] font-mono text-gray-600 flex items-start gap-3">

              <Clock className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />

              <span className="leading-relaxed">
                {t.contact.responseRate ||
                  "Average response rate of commodity contract brokers is 24 business hours."}
              </span>

            </div>

          </div>

          {/* ===================================================
              RIGHT SIDE - CONTACT FORM
          ==================================================== */}

          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200 shadow-xl">

            {/* =================================================
                SUCCESS SCREEN
            ================================================== */}

            {success ? (

              <div className="py-12 text-center space-y-5">

                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-50 border border-orange-200">
                  <CheckCircle className="w-8 h-8 text-orange-500" />
                </div>

                <h3 className="font-serif text-xl text-gray-900 font-bold">
                  {t.contact.transmissionSealed ||
                    "Transmission Sealed"}
                </h3>

                <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
                  {transmissionDescMessage}
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSuccess(false);
                    setName("");
                    setEmail("");
                    setPhone("");
                    setCountry("IN");
                    setMessage("");

                    setOtp("");
                    setOtpSent(false);
                    setOtpVerified(false);
                    setOtpLoading(false);
                    setOtpError("");
                    setEmailVerificationToken("");
                    setVerifiedEmail("");

                    setFieldErrors({});
                    setError("");
                  }}
                  className="px-6 py-2 border border-orange-500 text-xs font-mono uppercase tracking-widest text-orange-500 hover:bg-orange-500 hover:text-white transition-all rounded-full cursor-pointer"
                >
                  {t.contact.sendAnother ||
                    "Send Another Message"}
                </button>

              </div>

            ) : (

              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5 text-xs text-gray-600 font-sans"
              >

                {/* GENERAL ERROR */}

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-center rounded-lg">
                    {error}
                  </div>
                )}

                {/* =================================================
                    NAME + EMAIL
                ================================================== */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                  {/* NAME */}

                  <div className="text-left">

                    <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-600 mb-1.5">
                      {t.contact.labelName ||
                        "Your Full Name *"}
                    </label>

                    <input
                      type="text"
                      required
                      maxLength={50}
                      value={name}
                      onChange={(e) => {
                        const value = e.target.value;

                        if (/^[A-Za-z ]*$/.test(value)) {
                          setName(value);

                          if (value.trim()) {
                            setFieldErrors((prev) => ({
                              ...prev,
                              name: undefined,
                            }));
                          }
                        }
                      }}
                      placeholder={
                        t.contact.placeholderName ||
                        "e.g. Heinrich Müller"
                      }
                      className={`w-full bg-slate-50 border ${
                        fieldErrors.name
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-300 focus:border-orange-500"
                      } rounded-lg px-3 py-2.5 text-gray-900 outline-none placeholder-gray-400 transition-colors focus:bg-white`}
                      aria-invalid={!!fieldErrors.name}
                    />

                    {fieldErrors.name && (
                      <p className="mt-1.5 text-xs text-red-600">
                        {fieldErrors.name}
                      </p>
                    )}

                  </div>

                  {/* EMAIL */}

                  <div className="text-left">

                    <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-600 mb-1.5">
                      {t.contact.labelEmail ||
                        "Email Address *"}
                    </label>

                    <div className="flex flex-col gap-2">

                      <div className="flex gap-2">

                        <input
                          type="email"
                          required
                          maxLength={254}
                          value={email}
                          disabled={otpVerified}
                          onChange={(e) => {
                            const value = e.target.value;

                            setEmail(value);

                            // Changing email invalidates old OTP
                            setOtpSent(false);
                            setOtpVerified(false);
                            setOtp("");
                            setOtpError("");
                            setEmailVerificationToken("");
                            setVerifiedEmail("");

                            if (value.trim()) {
                              setFieldErrors((prev) => ({
                                ...prev,
                                email: undefined,
                              }));
                            }
                          }}
                          placeholder={
                            t.contact.placeholderEmail ||
                            EMAIL_TO
                          }
                          className={`flex-1 min-w-0 bg-slate-50 border ${
                            fieldErrors.email
                              ? "border-red-400 focus:border-red-500"
                              : "border-gray-300 focus:border-orange-500"
                          } rounded-lg px-3 py-2.5 text-gray-900 outline-none placeholder-gray-400 transition-colors focus:bg-white disabled:bg-gray-100 disabled:cursor-not-allowed`}
                          aria-invalid={!!fieldErrors.email}
                        />

                        {!otpVerified && (
                          <button
                            type="button"
                            onClick={handleSendOtp}
                            disabled={otpLoading}
                            className="shrink-0 px-3 sm:px-4 py-2.5 rounded-lg bg-gray-900 text-white text-[10px] font-mono uppercase tracking-wider hover:bg-orange-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                          >
                            {otpLoading && !otpSent ? (
                              <span className="flex items-center gap-1.5">
                                <Loader className="w-3.5 h-3.5 animate-spin" />
                                Sending
                              </span>
                            ) : (
                              "Send OTP"
                            )}
                          </button>
                        )}

                        {otpVerified && (
                          <div className="shrink-0 flex items-center gap-1.5 px-3 py-2.5 rounded-lg bg-green-50 border border-green-200 text-green-700 text-[10px] font-mono uppercase">
                            <ShieldCheck className="w-4 h-4" />
                            Verified
                          </div>
                        )}

                      </div>

                      {fieldErrors.email && (
                        <p className="text-xs text-red-600">
                          {fieldErrors.email}
                        </p>
                      )}

                    </div>

                  </div>

                </div>

                {/* =================================================
                    OTP VERIFICATION
                ================================================== */}

                {otpSent && !otpVerified && (
                  <div className="rounded-xl border border-orange-200 bg-orange-50/60 p-4">

                    <div className="flex items-start gap-3">

                      <div className="flex items-center justify-center w-9 h-9 rounded-full bg-orange-100 shrink-0">
                        <Mail className="w-4 h-4 text-orange-600" />
                      </div>

                      <div className="flex-1">

                        <p className="text-xs font-semibold text-gray-800">
                          Verify your email address
                        </p>

                        <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">
                          A 6-digit verification code has been
                          sent to{" "}
                          <span className="font-semibold text-gray-800">
                            {email.trim().toLowerCase()}
                          </span>
                          .
                        </p>

                        <div className="flex flex-col sm:flex-row gap-2 mt-3">

                          <input
                            type="text"
                            inputMode="numeric"
                            autoComplete="one-time-code"
                            maxLength={6}
                            value={otp}
                            onChange={(e) => {
                              const value =
                                e.target.value.replace(
                                  /\D/g,
                                  ""
                                );

                              if (value.length <= 6) {
                                setOtp(value);
                                setOtpError("");
                              }
                            }}
                            placeholder="Enter 6-digit OTP"
                            className="flex-1 bg-white border border-gray-300 focus:border-orange-500 rounded-lg px-3 py-2.5 text-gray-900 outline-none tracking-[0.3em] font-mono"
                          />

                          <button
                            type="button"
                            onClick={handleVerifyOtp}
                            disabled={
                              otpLoading ||
                              otp.length !== 6
                            }
                            className="sm:w-32 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed text-white text-[10px] font-mono uppercase tracking-wider transition-colors"
                          >
                            {otpLoading ? (
                              <>
                                <Loader className="w-3.5 h-3.5 animate-spin" />
                                Verify
                              </>
                            ) : (
                              "Verify OTP"
                            )}
                          </button>

                        </div>

                        {otpError && (
                          <p className="mt-2 text-xs text-red-600">
                            {otpError}
                          </p>
                        )}

                        <button
                          type="button"
                          onClick={handleSendOtp}
                          disabled={otpLoading}
                          className="mt-2 text-[10px] font-mono uppercase tracking-wider text-orange-600 hover:text-orange-800 underline disabled:text-gray-400"
                        >
                          Resend OTP
                        </button>

                      </div>

                    </div>

                  </div>
                )}

                {/* OTP ERROR WHEN NOT IN OTP BOX */}

                {otpError && !otpSent && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-xs">
                    {otpError}
                  </div>
                )}

                {/* =================================================
                    PHONE NUMBER
                ================================================== */}

                <div className="text-left">

                  <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-600 mb-1.5">
                    {t.contact.labelPhone ||
                      "Direct Contact Phone *"}
                  </label>

                  <div className="flex flex-col sm:flex-row gap-2">

                    {/* COUNTRY SELECT */}

                    <select
                      value={country}
                      onChange={(e) => {
                        setCountry(
                          e.target.value as CountryCode
                        );

                        setPhone("");

                        setFieldErrors((prev) => ({
                          ...prev,
                          phone: undefined,
                        }));
                      }}
                      className={`w-full sm:w-[45%] bg-slate-50 border ${
                        fieldErrors.phone
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-300 focus:border-orange-500"
                      } rounded-lg px-3 py-2.5 text-gray-900 outline-none transition-colors focus:bg-white`}
                      aria-label="Select country"
                    >

                      {countries.map((countryCode) => (
                        <option
                          key={countryCode}
                          value={countryCode}
                        >
                          {countryNames.of(countryCode)} (+
                          {getCountryCallingCode(
                            countryCode
                          )})
                        </option>
                      ))}

                    </select>

                    {/* PHONE INPUT */}

                    <input
                      type="tel"
                      required
                      inputMode="numeric"
                      maxLength={15}
                      value={phone}
                      onChange={(e) => {
                        const value =
                          e.target.value.replace(
                            /\D/g,
                            ""
                          );

                        if (value.length <= 15) {
                          setPhone(value);

                          if (value) {
                            setFieldErrors((prev) => ({
                              ...prev,
                              phone: undefined,
                            }));
                          }
                        }
                      }}
                      placeholder="Enter phone number"
                      className={`flex-1 w-full bg-slate-50 border ${
                        fieldErrors.phone
                          ? "border-red-400 focus:border-red-500"
                          : "border-gray-300 focus:border-orange-500"
                      } rounded-lg px-3 py-2.5 text-gray-900 placeholder-gray-400 outline-none transition-colors focus:bg-white`}
                      aria-invalid={!!fieldErrors.phone}
                    />

                  </div>

                  {fieldErrors.phone && (
                    <p className="mt-1.5 text-xs text-red-600">
                      {fieldErrors.phone}
                    </p>
                  )}

                </div>

                {/* =================================================
                    MESSAGE
                ================================================== */}

                <div className="text-left">

                  <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-600 mb-1.5">
                    {t.contact.labelMessage ||
                      "Your Inquiries / Requirements *"}
                  </label>

                  <textarea
                    rows={5}
                    required
                    maxLength={2000}
                    value={message}
                    onChange={(e) => {
                      const value = e.target.value;

                      if (value.length <= 2000) {
                        setMessage(value);

                        if (value.trim()) {
                          setFieldErrors((prev) => ({
                            ...prev,
                            message: undefined,
                          }));
                        }
                      }
                    }}
                    placeholder={
                      t.contact.placeholderMessage ||
                      "Describe your bulk spices cargo requirements, clinical therapy intents, or secure scheduling queries..."
                    }
                    className={`w-full bg-slate-50 border ${
                      fieldErrors.message
                        ? "border-red-400 focus:border-red-500"
                        : "border-gray-300 focus:border-orange-500"
                    } rounded-lg px-3 py-2 text-gray-900 placeholder-gray-400 outline-none transition-colors resize-none focus:bg-white`}
                    aria-invalid={!!fieldErrors.message}
                  />

                  <div className="flex justify-between items-start mt-1.5">

                    {fieldErrors.message ? (
                      <p className="text-xs text-red-600">
                        {fieldErrors.message}
                      </p>
                    ) : (
                      <span />
                    )}

                    <span className="text-[10px] text-gray-400">
                      {message.length}/2000
                    </span>

                  </div>

                </div>

                {/* =================================================
                    EMAIL VERIFICATION STATUS
                ================================================== */}

                {!otpVerified && (
                  <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-200">

                    <ShieldCheck className="w-4 h-4 text-gray-400 shrink-0" />

                    <p className="text-[10px] text-gray-500 leading-relaxed">
                      Please verify your email address with OTP
                      before transmitting your inquiry.
                    </p>

                  </div>
                )}

                {/* =================================================
                    SUBMIT BUTTON
                ================================================== */}

                <button
                  type="submit"
                  disabled={
                    loading ||
                    !otpVerified ||
                    !emailVerificationToken ||
                    verifiedEmail !==
                      email.trim().toLowerCase()
                  }
                  className="w-full cursor-pointer flex items-center justify-center gap-2 py-3.5 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed text-white transition-all duration-300 rounded-xl font-bold tracking-widest uppercase text-xs shadow-md shadow-orange-500/10"
                >

                  {loading ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" />
                      <span>
                        {t.contact.transmitting ||
                          "Transmitting Dispatch..."}
                      </span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />

                      <span>
                        {t.contact.submit ||
                          "Transmit Dispatch"}
                      </span>
                    </>
                  )}

                </button>

              </form>

            )}

          </div>

        </div>

      </div>

    </div>
  );
}