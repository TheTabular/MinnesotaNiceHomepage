"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function ContactPage() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent-50 to-cream-50 border-b border-accent-100">
        {/* Background Decoration */}
        <div className="absolute inset-0 decoration-dots opacity-30" />
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 0.08, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute -right-[20px] top-1/2 -translate-y-1/2 w-[500px] h-[500px]"
          >
            <Image
              src="/minnesota-outline.png"
              alt=""
              fill
              className="object-contain"
            />
          </motion.div>
        </div>

        <div className="container-wide relative z-10 py-8 md:py-12 lg:py-16">
          <div className="max-w-3xl">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 leading-tight mb-4 md:mb-5 lg:mb-6"
            >
              Contact &<br className="hidden sm:inline" /> Support
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl"
            >
              Get help with Minnesota Department of Human Services programs and services.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="btn btn-primary"
              >
                Phone
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="https://mn.gov/dhs/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Visit MN DHS
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-6 bg-cream-50 scroll-mt-[64px]">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row gap-6 mb-6">
            {/* Phone Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl border border-accent-100 p-6 md:p-8 lg:shrink-0 lg:max-w-xs"
            >
              <h2 className="font-display text-xl font-semibold text-slate-800 mb-2">
                DHS Information Desk
              </h2>
              <p className="text-slate-600 text-sm mb-6">
                General inquiries about DHS programs and services.
              </p>
              <div>
                <p className="text-2xl font-semibold text-accent-600">651-431-2000</p>
                <p className="text-sm text-slate-500">Main Line</p>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl border border-accent-100 p-6 md:p-8 lg:flex-1 min-w-0"
            >
              <h2 className="font-display text-xl font-semibold text-slate-800 mb-4">
                Business Hours
              </h2>
              <div className="grid grid-cols-7 gap-1 text-center text-xs">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="font-medium text-slate-500 py-2">
                    {day}
                  </div>
                ))}
                {/* Sunday */}
                <div className="py-2 px-1 rounded bg-gray-100 text-gray-400">
                  <div className="font-medium">—</div>
                  <div className="text-[10px] leading-tight mt-0.5">Closed</div>
                </div>
                {/* Monday - Friday */}
                {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
                  <div key={day} className="py-2 px-1 rounded bg-accent-50 text-accent-700">
                    <div className="font-medium">—</div>
                    <div className="text-[10px] leading-tight mt-0.5">8am–4:30pm</div>
                  </div>
                ))}
                {/* Saturday */}
                <div className="py-2 px-1 rounded bg-gray-100 text-gray-400">
                  <div className="font-medium">—</div>
                  <div className="text-[10px] leading-tight mt-0.5">Closed</div>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-4">
                24/7 services available for urgent needs like adult protection via MAARC (Minnesota Adult Abuse Reporting Center).
              </p>
            </motion.div>
          </div>

          {/* Additional Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl border border-accent-100 p-8 md:p-10"
          >
            <h2 className="font-display text-2xl font-semibold text-slate-800 mb-6">
              Additional Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* DHS Website */}
              <div>
                <h3 className="font-semibold text-slate-700 mb-3">
                  DHS Website
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Access program information, applications, and resources for all DHS services.
                </p>
                <a
                  href="https://mn.gov/dhs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-medium"
                >
                  Visit mn.gov/dhs
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Program Contact Numbers */}
              <div>
                <h3 className="font-semibold text-slate-700 mb-3">
                  Program Contact Numbers
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Find specific phone numbers for individual DHS programs and services.
                </p>
                <a
                  href="https://mn.gov/dhs/general-public/about-dhs/contact-us/contact-numbers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-medium"
                >
                  View All Numbers
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* People We Serve */}
              <div>
                <h3 className="font-semibold text-slate-700 mb-3">
                  People We Serve
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Find resources tailored to your situation—children, adults, seniors, and more.
                </p>
                <a
                  href="https://mn.gov/dhs/people-we-serve/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-medium"
                >
                  Explore Resources
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* County/Tribal Contacts */}
              <div>
                <h3 className="font-semibold text-slate-700 mb-3">
                  County & Tribal Contacts
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Many services are administered locally. Find your county or tribal agency.
                </p>
                <a
                  href="https://mn.gov/dhs/general-public/about-dhs/contact-us/county-background/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-medium"
                >
                  Find Local Office
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </>
  );
}
