"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface RainDrop {
  id: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
  height: number;
}

interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

const PurpleRain = () => {
  const [drops, setDrops] = useState<RainDrop[]>([]);

  useEffect(() => {
    const rainDrops: RainDrop[] = Array.from({ length: 50 }, (_, i) => {
      const duration = 1 + Math.random() * 2;
      return {
        id: i,
        left: Math.random() * 100,
        top: -10, // Start above viewport
        delay: -Math.random() * duration, // Negative delay = already mid-animation
        duration,
        height: 15 + Math.random() * 25,
      };
    });
    setDrops(rainDrops);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="rain-drop"
          style={{
            left: `${drop.left}%`,
            top: `${drop.top}%`,
            animationDelay: `${drop.delay}s`,
            animationDuration: `${drop.duration}s`,
            height: `${drop.height}px`,
          }}
        />
      ))}
    </div>
  );
};

const HealthIcon = () => (
  <svg viewBox="0 0 24 24" className="w-24 h-24">
    <rect x="0.5" y="0.5" width="23" height="23" rx="4" fill="#3a8f88" stroke="black" strokeWidth="1"/>
    <path d="M12 6v12M6 12h12" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
  </svg>
);

const services: ServiceCard[] = [
  {
    title: "Healthcare",
    description: "MNsure, Medicaid & private plan information",
    icon: <HealthIcon />,
    href: "https://healthcare.minnesotanice.xyz",
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [showRain, setShowRain] = useState(true);

  useEffect(() => {
    setMounted(true);

    // Restore scroll position if coming back from disclaimer
    const savedScroll = sessionStorage.getItem('homepage-scroll');
    if (savedScroll) {
      const mainElement = document.querySelector('main');
      if (mainElement) {
        // Small delay to ensure layout is ready
        setTimeout(() => {
          mainElement.scrollTop = parseInt(savedScroll, 10);
        }, 0);
      }
      sessionStorage.removeItem('homepage-scroll');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
        const atServices = rect.top <= 64;
        setShowHeader(atServices);
        setShowRain(!atServices);
      }
    };

    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll);
      return () => mainElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#0d0015] via-[#1a0a2e] to-[#0d0015] snap-y snap-mandatory overflow-y-auto h-screen">
      {showRain && <PurpleRain />}

      {/* Sticky Header - appears when scrolled to services */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-[#0d0015] border-b border-purple-500/20 transition-all duration-300 ${
          showHeader ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
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

      {/* Ambient purple glow effects */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600/15 rounded-full blur-[128px] pointer-events-none" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center snap-start">
        {/* Minnesota outline */}
        <div className={`mb-6 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="relative float-animation">
            <Image
              src="/minnesota-outline.png"
              alt="Minnesota"
              width={120}
              height={140}
              className="opacity-90"
            />
            <div className="absolute inset-0 bg-purple-400/20 blur-2xl" />
          </div>
        </div>

        {/* Main Title */}
        <h1
          className={`text-5xl md:text-7xl font-bold mb-4 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="text-purple-100">Minnesota</span><span className="text-purple-300">Nice</span>
        </h1>

        {/* Tagline */}
        <p className={`text-lg text-purple-300/60 max-w-md mb-16 flex items-center gap-3 transition-all duration-1000 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Image src="/dove-outline.png" alt="" width={20} height={24} className="opacity-80" />
          <span className="italic">&quot;Dearly beloved, we are gathered here today...&quot;</span>
          <Image src="/dove-outline.png" alt="" width={20} height={24} className="opacity-80 scale-x-[-1]" />
        </p>

        {/* Scroll/Swipe indicator */}
        <button
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          className={`group absolute bottom-12 transition-all duration-1000 delay-700 cursor-pointer ${mounted ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="flex flex-col items-center gap-2 text-purple-300/50 group-hover:text-purple-300 transition-colors">
            {/* Desktop: Scroll */}
            <span className="hidden md:block text-xs tracking-widest uppercase">Scroll</span>
            <div className="hidden md:flex w-6 h-10 border-2 border-purple-300/30 group-hover:border-purple-300 rounded-full justify-center pt-2 transition-colors">
              <div className="w-1.5 h-3 bg-purple-400/60 group-hover:bg-purple-300 rounded-full animate-bounce transition-colors" />
            </div>
            {/* Mobile: Swipe Up */}
            <span className="md:hidden text-xs tracking-widest uppercase">Swipe Up</span>
            <svg className="md:hidden w-6 h-6 animate-bounce stroke-purple-300/50 group-hover:stroke-purple-300 transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </div>
        </button>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 px-4 snap-start min-h-screen flex flex-col">
        <div className="pt-[88px] pb-16 flex-grow">
          <div className="max-w-[240px] sm:max-w-[504px] lg:max-w-[768px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center lg:justify-items-start">
              {services.map((service, index) => (
                <a
                  key={index}
                  href={service.href}
                  className="group flex flex-col items-center justify-center w-[240px] h-[240px] rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  {service.icon}
                  <span className="mt-5 text-2xl font-semibold text-white">
                    {service.title}
                  </span>
                  {service.description && (
                    <span className="mt-1 text-sm text-white/50 text-center">
                      {service.description}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="border-t border-purple-500/10 py-8 md:py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <h3 className="font-semibold text-purple-100 text-sm mb-3">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://healthcare.minnesotanice.xyz"
                    className="text-purple-300/60 hover:text-purple-200 text-sm transition-colors"
                  >
                    Healthcare
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-purple-500/10 py-4 px-4 mt-auto">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs text-purple-400/40">
            <span>© {new Date().getFullYear()} MinnesotaNice<span className="mx-1.5 sm:mx-2">·</span>Educational purposes</span>
            <span className="hidden sm:inline">·</span>
            <span className="inline-flex items-center whitespace-nowrap">
              <Link href="/disclaimer" scroll={true} onClick={() => {
                const mainElement = document.querySelector('main');
                if (mainElement) {
                  sessionStorage.setItem('homepage-scroll', mainElement.scrollTop.toString());
                }
              }} className="hover:text-purple-300 transition-colors">Disclaimer</Link>
              <span className="mx-1.5 sm:mx-2">·</span>
              <span>No government affiliation</span>
            </span>
          </div>
        </footer>
      </section>
    </main>
  );
}
