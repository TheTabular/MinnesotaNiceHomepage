"use client";

import { useEffect, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function DisclaimerPage() {
  // Set gray scrollbar immediately on mount (before paint)
  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-scrollbar", "gray");
    return () => {
      document.documentElement.removeAttribute("data-scrollbar");
    };
  }, []);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen bg-[#fdfcfa]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0d0015] border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center h-16">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/minnesota-outline.png"
                alt="Minnesota"
                width={36}
                height={36}
                className="h-9 w-9 mb-[5px]"
              />
              <span className="font-semibold text-lg">
                <span className="text-purple-100">Minnesota</span><span className="text-purple-300">Nice</span>
              </span>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Back Link */}
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-600 transition-colors mb-6 cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        <div className="max-w-3xl">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight">
              Disclaimer
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Last updated December 2025
            </p>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Not Official */}
            <div>
              <h2 className="text-lg font-semibold text-slate-800 mb-3">
                Not Official Government Website
              </h2>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-3">
                This website is <strong className="text-slate-700">not affiliated with, endorsed by, or connected to</strong> any
                government agency, including MNsure, the Minnesota Department of Human Services (DHS),
                or the State of Minnesota. This is an independent educational resource created to help
                Minnesotans.
              </p>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                For official information, please visit the relevant government websites directly.
              </p>
            </div>

            <hr className="border-slate-200" />

            {/* Educational Purposes */}
            <div>
              <h2 className="text-lg font-semibold text-slate-800 mb-3">
                For Educational Purposes Only
              </h2>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-3">
                The information provided on this website is for <strong className="text-slate-700">general educational and
                informational purposes only</strong>. It is not intended to be, and should not be
                construed as, professional advice including but not limited to legal, financial,
                tax, insurance, or healthcare advice.
              </p>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Every individual&apos;s situation is unique. Eligibility for programs, coverage options,
                costs, and other details depend on your specific circumstances and may change over time.
              </p>
            </div>

            <hr className="border-slate-200" />

            {/* No Guarantee */}
            <div>
              <h2 className="text-lg font-semibold text-slate-800 mb-3">
                No Guarantee of Accuracy
              </h2>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-3">
                While we strive to provide accurate and up-to-date information, we make <strong className="text-slate-700">no
                warranties or representations</strong> about the accuracy, completeness, reliability,
                or suitability of the information on this website.
              </p>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-3">
                Programs, eligibility requirements, deadlines, and policies change
                frequently. Information that was accurate when published may become outdated.
                Always verify information with official sources before making decisions.
              </p>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                We are not responsible for any errors, omissions, or for any outcomes related
                to the use of information from this website.
              </p>
            </div>

            <hr className="border-slate-200" />

            {/* External Links */}
            <div>
              <h2 className="text-lg font-semibold text-slate-800 mb-3">
                External Links
              </h2>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                This website contains links to external websites. We do not control and are not
                responsible for the content, privacy policies, or practices of any third-party
                websites. Inclusion of a link does not imply endorsement.
              </p>
            </div>

            <hr className="border-slate-200" />

            {/* Consult Official Sources */}
            <div>
              <h2 className="text-lg font-semibold text-slate-800 mb-3">
                Consult Official Sources
              </h2>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-3">
                Before making any decisions, we strongly recommend:
              </p>
              <ul className="space-y-1.5">
                {[
                  "Visiting official government websites for the most current information",
                  "Contacting the relevant agencies directly with questions",
                  "Speaking with certified navigators or assisters when available",
                  "Consulting with licensed professionals when appropriate",
                  "Seeking advice from qualified experts for your specific situation",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-[15px] text-slate-600">
                    <span className="text-slate-400 mt-0.5 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <hr className="border-slate-200" />

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-lg font-semibold text-slate-800 mb-3">
                Limitation of Liability
              </h2>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                To the fullest extent permitted by law, we disclaim all liability for any loss,
                damage, cost, or expense (including but not limited to direct, indirect, incidental,
                consequential, or punitive damages) arising from or related to your use of or
                reliance on information from this website, even if we have been advised of the
                possibility of such damages.
              </p>
            </div>

            <hr className="border-slate-200" />

            {/* Changes */}
            <div>
              <h2 className="text-lg font-semibold text-slate-800 mb-3">
                Changes to This Disclaimer
              </h2>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                We reserve the right to modify this disclaimer at any time. Changes will be
                effective immediately upon posting. Your continued use of this website after
                changes constitutes acceptance of the updated disclaimer.
              </p>
            </div>

            <hr className="border-slate-200" />

            {/* Agreement */}
            <div>
              <p className="text-slate-400 text-sm">
                By using this website, you acknowledge that you have read, understood, and
                agree to this disclaimer.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs text-gray-400">
          <span>© {new Date().getFullYear()} MinnesotaNice<span className="mx-1.5 sm:mx-2">·</span>Educational purposes</span>
          <span className="hidden sm:inline">·</span>
          <span className="inline-flex items-center whitespace-nowrap">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-gray-600 transition-colors cursor-pointer">Disclaimer</button>
            <span className="mx-1.5 sm:mx-2">·</span>
            <span>No government affiliation</span>
          </span>
        </div>
      </div>
    </section>
  );
}
