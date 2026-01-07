"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "LINKTREE", href: "/" },
    { name: "RELEASES", href: "/releases" },
  ];

  return (
    <>
      {/* Desktop Horizontal Navigation */}
      <nav className="fixed top-6 left-6 z-50 hidden md:flex items-center gap-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-black italic tracking-tight uppercase transition-all hover:text-white ${
              pathname === link.href ? "text-white" : "text-zinc-400"
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
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-4xl font-black italic tracking-tighter uppercase transition-all hover:scale-110 ${
                pathname === link.href ? "text-white" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}

