"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "navbar-scrolled" : "bg-transparent"
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center font-bold text-white text-lg group-hover:scale-110 transition-transform">
              AS
            </div>
            <div className="text-white">
              <p className="font-bold text-base leading-tight">Aquatic Shipping</p>
              <p className="text-xs text-gray-300 font-normal">Services</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-brand-orange ${
                  pathname === link.href
                    ? "text-brand-orange"
                    : "text-gray-200"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold 
                         px-5 py-2.5 rounded-lg text-sm transition-all duration-200 hover:scale-105"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-white mb-1.5 transition-all" />
            <div className="w-6 h-0.5 bg-white mb-1.5 transition-all" />
            <div className="w-6 h-0.5 bg-white transition-all" />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-navy-700 rounded-xl mb-4 p-4 shadow-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 px-4 text-gray-200 hover:text-brand-orange hover:bg-navy-600 
                           rounded-lg transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block mt-2 py-3 px-4 bg-brand-orange text-white rounded-lg 
                         text-sm font-semibold text-center"
            >
              Get a Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
