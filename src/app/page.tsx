"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const resources = [
  {
    title: "Healthcare",
    description: "MNsure, Medical Assistance, MinnesotaCare enrollment and eligibility guides.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    href: "https://healthcare.minnesotanice.xyz",
    external: true,
    color: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100",
  },
  {
    title: "Housing Assistance",
    description: "Rental assistance, Section 8 vouchers, emergency housing, and homeownership programs.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    href: "#",
    external: false,
    color: "bg-blue-50 text-blue-600 group-hover:bg-blue-100",
    comingSoon: true,
  },
  {
    title: "Food & Nutrition",
    description: "SNAP benefits, WIC, food shelves, and community meal programs across Minnesota.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
      </svg>
    ),
    href: "#",
    external: false,
    color: "bg-amber-50 text-amber-600 group-hover:bg-amber-100",
    comingSoon: true,
  },
  {
    title: "Childcare & Family",
    description: "Childcare assistance, parenting resources, and family support services.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    href: "#",
    external: false,
    color: "bg-pink-50 text-pink-600 group-hover:bg-pink-100",
    comingSoon: true,
  },
  {
    title: "Employment",
    description: "Job search assistance, unemployment benefits, and workforce training programs.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    href: "#",
    external: false,
    color: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100",
    comingSoon: true,
  },
  {
    title: "Senior Services",
    description: "Medicare guidance, senior living options, and caregiver support resources.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    href: "#",
    external: false,
    color: "bg-purple-50 text-purple-600 group-hover:bg-purple-100",
    comingSoon: true,
  },
  {
    title: "Disability Services",
    description: "SSI/SSDI information, accessibility resources, and disability support programs.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    href: "#",
    external: false,
    color: "bg-teal-50 text-teal-600 group-hover:bg-teal-100",
    comingSoon: true,
  },
  {
    title: "Legal Aid",
    description: "Free legal services, tenant rights, and civil legal assistance for Minnesotans.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
    href: "#",
    external: false,
    color: "bg-slate-50 text-slate-600 group-hover:bg-slate-100",
    comingSoon: true,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
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
              priority
            />
          </motion.div>
        </div>

        <div className="container-wide relative z-10 py-8 md:py-12 lg:py-16">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-accent-200 text-accent-700 text-xs font-medium shadow-sm mb-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                Healthcare site is now live
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 leading-tight mb-4 md:mb-5 lg:mb-6"
            >
              Minnesota<br />Made Simple
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl"
            >
              Your guide to Minnesota&apos;s public programs and services.
              We simplify complex government resources so you can get the help you need.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-primary"
              >
                Explore
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
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

      {/* Resources Section */}
      <section id="resources" className="py-12 bg-cream-50 scroll-mt-16">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
              Sites for Minnesotans
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Find information about public programs, benefits, and services
              available to Minnesota residents.
            </p>
          </motion.div>

          {/* Resource Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                {resource.comingSoon ? (
                  <div className="group h-full bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm flex flex-col opacity-60 relative">
                    <span className="absolute top-6 right-6 md:top-8 md:right-8 text-xs font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded">Coming Soon</span>
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl ${resource.color} flex items-center justify-center mb-5 transition-all duration-300`}>
                      {resource.icon}
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-slate-800 mb-3">
                      {resource.title}
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed flex-grow">
                      {resource.description}
                    </p>
                  </div>
                ) : (
                  <a
                    href={resource.href}
                    target={resource.external ? "_blank" : undefined}
                    rel={resource.external ? "noopener noreferrer" : undefined}
                    className="group h-full bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm hover:shadow-lg hover:border-accent-300 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl ${resource.color} flex items-center justify-center mb-5 group-hover:scale-105 transition-all duration-300`}>
                      {resource.icon}
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-slate-800 mb-3 group-hover:text-accent-700 transition-colors flex items-center gap-2">
                      {resource.title}
                      {resource.external && (
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed flex-grow">
                      {resource.description}
                    </p>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20 bg-accent-600 relative overflow-hidden">
        <div className="container-narrow relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
              It&apos;s in our DNA
            </h2>
            <p className="text-lg text-accent-100 mb-8 max-w-xl mx-auto">
              We&apos;re building free, easy-to-understand sites to help Minnesotans
              access the programs and services they need.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://mn.gov/dhs/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-accent-700 hover:bg-accent-50 border-2 border-white"
              >
                Official MN DHS Site
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <Link
                href="/contact"
                className="btn bg-transparent text-white border-2 border-white/50 hover:border-white hover:bg-white/10"
              >
                Get Involved
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
