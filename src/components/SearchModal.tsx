"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { searchContent } from "@/lib/content";
import { categoryMeta, QAItem } from "@/lib/types";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<{ category: string; item: QAItem; relevance: number }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.length >= 2) {
      const searchResults = searchContent(query);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleClose = () => {
    setQuery("");
    setResults([]);
    onClose();
  };

  const getCategorySlug = (categoryName: string): string => {
    return categoryMeta[categoryName]?.slug || "eligibility";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-[10%] left-1/2 -translate-x-1/2 w-full max-w-2xl mx-auto z-50 px-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-accent-100">
              {/* Search Input */}
              <div className="flex items-center gap-4 p-4 border-b border-gray-100">
                <svg
                  className="w-5 h-5 text-accent-500 flex-shrink-0"
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
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for healthcare topics..."
                  className="flex-grow text-lg outline-none placeholder-gray-400"
                />
                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                >
                  <kbd className="px-2 py-1 text-xs bg-gray-100 rounded">ESC</kbd>
                </button>
              </div>

              {/* Results */}
              <div className="max-h-[60vh] overflow-y-auto">
                {query.length < 2 ? (
                  <div className="p-8 text-center text-gray-500">
                    <p className="font-display text-lg mb-2">Search Healthcare Topics</p>
                    <p className="text-sm">
                      Try searching for "eligibility", "enrollment", "dental", "subsidies"...
                    </p>
                  </div>
                ) : results.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    <svg
                      className="w-12 h-12 mx-auto mb-4 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="font-display text-lg mb-2">No results found</p>
                    <p className="text-sm">Try different keywords or browse topics below</p>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-100">
                    {results.map((result, index) => (
                      <Link
                        key={index}
                        href={`/category/${getCategorySlug(result.category)}#q${index}`}
                        onClick={handleClose}
                        className="block p-4 hover:bg-accent-50 transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-accent-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg
                              className="w-4 h-4 text-accent-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <div className="flex-grow min-w-0">
                            <span className="text-xs font-medium text-accent-600 uppercase tracking-wide">
                              {categoryMeta[result.category]?.title || result.category}
                            </span>
                            <p className="font-medium text-slate-800 mt-1 line-clamp-2">
                              {result.item.question}
                            </p>
                            <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                              {result.item.answer_summary.slice(0, 150)}...
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Quick Links Footer */}
              <div className="p-4 bg-gray-50 border-t border-gray-100">
                <p className="text-xs text-gray-500 mb-2">Quick links</p>
                <div className="flex flex-wrap gap-2">
                  {Object.values(categoryMeta).slice(0, 4).map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/category/${cat.slug}`}
                      onClick={handleClose}
                      className="px-3 py-1.5 text-xs font-medium bg-white border border-gray-200 rounded-full hover:border-accent-300 hover:text-accent-600 transition-colors"
                    >
                      {cat.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
