import React from "react";
import { FileText, CalendarDays, Award, User, ClipboardList, BookOpenCheck, ShieldCheck, Globe } from "lucide-react";

const links = [
  {
    title: "Apply Online",
    desc: "Submit your application for advertised posts.",
    href: "#",
    icon: User,
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Advertisements",
    desc: "Latest consolidated and case-wise adverts.",
    href: "#",
    icon: FileText,
    color: "from-sky-500 to-cyan-600",
  },
  {
    title: "Exam Schedule",
    desc: "Written tests, interviews and CCE timelines.",
    href: "#",
    icon: CalendarDays,
    color: "from-violet-500 to-indigo-600",
  },
  {
    title: "Results",
    desc: "Merit lists, recommendation and final results.",
    href: "#",
    icon: Award,
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Syllabus & Past Papers",
    desc: "Syllabi, pattern and previous papers.",
    href: "#",
    icon: BookOpenCheck,
    color: "from-rose-500 to-pink-600",
  },
  {
    title: "Guidelines",
    desc: "General instructions and FAQs for candidates.",
    href: "#",
    icon: ClipboardList,
    color: "from-lime-500 to-green-600",
  },
  {
    title: "Policies",
    desc: "Recruitment policy and rules.",
    href: "#",
    icon: ShieldCheck,
    color: "from-fuchsia-500 to-purple-600",
  },
  {
    title: "Official Website",
    desc: "Visit primary portal for complete info.",
    href: "https://www.ppsc.gop.pk/",
    icon: Globe,
    color: "from-slate-600 to-slate-800",
  },
];

export default function QuickLinksGrid() {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">Quick Access</h2>
          <p className="text-slate-600">Find important services and information in one place.</p>
        </div>
        <a href="#" className="text-emerald-700 font-semibold hover:text-emerald-800">View all services →</a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {links.map((item) => (
          <a
            key={item.title}
            href={item.href}
            className="group relative overflow-hidden rounded-xl bg-white ring-1 ring-slate-200 shadow-sm hover:shadow-md transition"
          >
            <div className={`absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br ${item.color} opacity-20`} aria-hidden />
            <div className="p-4 flex items-start gap-3">
              <div className={`grid place-items-center rounded-lg p-2 text-white bg-gradient-to-br ${item.color} shadow-sm`}>
                <item.icon size={22} />
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-slate-900 leading-snug">{item.title}</div>
                <div className="text-sm text-slate-600 line-clamp-2">{item.desc}</div>
              </div>
            </div>
            <div className="px-4 pb-4">
              <span className="text-sm font-medium text-emerald-700 group-hover:text-emerald-800">Open →</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
