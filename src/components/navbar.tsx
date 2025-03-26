"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Terminal", href: "https://terminal.vijayvenkatj.me/" },
];

export default function StickyGlassNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`w-full max-w-6xl mx-auto bg-stone-900/30 border border-white/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center justify-between ${
          isScrolled ? "shadow-md shadow-purple-400/60" : ""
        }`}
      >
        {/* Logo */}
        <div className="flex-shrink-0 px-4">
          <Link href="/" className="flex items-center text-xl font-medium text-white">
            Vijay
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-1 bg-stone-900/50 rounded-full p-1">
          {NAV_ITEMS.map(({ name, href }) => (
            <li key={name}>
              <Link
                href={href}
                className={`px-4 py-2 rounded-full transition-all duration-200 font-medium ${
                  pathname === href
                    ? "bg-cyan-400 text-stone-950"
                    : "text-white hover:bg-stone-800/50"
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Download Resume Button */}
        <div className="hidden md:block">
          <button className="flex items-center space-x-2 bg-stone-900 hover:border-purple-400/70 text-white border border-purple-400/10 px-6 py-2 rounded-full font-medium transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span>Download Resume</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            className="p-2 rounded-full text-white bg-stone-900/60"
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-20 mx-4 z-50 md:hidden">
          <div className="bg-stone-950/90 rounded-2xl shadow-xl border border-stone-800/50">
            <ul className="p-5">
              {NAV_ITEMS.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center px-4 py-3 mb-2 rounded-xl font-medium transition-all ${
                      pathname === href
                        ? "bg-purple-400 text-stone-950"
                        : "text-white hover:bg-stone-800/50"
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Push content down when navbar is fixed */}
      <div className="pt-16"></div>
    </header>
  );
}
