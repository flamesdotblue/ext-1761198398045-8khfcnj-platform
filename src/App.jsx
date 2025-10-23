import React from "react";
import Header from "./components/Header";
import NewsTicker from "./components/NewsTicker";
import QuickLinksGrid from "./components/QuickLinksGrid";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600">
          <div className="absolute inset-0 opacity-20" aria-hidden>
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 600">
              <defs>
                <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="120" r="140" fill="url(#g1)" />
              <circle cx="740" cy="80" r="100" fill="url(#g1)" />
              <circle cx="620" cy="420" r="160" fill="url(#g1)" />
            </svg>
          </div>
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 text-white">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide ring-1 ring-white/20 mb-4">
                Government of the Punjab
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                Punjab Public Service Commission
              </h1>
              <p className="mt-4 text-white/90 max-w-2xl">
                Facilitating merit-based recruitment, competitive examinations, and transparent selection for provincial public service.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#links" className="inline-flex items-center gap-2 rounded-md bg-white text-emerald-700 font-semibold px-5 py-2.5 shadow hover:shadow-md transition">
                  Explore Services
                </a>
                <a href="#announcements" className="inline-flex items-center gap-2 rounded-md bg-emerald-500/20 text-white ring-1 ring-white/30 px-5 py-2.5 hover:bg-emerald-500/30 transition">
                  Latest Announcements
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="announcements" className="container mx-auto px-4 -mt-6 md:-mt-8">
          <NewsTicker />
        </section>

        <section id="links" className="container mx-auto px-4 py-12 md:py-16">
          <QuickLinksGrid />
        </section>
      </main>

      <Footer />
    </div>
  );
}
