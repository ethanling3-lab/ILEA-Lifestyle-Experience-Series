"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/walk-the-world", label: "Walk The World" },
  { href: "/hfhy-dinner", label: "HFHY Dinner" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-primary/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo-black.png"
              alt="ILEA"
              width={160}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground-muted hover:text-blue-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/walk-the-world#register"
              className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-white rounded-full transition-all duration-200
                bg-gradient-to-r from-gold to-[#D4B87A]
                hover:shadow-[0_4px_16px_rgba(201,169,110,0.35)] hover:-translate-y-0.5
                active:translate-y-0 focus-visible:outline-2 focus-visible:outline-gold"
            >
              Join Experience
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-foreground-muted hover:text-foreground hover:bg-background-soft transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-blue-primary/5">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-base font-medium text-foreground-muted hover:text-blue-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/walk-the-world#register"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-6 py-3 text-sm font-medium text-white rounded-full
                bg-gradient-to-r from-gold to-[#D4B87A]"
            >
              Join Experience
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
