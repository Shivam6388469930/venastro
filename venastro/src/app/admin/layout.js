'use client';

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  LayoutDashboard,
  List,
  Mail,
  Briefcase,
  FileText
} from "lucide-react";
import Link from "next/link";

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(true);

  const ADMIN_KEY = "VENASTRO2025";

  // CLIENT-SIDE CHECK
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");

    if (key !== ADMIN_KEY) {
      window.location.href = "/not-authorized";
    }
  }, []);

  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: `/admin?key=${ADMIN_KEY}` },
    { name: " Leads Information", icon: <List size={20} />, path: `/admin/services-lead?key=${ADMIN_KEY}` },

    { name: "Jobs", icon: <Briefcase size={20} />, path: `/admin/job?key=${ADMIN_KEY}` },
    { name: "Job Applications", icon: <FileText size={20} />, path: `/admin/application?key=${ADMIN_KEY}` },
  ];

  return (
    <div className="min-h-screen flex bg-gray-950 text-white">

      {/* SIDEBAR */}
      <aside
        className={`bg-gray-900 border-r border-gray-800 p-4 transition-all duration-300 ease-in-out ${
          open ? "w-64" : "w-20"
        }`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <span
            className={`font-bold text-xl whitespace-nowrap overflow-hidden transition-all duration-300 ${
              open ? "opacity-100" : "opacity-0 w-0"
            }`}
          >
            Admin Panel
          </span>

          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded hover:bg-gray-800 transition"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* MENU */}
        <nav className="mt-4 space-y-2">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.path}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800 transition-all"
            >
              {/* ICON */}
              <span>{item.icon}</span>

              {/* NAME */}
              <span
                className={`transition-all duration-300 overflow-hidden ${
                  open ? "opacity-100" : "opacity-0 w-0"
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6">
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
          {children}
        </div>
      </main>
    </div>
  );
}
