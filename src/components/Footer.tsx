"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const handleContactClick = (e: React.MouseEvent) => {
    if (pathname === "/contact") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const isDisclaimerPage = pathname === "/disclaimer";

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-[90rem] mx-auto px-6">
        {/* Main Footer Content - hidden on disclaimer page */}
        {!isDisclaimerPage && (
        <div className="py-8 md:py-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16 max-w-3xl">
          {/* Topics */}
          <div>
            <h3 className="font-semibold text-gray-900 text-sm mb-3">Sites</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://healthcare.minnesotanice.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 text-sm transition-colors inline-flex items-center gap-1"
                >
                  Healthcare
                  <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 text-sm mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://mn.gov/dhs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 text-sm transition-colors inline-flex items-center gap-1"
                >
                  MN DHS
                  <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-semibold text-gray-900 text-sm mb-3">DHS Contact</h3>
            <div>
              <Link
                href="/contact"
                onClick={handleContactClick}
                className="text-gray-500 hover:text-gray-900 text-sm transition-colors"
              >
                651-431-2000
              </Link>
              <span className="block text-gray-400 text-xs">(Main Line)</span>
            </div>
          </div>
          </div>
        </div>
        )}

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs text-gray-400">
            <span>© {new Date().getFullYear()} MinnesotaNice<span className="mx-1.5 sm:mx-2">·</span>Educational purposes</span>
            <span className="hidden sm:inline">·</span>
            <span className="inline-flex items-center whitespace-nowrap">
              <Link href="/disclaimer" scroll={true} onClick={() => window.scrollTo(0, 0)} className="hover:text-gray-600 transition-colors">
                Disclaimer
              </Link>
              <span className="mx-1.5 sm:mx-2">·</span>
              <span>No government affiliation</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
