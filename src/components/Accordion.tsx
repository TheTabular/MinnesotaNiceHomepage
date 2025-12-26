"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QAItem, Source } from "@/lib/types";

interface AccordionProps {
  items: QAItem[];
  categorySlug: string;
}

interface AccordionItemProps {
  item: QAItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

function SourceTag({ source }: { source: Source }) {
  const typeColors: { [key: string]: string } = {
    official_gov: "bg-green-100 text-green-800",
    official_org: "bg-blue-100 text-blue-800",
    news: "bg-purple-100 text-purple-800",
    other: "bg-gray-100 text-gray-700",
  };

  const typeLabels: { [key: string]: string } = {
    official_gov: "Official",
    official_org: "Organization",
    news: "News",
    other: "Resource",
  };

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${typeColors[source.source_type] || typeColors.other}`}>
      {typeLabels[source.source_type] || "Resource"}
    </span>
  );
}

function AccordionItem({ item, index, isOpen, onToggle }: AccordionItemProps) {
  const validSources = item.sources?.filter(s => s.answers_question) || [];

  return (
    <div
      id={`q${index}`}
      className={`border-b border-accent-100 last:border-b-0 scroll-mt-24 ${
        isOpen ? "bg-accent-50/50" : ""
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-4 p-5 md:p-6 text-left hover:bg-accent-50/50 transition-colors group"
        aria-expanded={isOpen}
      >
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-100 text-accent-700 flex items-center justify-center font-display font-semibold text-sm group-hover:bg-accent-200 transition-colors">
          {index + 1}
        </div>
        <div className="flex-grow min-w-0">
          <h3 className="font-display font-semibold text-lg text-slate-800 pr-8">
            {item.question}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-6 h-6 text-accent-500 mt-1"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-6 pl-[4.5rem]">
              {/* Answer */}
              <div className="prose prose-slate max-w-none">
                <div className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                  {item.answer_summary.split('\n').map((paragraph, i) => {
                    // Handle bullet points
                    if (paragraph.trim().startsWith('*')) {
                      return (
                        <div key={i} className="flex gap-2 mb-2">
                          <span className="text-accent-500 mt-1.5">•</span>
                          <span>{paragraph.trim().slice(1).trim()}</span>
                        </div>
                      );
                    }
                    // Handle headers (text ending with :)
                    if (paragraph.trim().match(/^[A-Z].*:$/)) {
                      return (
                        <p key={i} className="font-semibold text-slate-800 mt-4 mb-2 first:mt-0">
                          {paragraph}
                        </p>
                      );
                    }
                    // Regular paragraphs
                    if (paragraph.trim()) {
                      return (
                        <p key={i} className="mb-3 last:mb-0">
                          {paragraph}
                        </p>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>

              {/* Sources */}
              {validSources.length > 0 && (
                <div className="mt-6 pt-4 border-t border-accent-100">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
                    Sources ({validSources.length})
                  </p>
                  <div className="space-y-2">
                    {validSources.slice(0, 5).map((source, i) => (
                      <a
                        key={i}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 p-3 rounded-lg bg-white border border-accent-100 hover:border-accent-300 hover:shadow-sm transition-all group"
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          <svg
                            className="w-4 h-4 text-accent-400 group-hover:text-accent-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </div>
                        <div className="flex-grow min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-sm text-slate-700 group-hover:text-accent-700 truncate">
                              {source.title}
                            </span>
                            <SourceTag source={source} />
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-2">
                            {source.snippet}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Accordion({ items, categorySlug }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Filter out items with errors
  const validItems = items.filter(item => !item.error && item.answer_summary && !item.answer_summary.startsWith('Error'));

  return (
    <div className="bg-white rounded-2xl border border-accent-100 shadow-sm overflow-hidden">
      {validItems.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          index={index}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
