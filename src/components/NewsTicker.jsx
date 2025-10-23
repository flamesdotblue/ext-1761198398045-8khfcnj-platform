import React from "react";
import { Megaphone } from "lucide-react";

const announcements = [
  { id: 1, text: "Advertisement No. 20/2025 has been published. Apply online before 15 Nov 2025.", href: "#" },
  { id: 2, text: "Written test schedule updated for Combined Competitive Examination.", href: "#" },
  { id: 3, text: "Interview letters for various posts are available in candidate portal.", href: "#" },
  { id: 4, text: "Corrigendum: Changes in eligibility criteria for Post XYZ (Health Department).", href: "#" },
];

export default function NewsTicker() {
  return (
    <div className="bg-white rounded-xl shadow-sm ring-1 ring-slate-200 overflow-hidden">
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track { animation: ticker 28s linear infinite; }
        .ticker:hover .ticker-track { animation-play-state: paused; }
      `}</style>
      <div className="ticker flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <Megaphone size={18} />
        <span className="font-semibold tracking-wide text-sm">Latest Announcements</span>
      </div>
      <div className="relative overflow-hidden">
        <div className="whitespace-nowrap flex">
          <ul className="ticker-track flex min-w-[200%]">
            {[...announcements, ...announcements].map((item, idx) => (
              <li key={`${item.id}-${idx}`} className="px-6 py-3 border-r border-slate-200 bg-white text-slate-700 hover:bg-slate-50">
                <a href={item.href} className="hover:text-emerald-700">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
