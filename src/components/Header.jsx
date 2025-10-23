import React from "react";
import { Home, FileText, Award, Calendar, Phone, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      {/* Top utility bar */}
      <div className="bg-slate-900 text-slate-100 text-sm">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
            <span>Official Portal</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#contact" className="hover:text-emerald-300 flex items-center gap-1"><Phone size={16}/> Contact</a>
            <a href="#" className="hover:text-emerald-300">Sitemap</a>
            <a href="#" className="hover:text-emerald-300">Accessibility</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4 py-4 flex items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-emerald-500 to-teal-600 grid place-items-center text-white font-bold">P</div>
          <div>
            <div className="text-base font-extrabold leading-tight">Punjab Public Service Commission</div>
            <div className="text-xs text-slate-500 leading-tight">Government of the Punjab</div>
          </div>
        </div>

        <nav className="ml-auto hidden md:flex items-center gap-6 text-sm">
          <a href="#" className="flex items-center gap-2 text-slate-700 hover:text-emerald-600"><Home size={18}/> Home</a>
          <a href="#links" className="flex items-center gap-2 text-slate-700 hover:text-emerald-600"><FileText size={18}/> Advertisements</a>
          <a href="#links" className="flex items-center gap-2 text-slate-700 hover:text-emerald-600"><Calendar size={18}/> Schedule</a>
          <a href="#links" className="flex items-center gap-2 text-slate-700 hover:text-emerald-600"><Award size={18}/> Results</a>
        </nav>

        <form className="ml-auto md:ml-0 flex items-center gap-2 w-full md:w-64">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              placeholder="Search"
              className="w-full rounded-md border border-slate-200 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500"
              aria-label="Search"
            />
          </div>
          <button type="submit" className="hidden md:inline-flex items-center rounded-md bg-emerald-600 text-white text-sm font-semibold px-3 py-2 hover:bg-emerald-700">
            Go
          </button>
        </form>
      </div>
    </header>
  );
}
