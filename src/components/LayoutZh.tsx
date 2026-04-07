"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

/* ──────────────────────────────────────────────
   Navbar (Chinese)
   ────────────────────────────────────────────── */

export function NavbarZh() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "首页", href: "/zh" },
    { label: "天行健 · 走世界", href: "/zh/walk-the-world" },
    { label: "快乐盛餐", href: "/zh/hfhy-dinner" },
    { label: "关于我们", href: "/zh/about" },
    { label: "常见问题", href: "/zh/faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-blue-deep/95 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/zh" className="relative h-10 w-36 shrink-0">
          <Image
            src="/logo-white.png"
            alt="ILEA"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-8 font-body text-sm font-medium text-white/80 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link href={l.href} className="transition-colors duration-200 hover:text-white">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/"
            className="rounded-full border border-white/20 px-4 py-2 text-xs font-medium text-white/70 transition-all duration-200 hover:border-white/40 hover:text-white"
          >
            EN
          </Link>
          <Link
            href="/zh#experiences"
            className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-blue-deep transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(255,255,255,0.3)]"
          >
            参与体验
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="切换菜单"
        >
          <span className={`h-0.5 w-6 bg-white transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      <div className={`overflow-hidden transition-all duration-300 md:hidden ${open ? "max-h-96" : "max-h-0"}`}>
        <div className="flex flex-col gap-4 bg-blue-deep/95 px-6 py-6 backdrop-blur-xl">
          {links.map((l) => (
            <Link key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-white/80 transition-colors hover:text-white">
              {l.label}
            </Link>
          ))}
          <Link href="/" onClick={() => setOpen(false)} className="text-xs font-medium text-white/50 transition-colors hover:text-white">
            English Version
          </Link>
          <Link href="/zh#experiences" onClick={() => setOpen(false)} className="mt-2 inline-block rounded-full bg-gradient-to-r from-gold to-[#9ACBEB] px-6 py-2.5 text-center text-sm font-semibold text-white">
            参与体验
          </Link>
        </div>
      </div>
    </nav>
  );
}

/* ──────────────────────────────────────────────
   Footer (Chinese)
   ────────────────────────────────────────────── */

export function FooterZh() {
  return (
    <footer className="relative overflow-hidden bg-blue-deep text-white">
      <div className="grain absolute inset-0" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Image src="/logo-white.png" alt="ILEA" width={140} height={42} className="mb-5 h-10 w-auto" />
            <p className="max-w-sm text-sm leading-relaxed text-white/70">
              一个融合运动、身心健康与社交连接的精品生活方式平台，打造有意义的高品质体验。
            </p>
            <p className="mt-6 text-xs uppercase tracking-wide text-white/40">
              运动 &rarr; 连接 &rarr; 蜕变
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold-light">体验活动</h4>
            <ul className="space-y-3">
              <li><Link href="/zh/walk-the-world" className="text-sm text-white/60 transition-colors duration-200 hover:text-white">天行健 · 走世界</Link></li>
              <li><Link href="/zh/hfhy-dinner" className="text-sm text-white/60 transition-colors duration-200 hover:text-white">快乐盛餐</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold-light">关于</h4>
            <ul className="space-y-3">
              <li><Link href="/zh/about" className="text-sm text-white/60 transition-colors duration-200 hover:text-white">关于 ILEA</Link></li>
              <li><Link href="/zh/faq" className="text-sm text-white/60 transition-colors duration-200 hover:text-white">常见问题</Link></li>
              <li><Link href="/" className="text-sm text-white/60 transition-colors duration-200 hover:text-white">English Version</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} ILEA &mdash; 国际领先教育联盟 · International Leading Education Alliance</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 transition-colors hover:text-white" aria-label="Instagram">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            </a>
            <a href="#" className="text-white/40 transition-colors hover:text-white" aria-label="Facebook">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
