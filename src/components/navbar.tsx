"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Terminal", href: "https://terminal.vijayvenkatj.me/", external: true },
];

export default function StickyGlassNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Memoized scroll handler with debounce-like behavior
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  // Efficient scroll event listener
  useEffect(() => {
    const throttledHandleScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", throttledHandleScroll);
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, [handleScroll]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const renderNavLink = (name: string, href: string, external?: boolean) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={`px-4 py-2 rounded-full transition-all duration-200 font-medium ${
          isActive
            ? "bg-cyan-400 text-stone-950"
            : "text-white hover:bg-stone-800/50"
        }`}
      >
        {name}
      </Link>
    );
  };

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
          {NAV_ITEMS.map(({ name, href, external }) => (
            <li key={name}>
              {renderNavLink(name, href, external)}
            </li>
          ))}
        </ul>

        {/* Download Resume Button */}
        <div className="hidden md:block">
          <Link 
            href="/vijay-resume.pdf" 
            download="vijay-resume.pdf"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-stone-900 hover:border-purple-400/70 text-white border border-purple-400/10 px-6 py-2 rounded-full font-medium transition-all duration-300"
          >
            <Download className="h-5 w-5" />
            <span>Download Resume</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            className="p-2 rounded-full text-white bg-stone-900/60"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsMobileMenuOpen(false)}>
          <div 
            className="fixed inset-x-0 top-20 mx-4 z-50 md:hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-stone-950/90 rounded-2xl shadow-xl border border-stone-800/50">
              <ul className="p-5">
                {NAV_ITEMS.map(({ name, href, external }) => (
                  <li key={name}>
                    <Link
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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
        </div>
      )}

      {/* Push content down when navbar is fixed */}
      <div className="pt-16"></div>
    </header>
  );
}