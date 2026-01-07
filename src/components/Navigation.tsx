"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage, Language } from "./LanguageContext";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { language, t } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLanguageChange = (newLang: Language) => {
    if (newLang === language) return;
    
    // Replace the current locale in the pathname
    const segments = pathname.split("/");
    // pathname is like /en/releases or /en
    if (segments.length > 1) {
      segments[1] = newLang;
      const newPathname = segments.join("/") || "/";
      router.push(newPathname);
    } else {
      router.push(`/${newLang}`);
    }
  };

  const navLinks = [
    { name: t("nav_home"), href: `/${language}/` },
    { name: t("nav_linktree"), href: `/${language}/linktree/` },
    { name: t("nav_releases"), href: `/${language}/releases/` },
  ];

  const isActive = (href: string) => {
    return pathname === href || pathname === href.replace(/\/$/, "");
  };

  return (
    <>
      {/* Language Switcher (Desktop) */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2">
        {(["en", "de", "bs"] as Language[]).map((lang) => (
          <button
            key={lang}
            onClick={() => handleLanguageChange(lang)}
            className={`text-[10px] font-black tracking-widest uppercase transition-all px-2 py-1 rounded-md ${
              language === lang ? "bg-white text-black" : "text-zinc-400 hover:text-white"
            }`}
          >
            {lang}
          </button>
        ))}
      </div>

      {/* Desktop Horizontal Navigation */}
      <nav className="fixed top-6 left-6 z-50 hidden md:flex items-center gap-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-black italic tracking-tight uppercase transition-all hover:text-white ${
              isActive(link.href) ? "text-white" : "text-zinc-400"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Hamburger Button (Always visible as requested) */}
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all active:scale-95"
        aria-label="Toggle Menu"
      >
        <span
          className={`h-0.5 w-5 bg-white transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`h-0.5 w-5 bg-white transition-all duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`h-0.5 w-5 bg-white transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 flex items-center justify-center bg-black/95 transition-all duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-12">
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-4xl font-black italic tracking-tighter uppercase transition-all hover:scale-110 ${
                  isActive(link.href) ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Language Switcher (Mobile) */}
          <div className="flex items-center gap-4 rounded-full bg-white/5 border border-white/10 px-6 py-3">
            {(["en", "de", "bs"] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className={`text-xs font-black tracking-[0.2em] uppercase transition-all ${
                  language === lang ? "text-white" : "text-zinc-500 hover:text-white"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
