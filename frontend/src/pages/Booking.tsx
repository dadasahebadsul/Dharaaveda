import React, { lazy, Suspense } from "react";
import { useSearchParams } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";
import { staticTranslations } from "../lib/translations";
import { useSeo } from "../lib/useSeo";

const BookingForm = lazy(() => import("../components/BookingForm"));

export default function Booking() {
  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get("serviceId") || "";

  const { lang } = useLanguage();
  const t = staticTranslations[lang] || staticTranslations.en;

  useSeo({
    title:
      t.seo?.bookingTitle ||
      staticTranslations.en.seo?.bookingTitle,

    description:
      t.seo?.bookingDesc ||
      staticTranslations.en.seo?.bookingDesc,
  });

  return (
    <div className="bg-white text-gray-900 min-h-screen pt-28 pb-20 px-4 font-sans relative">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-radial-[circle_at_top,_var(--color-orange-500)_0%,_transparent_60%] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">

        {/* Centered Visual Info Section */}
        <div className="w-full max-w-3xl mx-auto text-center space-y-6 mb-12">

                        {/* Clinic Badge */}
                        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[10px] font-mono text-orange-600 font-semibold uppercase tracking-widest">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>
                            {t.booking.clinic || "HARMONIZATION CLINICS"}
                          </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-wide text-gray-900 leading-tight">
                          {t.booking.sanctuary || "Vibrational Sanctuary"}
                        </h1>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light max-w-2xl mx-auto">
                          {t.booking.desc ||
                            "All consultations are conducted in complete secrecy. Our therapists custom formulate remedies to match active stress fields, facilitating physical release and recovery."}
                        </p>
                        <p className="text-lg sm:text-xl font-semibold text-gray-900 leading-relaxed max-w-4xl mx-auto mt-6">
                          A refined healing space where natural therapies restore balance from within.
                        </p>
                      </div>

        {/* Booking Scheduler and Therapy Cards */}
        <div className="w-full max-w-6xl mx-auto">
          <Suspense
            fallback={
              <div className="animate-pulse bg-slate-50 border border-gray-200 rounded-3xl h-[500px] w-full flex flex-col items-center justify-center p-8">
                <div className="w-10 h-10 border border-orange-500/20 rotate-45 flex items-center justify-center mb-4">
                  <span className="text-[9px] -rotate-45 font-mono text-orange-500 animate-pulse">
                    DA
                  </span>
                </div>

                <div className="text-orange-500 text-[10px] font-mono tracking-[0.25em] uppercase">
                  {t.booking.aligning || "Aligning Aura Diagnostics..."}
                </div>
              </div>
            }
          >
            <BookingForm preselectedServiceId={serviceId} />
          </Suspense>
        </div>

      </div>
    </div>
  );
}
