"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function DisclaimerPage() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-6 bg-cream-50">
      <div className="container-wide">
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h1 className="font-display text-3xl md:text-4xl font-semibold text-slate-900 leading-tight">
              Disclaimer
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Last updated December 2025
            </p>
          </motion.div>

          {/* Content */}
          <div className="space-y-6">
            {/* Not Official */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-lg font-semibold text-slate-800 mb-3">
                Not an Official Government Website
              </h2>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-3">
                This website is <strong className="text-slate-700">not affiliated with, endorsed by, or connected to</strong> the
                Minnesota Department of Human Services (DHS), the State of Minnesota, or any
                government agency. This is an independent educational resource created to help
                Minnesotans understand and navigate public programs and services.
              </p>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                For official information, please visit{" "}
                <a
                  href="https://mn.gov/dhs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-600 hover:text-accent-700 underline underline-offset-2"
                >
                  mn.gov/dhs
                </a>.
              </p>
            </motion.div>

            <hr className="border-slate-200" />

            {/* Educational Purposes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <h2 className="text-lg font-semibold text-slate-800 mb-3">
                For Educational Purposes Only
              </h2>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-3">
                The information provided on this website is for <strong className="text-slate-700">general educational and
                informational purposes only</strong>. It is not intended to be, and should not be
                construed as, professional advice including but not limited to legal, financial,
                tax, insurance, medical, or any other type of professional advice.
              </p>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                Every individual&apos;s situation is unique. Eligibility for programs, benefits,
                and services depend on your specific circumstances and may change over time.
              </p>
            </motion.div>

            <hr className="border-slate-200" />

            {/* No Guarantee */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-lg font-semibold text-slate-800 mb-3">
                No Guarantee of Accuracy
              </h2>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-3">
                While we strive to provide accurate and up-to-date information, we make <strong className="text-slate-700">no
                warranties or representations</strong> about the accuracy, completeness, reliability,
                or suitability of the information on this website.
              </p>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-3">
                Government programs, eligibility requirements, deadlines, and policies change
                frequently. Information that was accurate when published may become outdated.
                Always verify information with official sources before making decisions.
              </p>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                We are not responsible for any errors, omissions, or for any outcomes related
                to the use of information from this website.
              </p>
            </motion.div>

            <hr className="border-slate-200" />

            {/* External Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <h2 className="text-lg font-semibold text-slate-800 mb-3">
                External Links
              </h2>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                This website contains links to external websites. We do not control and are not
                responsible for the content, privacy policies, or practices of any third-party
                websites. Inclusion of a link does not imply endorsement.
              </p>
            </motion.div>

            <hr className="border-slate-200" />

            {/* Consult Official Sources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-lg font-semibold text-slate-800 mb-3">
                Consult Official Sources
              </h2>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-3">
                Before making any decisions about programs or services, we strongly recommend:
              </p>
              <ul className="space-y-1.5">
                {[
                  "Visiting official government websites (mn.gov/dhs)",
                  "Contacting DHS directly at 651-431-2000 or 800-657-3739",
                  "Speaking with a qualified caseworker or navigator",
                  "Seeking advice from qualified professionals for your specific situation",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-[15px] text-slate-600">
                    <span className="text-slate-400 mt-0.5 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <hr className="border-slate-200" />

            {/* Limitation of Liability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
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
            </motion.div>

            <hr className="border-slate-200" />

            {/* Changes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-lg font-semibold text-slate-800 mb-3">
                Changes to This Disclaimer
              </h2>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                We reserve the right to modify this disclaimer at any time. Changes will be
                effective immediately upon posting. Your continued use of this website after
                changes constitutes acceptance of the updated disclaimer.
              </p>
            </motion.div>

            <hr className="border-slate-200" />

            {/* Agreement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <p className="text-slate-400 text-sm">
                By using this website, you acknowledge that you have read, understood, and
                agree to this disclaimer.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
