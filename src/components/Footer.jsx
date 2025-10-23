import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-md bg-gradient-to-br from-emerald-500 to-teal-600 grid place-items-center text-white font-bold">P</div>
            <div>
              <div className="text-sm font-bold">Punjab Public Service Commission</div>
              <div className="text-xs text-slate-500">Government of the Punjab</div>
            </div>
          </div>
          <p className="text-sm text-slate-600 max-w-prose">
            The Commission conducts examinations, interviews and makes recommendations based on merit, transparency and equal opportunity in accordance with the laws of the Punjab.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Important Links</div>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-emerald-700" href="#">Apply Online</a></li>
            <li><a className="hover:text-emerald-700" href="#">Advertisements</a></li>
            <li><a className="hover:text-emerald-700" href="#">Results</a></li>
            <li><a className="hover:text-emerald-700" href="#">Syllabus</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Contact</div>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>Head Office, Lahore</li>
            <li>UAN: 042-111-988-722</li>
            <li>Email: info@ppsc.gop.pk</li>
          </ul>
        </div>
      </div>
      <div className="bg-slate-50 text-slate-600 text-xs">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} Government of the Punjab, PPSC</div>
          <div>Designed for demo purposes</div>
        </div>
      </div>
    </footer>
  );
}
