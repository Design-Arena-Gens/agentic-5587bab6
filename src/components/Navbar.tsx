"use client";

import { useState } from "react";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";

const navLinks = ["Collections", "Bespoke Studio", "Journal", "Consultations"];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream-50/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-7">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="text-slate-500 transition-colors hover:text-slate-900 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close navigation" : "Open navigation"}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
          <span className="font-display text-2xl tracking-[0.35em] text-slate-900">
            LUMI
          </span>
        </div>
        <nav className="hidden items-center gap-9 text-sm font-medium uppercase tracking-[0.25em] text-slate-500 md:flex">
          {navLinks.map((link) => (
            <a key={link} href="#" className="hover:text-slate-900">
              {link}
            </a>
          ))}
        </nav>
        <div className="relative hidden max-w-sm flex-1 items-center md:flex">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            placeholder="Search couture finishes, rituals, accessories..."
            className="w-full rounded-full border border-transparent bg-white/70 px-11 py-3 text-sm text-slate-700 shadow-sm transition focus:border-blush-200 focus:bg-white focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden rounded-full border border-slate-200 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-700 transition hover:border-blush-300 hover:text-blush-600 md:inline-flex">
            Account
          </button>
          <button className="rounded-full bg-slate-900 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-slate-800">
            Boutique Bag (2)
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-cream-200 bg-white/90 px-6 pb-6 pt-4 shadow-lg md:hidden">
          <div className="relative mb-6">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              placeholder="Search the atelier"
              className="w-full rounded-full border border-transparent bg-cream-100 px-11 py-3 text-sm text-slate-700 shadow-sm focus:border-blush-200 focus:bg-white focus:outline-none"
            />
          </div>
          <nav className="flex flex-col gap-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            {navLinks.map((link) => (
              <a key={link} href="#" className="hover:text-slate-900">
                {link}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
