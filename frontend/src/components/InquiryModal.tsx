import React, { useState } from "react";
import { X, Send, CheckCircle, Loader } from "lucide-react";
import {parsePhoneNumberFromString,getCountries,getCountryCallingCode,type CountryCode,} from "libphonenumber-js";
import { Product } from "../types";
import { api } from "../lib/api";
import { useLanguage } from "../lib/LanguageContext";
import { staticTranslations } from "../lib/translations";
import { sendEmail } from "../services/emailService";
import { EMAIL_TO, PHONE_NUMBER } from "../lib/constants";

interface InquiryModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function InquiryModal({ product, onClose }: InquiryModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
 const [country, setCountry] = useState<CountryCode>("IN");
  const countries = getCountries();
  const countryNames = new Intl.DisplayNames(["en"], { type: "region" });
  const [company, setCompany] = useState("");
  const [quantity, setQuantity] = useState("");
  const [orderType, setOrderType] = useState<"sample" | "actual">("sample");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [emailVerificationToken, setEmailVerificationToken] = useState("");
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpError, setOtpError] = useState("");
 const [fieldErrors, setFieldErrors] = useState<{
   name?: string;
   email?: string;
   quantity?: string;
   phone?: string;
   message?: string;
 }>({});

  const { lang } = useLanguage();
  const t = staticTranslations[lang] || staticTranslations.en;

  if (!product) return null;

  const pTrans = t.products?.items?.[product.id];
  const productName = pTrans?.name || product.name;

  const handleSendOtp = async () => {
    const trimmedEmail = email.trim().toLowerCase();

    if (!trimmedEmail) {
      setFieldErrors((prev) => ({
        ...prev,
        email: "Corporate email is required",
      }));
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setFieldErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address",
      }));
      return;
    }

    setOtpLoading(true);
    setOtpError("");
    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/inquiries/send-otp`,
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
        throw new Error(data.error || "Failed to send OTP.");
      }

      setOtpSent(true);
      setOtpVerified(false);
      setOtp("");
      setOtpError("");
    } catch (err: any) {
      setOtpError(err.message || "Failed to send OTP. Please try again.");
    } finally {
      setOtpLoading(false);
    }
  };

const handleVerifyOtp = async () => {
  const trimmedEmail = email.trim().toLowerCase();
  const trimmedOtp = otp.trim();

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
      `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/inquiries/verify-otp`,
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
      throw new Error(data.error || "OTP verification failed.");
    }
    setEmailVerificationToken(data.verificationToken);
    setOtpVerified(true);
    setOtpError("");
  } catch (err: any) {
    setOtpVerified(false);
    setOtpError(err.message || "Invalid OTP. Please try again.");
  } finally {
    setOtpLoading(false);
  }
};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
const errors: {
  name?: string;
  email?: string;
  quantity?: string;
  phone?: string;
  message?: string;
} = {};
    if (!name.trim()) {
      errors.name = "Full name is required";
    } else if (name.trim().length < 2) {
      errors.name = "Full name must be at least 2 characters";
    } else if (name.trim().length > 50) {
      errors.name = "Full name must not exceed 50 characters";
    }

    if (!email.trim()) {
      errors.email = "Corporate email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address";
    }

   if (!quantity.trim()) {
     errors.quantity = "Target quantity is required";
   } else if (!/^\d+(\.\d+)?\s*[A-Za-z]*\s*$/.test(quantity.trim())) {
     errors.quantity = "Please enter a valid quantity";
   }

   if (phone.trim()) {
     const phoneNumber = parsePhoneNumberFromString(
       phone.trim(),
       country
     );

     if (!phoneNumber || !phoneNumber.isValid()) {
       errors.phone = "Please enter a valid phone number for the selected country";
     }
   }
    // Message language validation
    if (message.trim()) {
      const messagePatterns: Record<string, RegExp> = {
        en: /^[\p{Script=Latin}\p{Number}\p{P}\p{S}\s]+$/u,
        hi: /^[\p{Script=Devanagari}\p{Number}\p{P}\p{S}\s]+$/u,
        mr: /^[\p{Script=Devanagari}\p{Number}\p{P}\p{S}\s]+$/u,
      };

      const selectedLanguagePattern = messagePatterns[lang];

      if (
        selectedLanguagePattern &&
        !selectedLanguagePattern.test(message.trim())
      ) {
        errors.message =
          "Please enter the message in the selected language.";
      }
    }
    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }
if (!otpVerified) {
  setOtpError("Please verify your corporate email before submitting the inquiry.");
  return;
}
    if (!name || !email || !quantity) {
      setError(t.product.inquiryErrorFields || "Please fill out all mandatory fields.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const finalMessage = message || `Trade request inquiring about premium product ${productName}, min order specs.`;
      
      await api.createInquiry({
        name,
        email,
        phone,
        company,
        productName: productName,
        quantity,
        message: finalMessage,
        emailVerificationToken
      });

      const formattedMessage = `Company: ${company || "Not specified"}\nQuantity: ${quantity}\nDetails: ${finalMessage}`;
      await sendEmail({
        name,
        email,
        phone,
        subject: `Export Inquiry: Request Quote for ${productName}`,
        message: formattedMessage,
        inquiryType: "Export Inquiry",
        pageSource: `/export (Modal for ${productName})`
      });

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "Failed to submit trading inquiry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
      <div 
        id="inquiry-modal"
        className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-2xl p-6 sm:p-8"
      >
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-48 h-48 -mr-16 -mt-16 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="text-left">
            <span className="text-[10px] font-mono tracking-[0.3em] text-orange-600 font-semibold uppercase block mb-1">
              {t.product.inquiryBadge || "INT TRADE ENQUIRY"}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-gray-900 font-bold">
              {t.product.inquiryRequestQuote || "Request Quotation"}
            </h3>
            <p className="text-xs text-gray-600 mt-1">
              {t.product.inquiryDirectAccess || "Direct access to our Agricultural Export Desk for"} <span className="text-orange-600 font-bold">{productName}</span>.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {success ? (
          <div className="py-8 text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-50 border border-orange-200 animate-bounce">
              <CheckCircle className="w-8 h-8 text-orange-500" />
            </div>
            <h4 className="font-serif text-lg text-gray-900 font-bold">
              {t.product.inquirySuccessTitle || "Quotation Request Logged"}
            </h4>
            <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
              {t.product.inquirySuccessDesc || "Your trade desk ticket has been initialized. A dedicated cargo specialist will review your cargo specifications within 24 standard business hours."}
            </p>
            <button
              onClick={onClose}
              className="cursor-pointer px-6 py-2 border border-orange-500 text-xs font-mono uppercase tracking-widest text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 rounded-lg"
            >
              {t.product.inquiryCloseWindow || "Close Window"}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans text-gray-600">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded text-center">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="text-left">
                <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-600 mb-1.5">
                  {t.product.inquiryLabelName || "Full Name *"}
                </label>
                <input
                  type="text"
                  required
                  maxLength={50}
                  value={name}
                  onChange={(e) => {
                    const value = e.target.value;

                    // Allow only letters and spaces
                    if (/^[A-Za-z ]*$/.test(value)) {
                      setName(value);
                    }
                  }}
                  placeholder={t.product.inquiryPlaceholderName || "e.g. Elena Rostova"}
                  className="w-full bg-slate-50 border border-gray-300 focus:border-orange-500 rounded-lg px-3 py-2.5 text-gray-900 placeholder-gray-400 outline-none transition-colors focus:bg-white"
                />
                {fieldErrors.name && (
                  <p className="mt-1 text-xs text-red-500">
                    {fieldErrors.name}
                  </p>
                )}
              </div>

              <div className="text-left">
                <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-600 mb-1.5">
                  {t.product.inquiryLabelEmail || "Corporate Email *"}
                </label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    maxLength={254}
                    value={email}
                    onChange={(e) => {
                      const value = e.target.value.trim();

                      setEmail(value);

                      // Email changed, so previous verification is no longer valid
                      setOtpSent(false);
                      setOtpVerified(false);
                      setOtp("");
                      setOtpError("");

                      if (!value) {
                        setFieldErrors((prev) => ({
                          ...prev,
                          email: "Corporate email is required",
                        }));
                      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                        setFieldErrors((prev) => ({
                          ...prev,
                          email: "Please enter a valid email address",
                        }));
                      } else {
                        setFieldErrors((prev) => ({
                          ...prev,
                          email: undefined,
                        }));
                      }
                    }}
                    placeholder={t.product.inquiryPlaceholderEmail || EMAIL_TO}
                    className="flex-1 min-w-0 bg-slate-50 border border-gray-300 focus:border-orange-500 rounded-lg px-3 py-2.5 text-gray-900 placeholder-gray-400 outline-none transition-colors focus:bg-white"
                  />

                  <button
                    type="button"
                    onClick={handleSendOtp}
                    disabled={otpLoading || otpVerified}
                    className="shrink-0 px-3 py-2.5 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg text-[10px] font-semibold uppercase tracking-wider transition-colors"
                  >
                    {otpLoading ? "Sending..." : otpVerified ? "Verified ✓" : "Send OTP"}
                  </button>
                </div>

                {fieldErrors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {fieldErrors.email}
                  </p>
                )}
              </div>
            </div>

            {otpSent && (
              <div className="mt-3 p-4 bg-orange-50 border border-orange-200 rounded-xl">
                <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-600 mb-1.5">
                  Email Verification OTP
                </label>

                <div className="flex gap-2">
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    value={otp}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");

                      if (value.length <= 6) {
                        setOtp(value);
                        setOtpError("");
                      }
                    }}
                    placeholder="Enter 6-digit OTP"
                    disabled={otpVerified}
                    className="flex-1 min-w-0 bg-white border border-gray-300 focus:border-orange-500 rounded-lg px-3 py-2.5 text-gray-900 placeholder-gray-400 outline-none transition-colors disabled:bg-gray-100"
                  />

                  <button
                    type="button"
                    onClick={handleVerifyOtp}
                    disabled={otpLoading || otpVerified || otp.length !== 6}
                    className="shrink-0 px-3 py-2.5 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg text-[10px] font-semibold uppercase tracking-wider transition-colors"
                  >
                    {otpLoading ? "Verifying..." : otpVerified ? "Verified ✓" : "Verify OTP"}
                  </button>
                </div>

                {otpError && (
                  <p className="mt-2 text-xs text-red-500">
                    {otpError}
                  </p>
                )}

                {otpVerified && (
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-green-600 font-medium">
                    <CheckCircle className="w-4 h-4" />
                    Email verified successfully
                  </div>
                )}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="text-left">
                <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-600 mb-1.5">
                  {t.product.inquiryLabelCompany || "Company / Organization"}
                </label>
                <input
                  type="text"
                  maxLength={100}
                  value={company}
                  onChange={(e) => {
                    const value = e.target.value;

                    if (/^[A-Za-z0-9 .&'()-]*$/.test(value)) {
                      setCompany(value);
                    }
                  }}
                  placeholder={t.product.inquiryPlaceholderCompany || "e.g. Hanseatic Spices GmbH"}
                  className="w-full bg-slate-50 border border-gray-300 focus:border-orange-500 rounded-lg px-3 py-2.5 text-gray-900 placeholder-gray-400 outline-none transition-colors focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-mono tracking-widest text-slate-600 mb-2">
                  ORDER TYPE *
                </label>

                <select
                  value={orderType}
                  onChange={(e) => {
                    setOrderType(e.target.value as "sample" | "actual");
                    setQuantity("");
                    setFieldErrors((prev) => ({
                      ...prev,
                      quantity: undefined,
                    }));
                  }}
                  className="w-full bg-slate-50 border border-gray-300 focus:border-orange-500 rounded-lg px-3 py-2.5 text-gray-900 outline-none transition"
                >
                  <option value="sample">Sample Order</option>
                  <option value="actual">Actual Order</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono tracking-widest text-slate-600 mb-2">
                  TARGET QUANTITY (KG) *
                </label>

                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder={orderType === "sample" ? "Minimum 1 kg" : "Minimum 100 kg"}
                  min={orderType === "sample" ? 1 : 100}
                  step="0.01"
                  className="w-full bg-slate-50 border border-gray-300 focus:border-orange-500 rounded-lg px-3 py-2.5 text-gray-900 placeholder-gray-400 outline-none transition"
                />

                {fieldErrors.quantity && (
                  <p className="mt-1 text-xs text-red-500">
                    {fieldErrors.quantity}
                  </p>
                )}
              </div>
             </div>

            <div className="text-left">
              <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-600 mb-1.5">
                {t.contact.labelPhone || "Direct Contact Phone"}
              </label>
              <div className="flex gap-2">
                <select
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value as CountryCode);
                    setPhone("");
                    setFieldErrors((prev) => ({ ...prev, phone: undefined }));
                  }}
                  className="w-[42%] bg-slate-50 border border-gray-300 focus:border-orange-500 rounded-lg px-3 py-2.5 text-gray-900 outline-none"
                >
                  {countries.map((countryCode) => (
                    <option key={countryCode} value={countryCode}>
                      {countryNames.of(countryCode)} (+{getCountryCallingCode(countryCode)})
                    </option>
                  ))}
                </select>

                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");

                    if (value.length <= 15) {
                      setPhone(value);

                      if (!value) {
                        setFieldErrors((prev) => ({ ...prev, phone: undefined }));
                      }
                    }
                  }}
                  placeholder="Enter phone number"
                  className="flex-1 bg-slate-50 border border-gray-300 focus:border-orange-500 rounded-lg px-3 py-2.5 text-gray-900 placeholder-gray-400 outline-none transition"
                />
              </div>
              {fieldErrors.phone && (
                <p className="mt-1 text-xs text-red-500">
                  {fieldErrors.phone}
                </p>
              )}
            </div>

            <div className="text-left">
              <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-600 mb-1.5">
                {t.product.inquiryMessageLabel || "Custom Port Destination / Packing Demands"}
              </label>

              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.product.inquiryPlaceholderMessage || "Mention specific vacuum-seal requests, harbor ports of choice (e.g. Rotterdam, Hamburg), and phytosanitary certificate needs..."}
                className="w-full bg-slate-50 border border-gray-300 focus:border-orange-500 rounded-lg px-3 py-2 text-gray-900"
              />

              {fieldErrors.message && (
                <p className="mt-1 text-xs text-red-500">
                  {fieldErrors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 cursor-pointer flex items-center justify-center space-x-2 py-3 bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 hover:shadow-lg rounded-xl font-semibold tracking-widest uppercase text-xs shadow-md shadow-orange-500/10"
            >
              {loading ? (
                <>
                  <Loader className="w-4 h-4 animate-spin" />
                  <span>{t.product.inquiryLoggingSpecs || "Logging Cargo Specs..."}</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>{t.product.inquirySubmit || "Transmit Inquiry"}</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
