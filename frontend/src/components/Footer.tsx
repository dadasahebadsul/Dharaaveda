import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";
import { staticTranslations } from "../lib/translations";
import { EMAIL_TO, PHONE_NUMBER } from "../lib/constants";

export default function Footer() {
  const { lang } = useLanguage();

  const translations =
    staticTranslations[lang] || staticTranslations["en"];

  const t = translations.footer;
  const contactT = translations.contact;

  return (
    <footer className="bg-[#0c0c0c] text-gray-400 border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14 sm:py-16 lg:py-20">

        {/* =========================================================
            MAIN FOOTER GRID
        ========================================================= */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-[1.45fr_1fr_1fr_1.25fr]
            gap-x-10
            gap-y-12
            lg:gap-x-14
            xl:gap-x-16
          "
        >

          {/* =======================================================
              COLUMN 1 — BRAND / DESCRIPTION
          ======================================================= */}
          <div className="min-w-0">

            {/* Logo + Brand */}
            <div className="flex items-center gap-4">

              <picture className="shrink-0">
                <source
                  srcSet="/images/logo/logo.svg"
                  type="image/svg+xml"
                />

                <source
                  srcSet="/images/logo/logo.webp"
                  type="image/webp"
                />

                <img
                  src="/images/logo/logo.png"
                  alt="Dharaaveda Logo"
                  width={82}
                  height={82}
                  loading="lazy"
                  decoding="async"
                  className="
                    w-[76px]
                    h-[76px]
                    sm:w-[82px]
                    sm:h-[82px]
                    object-contain
                  "
                />
              </picture>

              <div className="min-w-0">
                <div
                  className="
                    font-serif
                    text-2xl
                    sm:text-[27px]
                    font-bold
                    tracking-[0.16em]
                    text-white
                    leading-none
                    whitespace-nowrap
                  "
                >
                  DHARA
                  <span className="text-orange-500">
                    AVEDA
                  </span>
                </div>

                <div
                  className="
                    mt-2
                    text-[9px]
                    sm:text-[10px]
                    tracking-[0.32em]
                    text-gray-500
                    uppercase
                  "
                >
                  Global Exim
                </div>
              </div>
            </div>

            {/* Description */}
            <p
              className="
                mt-7
                max-w-[390px]
                text-xs
                sm:text-[13px]
                leading-6
                text-gray-400
              "
            >
              {t.desc}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-7">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/pure_bachhealing?utm_source=qr&igsh=MWU0cG5zc25mY3R4Yg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  w-10
                  h-10
                  flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-orange-500/20
                  hover:border-orange-500/60
                  hover:bg-orange-500/5
                  transition-all
                  duration-300
                "
              >
                <svg
                  className="w-4 h-4 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="
                  w-10
                  h-10
                  flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-orange-500/20
                  hover:border-orange-500/60
                  hover:bg-orange-500/5
                  transition-all
                  duration-300
                "
              >
                <svg
                  className="w-4 h-4 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* X */}
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="
                  w-10
                  h-10
                  flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-orange-500/20
                  hover:border-orange-500/60
                  hover:bg-orange-500/5
                  transition-all
                  duration-300
                "
              >
                <svg
                  className="w-4 h-4 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

            </div>
          </div>


          {/* =======================================================
              COLUMN 2 — AGRICULTURAL DIVISION
          ======================================================= */}
          <div className="min-w-0">

            <h3
              className="
                text-white
                font-serif
                text-xs
                uppercase
                tracking-[0.18em]
                pb-3
                mb-5
                border-b
                border-orange-500/15
              "
            >
              {t.agriTitle}
            </h3>

            <ul className="space-y-3.5 text-xs sm:text-[13px] leading-5">

              <li>
                <Link
                  to="/export?category=spices"
                  className="
                    inline-block
                    hover:text-orange-500
                    transition-colors
                    duration-200
                  "
                >
                  {t.agriLink1}
                </Link>
              </li>

              <li>
                <Link
                  to="/export?category=shilajit"
                  className="
                    inline-block
                    hover:text-orange-500
                    transition-colors
                    duration-200
                  "
                >
                  {t.agriLink2}
                </Link>
              </li>

              <li>
                <Link
                  to="/export?category=oils"
                  className="
                    inline-block
                    hover:text-orange-500
                    transition-colors
                    duration-200
                  "
                >
                  {t.agriLink3}
                </Link>
              </li>

              <li>
                <Link
                  to="/export"
                  className="
                    inline-block
                    hover:text-orange-500
                    transition-colors
                    duration-200
                  "
                >
                  {t.agriLink4}
                </Link>
              </li>

              <li className="pt-1">
                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.12em]
                    text-green-500
                    font-mono
                  "
                >
                  {t.agriStatus}
                </span>
              </li>

            </ul>
          </div>


          {/* =======================================================
              COLUMN 3 — WELLNESS DIVISION
          ======================================================= */}
          <div className="min-w-0">

            <h3
              className="
                text-white
                font-serif
                text-xs
                uppercase
                tracking-[0.18em]
                pb-3
                mb-5
                border-b
                border-orange-500/15
              "
            >
              {t.wellnessTitle}
            </h3>

            <ul className="space-y-3.5 text-xs sm:text-[13px] leading-5">

              <li>
                <Link
                  to="/wellness#bach-flower"
                  className="
                    inline-block
                    hover:text-orange-500
                    transition-colors
                    duration-200
                  "
                >
                  {t.wellnessLink1}
                </Link>
              </li>

              <li>
                <Link
                  to="/wellness#reiki"
                  className="
                    inline-block
                    hover:text-orange-500
                    transition-colors
                    duration-200
                  "
                >
                  {t.wellnessLink2}
                </Link>
              </li>

              <li>
                <Link
                  to="/my-bookings"
                  className="
                    inline-block
                    hover:text-orange-500
                    transition-colors
                    duration-200
                  "
                >
                  {t.myBookings || "My Bookings"}
                </Link>
              </li>

              <li>
                <Link
                  to="/booking"
                  className="
                    inline-block
                    hover:text-orange-500
                    transition-colors
                    duration-200
                  "
                >
                  {t.wellnessLink4}
                </Link>
              </li>

            </ul>
          </div>


          {/* =======================================================
              COLUMN 4 — CORPORATE DESK
          ======================================================= */}
          <div className="min-w-0">

            <h3
              className="
                text-white
                font-serif
                text-xs
                uppercase
                tracking-[0.18em]
                pb-3
                mb-5
                border-b
                border-orange-500/15
              "
            >
              {t.corpTitle}
            </h3>

            <ul className="space-y-5 text-xs sm:text-[13px] leading-5">

              {/* Global Trade Office */}
              <li className="flex items-start gap-3">

                <MapPin
                  className="
                    w-4
                    h-4
                    text-orange-500
                    shrink-0
                    mt-0.5
                  "
                />

                <div className="min-w-0">

                  <strong className="block text-gray-300 mb-0.5">
                    {t.corpOffice}
                  </strong>

                  <span className="block text-gray-400">
                    {contactT.addressLine1 ||
                      "B 501 Springwood, Near HP Petrol Pump, Mharunji, Pune – 411057, Maharashtra, India"}
                  </span>

                </div>
              </li>


              {/* Wellness Sanctuary */}
              <li className="flex items-start gap-3">

                <MapPin
                  className="
                    w-4
                    h-4
                    text-orange-500
                    shrink-0
                    mt-0.5
                  "
                />

                <div className="min-w-0">

                  <strong className="block text-gray-300 mb-0.5">
                    {t.corpSanctuary}
                  </strong>

                  <span className="block text-gray-400">
                    {contactT.addressLine2 ||
                      "B 501 Springwood, Near HP Petrol Pump, Mharunji, Pune – 411057, Maharashtra, India"}
                  </span>

                </div>
              </li>


              {/* Phone */}
              <li className="flex items-center gap-3">

                <Phone
                  className="
                    w-4
                    h-4
                    text-orange-500
                    shrink-0
                  "
                />

                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="
                    break-all
                    hover:text-orange-500
                    transition-colors
                  "
                >
                  {PHONE_NUMBER}
                </a>

              </li>


              {/* Email */}
              <li className="flex items-center gap-3">

                <Mail
                  className="
                    w-4
                    h-4
                    text-orange-500
                    shrink-0
                  "
                />

                <a
                  href={`mailto:${EMAIL_TO}`}
                  className="
                    break-all
                    hover:text-orange-500
                    transition-colors
                  "
                >
                  {EMAIL_TO}
                </a>

              </li>

            </ul>
          </div>

        </div>


        {/* =========================================================
            BOTTOM SECTION
        ========================================================= */}
        <div
          className="
            mt-14
            pt-8
            border-t
            border-orange-500/10
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-6
          "
        >

          {/* Certification Badges */}
          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              lg:justify-start
              gap-3
            "
          >

            <span
              className="
                px-3
                py-1.5
                border
                border-orange-500/20
                text-gray-500
                font-mono
                text-[9px]
                uppercase
                tracking-[0.14em]
                rounded
                whitespace-nowrap
              "
            >
              {t.badgeApeda || "APEDA CERTIFIED"}
            </span>

            <span
              className="
                px-3
                py-1.5
                border
                border-orange-500/20
                text-gray-500
                font-mono
                text-[9px]
                uppercase
                tracking-[0.14em]
                rounded
                whitespace-nowrap
              "
            >
              {t.badgeFssai || "FSSAI STANDARD EXPORT"}
            </span>

            <span
              className="
                px-3
                py-1.5
                border
                border-orange-500/20
                text-gray-500
                font-mono
                text-[9px]
                uppercase
                tracking-[0.14em]
                rounded
                whitespace-nowrap
              "
            >
              {t.badgeUsda || "USDA ORGANIC COMPLIANT"}
            </span>

          </div>


          {/* Copyright */}
          <div
            className="
              text-center
              lg:text-right
              font-mono
              text-[10px]
              leading-5
              text-gray-500
              max-w-xl
              lg:ml-auto
            "
          >
            &copy; {new Date().getFullYear()} DharaAveda Luxury Ltd.{" "}
            {t.rights}
          </div>

        </div>

      </div>
    </footer>
  );
}

