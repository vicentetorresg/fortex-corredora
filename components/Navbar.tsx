"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#por-que-elegirnos", label: "Por qué elegirnos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 glass shadow-lg shadow-navy-950/5 border-b border-navy-100/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/fortex-logo.png"
              alt="Fortex Corredora de Seguros"
              width={180}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-navy-500 hover:text-gold-600 transition-colors duration-300"
              >
                {label}
              </a>
            ))}
            <a
              href="#contacto"
              className="ml-2 px-6 py-2.5 text-sm font-semibold text-navy-700 bg-gradient-to-r from-gold-400 to-gold-600 rounded-lg hover:from-gold-300 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-600/20"
            >
              Cotizar Ahora
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-navy-500 hover:text-gold-600 p-2"
            aria-label="Menú"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/98 glass border-t border-navy-100">
          <div className="px-4 py-6 space-y-4">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block text-base font-medium text-navy-600 hover:text-gold-600 transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="block text-center px-6 py-3 text-sm font-semibold text-navy-700 bg-gradient-to-r from-gold-400 to-gold-600 rounded-lg"
            >
              Cotizar Ahora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
