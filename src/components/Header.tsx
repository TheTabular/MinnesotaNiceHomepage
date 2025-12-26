"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { searchContent } from "@/lib/content";
import { categoryMeta } from "@/lib/types";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchResults, setSearchResults] = useState<ReturnType<typeof searchContent>>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setShowResults(false);
    setSearchQuery("");
  }, [pathname]);

  // Search when query changes
  useEffect(() => {
    if (searchQuery.trim().length >= 2) {
      const results = searchContent(searchQuery);
      setSearchResults(results);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, [searchQuery]);

  // Close search results on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  
  return (
    <>
      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-[90rem] mx-auto">
          <div className="flex items-center h-16 px-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <Image
                src="/minnesota-outline.png"
                alt="Minnesota"
                width={32}
                height={38}
                className="h-9 w-9 mb-[5px]"
                unoptimized
              />
              <span className="font-semibold text-gray-900 text-lg">
                MinnesotaNice
              </span>
            </Link>

            {/* Divider */}
            <div className="hidden min-[900px]:block w-px h-6 bg-gray-200 mx-4" />

            {/* Search Bar - Docs style */}
            <div className="hidden min-[900px]:flex w-96 min-w-12 shrink" ref={searchRef}>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  id="search-input"
                  type="text"
                  placeholder="Search website..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => {
                    setIsSearchFocused(true);
                    if (searchResults.length > 0) setShowResults(true);
                  }}
                  onBlur={() => setIsSearchFocused(false)}
                  className={`block w-full pl-9 pr-12 py-1.5 text-base md:text-sm bg-gray-50 border rounded-md placeholder-gray-400 transition-all duration-150 ${
                    isSearchFocused
                      ? "border-accent-500 ring-2 ring-accent-500/20 bg-white"
                      : "border-gray-200 hover:border-gray-300"
                  } focus:outline-none`}
                />
                {/* Search Results Dropdown */}
                <AnimatePresence>
                  {showResults && searchResults.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50 max-h-[400px] overflow-y-auto"
                    >
                      {searchResults.map((result, idx) => {
                        const catMeta = categoryMeta[result.category];
                        return (
                          <Link
                            key={idx}
                            href={`/category/${catMeta?.slug || ""}`}
                            onClick={() => setShowResults(false)}
                            className="block px-3 py-2.5 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                          >
                            <p className="text-sm text-slate-800 font-medium line-clamp-1">
                              {result.item.question}
                            </p>
                            <p className="text-xs text-slate-500 mt-0.5">
                              {catMeta?.title || result.category}
                            </p>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                  {showResults && searchQuery.trim().length >= 2 && searchResults.length === 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50"
                    >
                      <div className="px-3 py-4 text-sm text-slate-500 text-center">
                        No results found for "{searchQuery}"
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Spacer - shrinks first before search bar */}
            <div className="hidden min-[900px]:block flex-1 min-w-4 shrink-[2]" />

            {/* Desktop Navigation */}
            <nav className="hidden min-[900px]:flex items-center gap-1 flex-shrink-0">
              <Link
                href="/"
                className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                  pathname === "/"
                    ? "text-accent-700 bg-accent-50 font-medium"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                Home
              </Link>

              <div className="relative group">
                <button
                  className={`px-3 py-1.5 text-sm rounded-md transition-colors inline-flex items-center gap-1.5 ${
                    pathname.startsWith("/category")
                      ? "text-accent-700 bg-accent-50 font-medium"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  Sites
                  <svg className="w-3 h-3 opacity-50 -mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Dropdown */}
                <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                    <a
                      href="https://healthcare.minnesotanice.xyz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg"
                    >
                      Healthcare
                      <svg className="w-3.5 h-3.5 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                  pathname === "/contact"
                    ? "text-accent-700 bg-accent-50 font-medium"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                Contact
              </Link>

              <span className="text-gray-300 mx-2">|</span>

              <a
                href="https://mn.gov/dhs/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 pl-3 pr-1 py-1.5 -mr-1 text-sm text-gray-600 hover:text-gray-900 rounded-md hover:bg-gray-50 transition-colors"
              >
                DHS.org
                <svg className="w-3.5 h-3.5 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </nav>

            {/* Mobile: search icon */}
            <div className="flex items-center ml-auto min-[900px]:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className=""
                aria-label="Toggle search"
              >
                <svg className="w-9 h-9 text-[#4a2f77]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="min-[900px]:hidden border-t border-gray-200 bg-white"
            >
              <div className="px-4 py-3">
                {/* Mobile Search */}
                <div className="mb-3">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                      <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Search website..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="block w-full pl-9 pr-4 py-2 text-base bg-gray-50 border border-gray-200 rounded-md placeholder-gray-400 focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 focus:bg-white"
                    />
                  </div>
                  {/* Mobile Search Results */}
                  {searchQuery.trim().length >= 2 && searchResults.length > 0 && (
                    <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden max-h-[300px] overflow-y-auto">
                      {searchResults.map((result, idx) => {
                        const catMeta = categoryMeta[result.category];
                        return (
                          <Link
                            key={idx}
                            href={`/category/${catMeta?.slug || ""}`}
                            className="block px-3 py-2.5 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                          >
                            <p className="text-sm text-slate-800 font-medium line-clamp-2">
                              {result.item.question}
                            </p>
                            <p className="text-xs text-slate-500 mt-0.5">
                              {catMeta?.title || result.category}
                            </p>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                  {searchQuery.trim().length >= 2 && searchResults.length === 0 && (
                    <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-sm px-3 py-3 text-sm text-slate-500 text-center">
                      No results found
                    </div>
                  )}
                </div>

                <nav>
                  <Link
                    href="/"
                    className={`block px-3 py-2.5 text-sm border-b border-gray-100 ${
                      pathname === "/" ? "text-accent-700 font-medium" : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Home
                  </Link>

                  <div className="py-2 border-b border-gray-100">
                    <p className="px-3 py-1.5 text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Sites
                    </p>
                    <a
                      href="https://healthcare.minnesotanice.xyz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    >
                      Healthcare
                      <svg className="w-3.5 h-3.5 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>

                  <Link
                    href="/contact"
                    className={`block px-3 py-2.5 text-sm border-b border-gray-100 ${
                      pathname === "/contact" ? "text-accent-700 font-medium" : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Contact
                  </Link>

                  <a
                    href="https://mn.gov/dhs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  >
                    DHS.org
                    <svg className="w-3.5 h-3.5 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* DHS Contact Bar */}
      <div className="bg-accent-600 text-white">
        <div className="max-w-[90rem] mx-auto px-4">
          <div className="flex flex-col min-[900px]:flex-row min-[900px]:items-center min-[900px]:justify-between py-3 min-[900px]:py-0 min-[900px]:h-10 text-sm gap-2 min-[900px]:gap-0">
            <div className="flex items-center gap-1.5">
              <span className="text-accent-100">DHS Contact:</span>
              <a className="text-white font-medium hover:underline" href="tel:651-431-2000">651-431-2000</a>
              <span className="text-accent-100 mx-0.5">|</span>
              <a className="text-white font-medium hover:underline" href="tel:800-657-3739">800-657-3739</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent-100">Need help?</span>
              <a
                href="https://mn.gov/dhs/people-we-serve/people-with-disabilities/services/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:underline inline-flex items-center gap-1"
              >
                Find Services
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
