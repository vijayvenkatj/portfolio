"use client"

// components/StickyGlassNavbar.jsx
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StickyGlassNavbar() {
  const [activeItem, setActiveItem] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300 ${
      isScrolled ? 'py-2' : 'py-4'
    }`}>
      <nav
        className={`w-full max-w-6xl mx-auto bg-stone-900/30 border border-white/10 rounded-full px-6 py-3 flex items-center justify-between ${
            isScrolled ? 'shadow-md shadow-purple-400/60' : ''
        }`}
        >
        {/* Logo section */}
        <div className="flex-shrink-0 px-4">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-medium text-white">Vijay</span>
          </Link>
        </div>
        
        {/* Desktop menu - centered pill navigation */}
        <div className="hidden md:flex items-center justify-center">
          <div className="bg-stone-900/50  rounded-full p-1 flex space-x-1">
            <Link 
              href="/" 
              onClick={() => setActiveItem('home')}
              className={`px-4 py-2 rounded-full transition-all duration-200 font-medium ${
                activeItem === 'home' 
                  ? 'bg-cyan-400 text-stone-950' 
                  : 'text-white hover:bg-stone-800/50'
              }`}
            >
              Home
            </Link>
            <Link 
              href="#about"
              onClick={() => setActiveItem('about')} 
              className={`px-4 py-2 rounded-full transition-all duration-200 font-medium ${
                activeItem === 'about' 
                  ? 'bg-cyan-400 text-stone-950' 
                  : 'text-white hover:bg-stone-800/50'
              }`}
            >
              About
            </Link>
            <Link 
              href="#projects"
              onClick={() => setActiveItem('projects')} 
              className={`px-4 py-2 rounded-full transition-all duration-200 font-medium ${
                activeItem === 'projects' 
                  ? 'bg-cyan-400 text-stone-950' 
                  : 'text-white hover:bg-stone-800/50'
              }`}
            >
              Projects
            </Link>
            <Link 
              href="#contact"
              onClick={() => setActiveItem('contact')} 
              className={`px-4 py-2 rounded-full transition-all duration-200 font-medium ${
                activeItem === 'contact' 
                  ? 'bg-cyan-400 text-stone-950' 
                  : 'text-white hover:bg-stone-800/50'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
        
        {/* Right section with action button */}
        <div className="hidden md:block">
          <button className="flex items-center space-x-2 bg-stone-900 hover:border-purple-400/70  text-white border border-purple-400/10 px-6 py-2 rounded-full font-medium transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download Resume</span>
          </button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-full text-white bg-stone-900/60"
          >
            <span className="sr-only">Open main menu</span>
            {!isMobileMenuOpen ? (
              <svg className="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </nav>
      
      {/* Improved Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-20 mx-4 z-50 md:hidden">
          <div className="bg-stone-950/90 rounded-2xl shadow-xl border border-stone-800/50 overflow-hidden">
            {/* Menu items with better spacing and visuals */}
            <div className="p-5">
              <Link 
                href="/" 
                onClick={() => {
                  setActiveItem('home');
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center px-4 py-3 mb-2 rounded-xl font-medium transition-all ${
                  activeItem === 'home'
                    ? 'bg-purple-400 text-stone-950' 
                    : 'text-white hover:bg-stone-800/50'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </Link>
              <Link 
                href="#about" 
                onClick={() => {
                  setActiveItem('about');
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center px-4 py-3 mb-2 rounded-xl font-medium transition-all ${
                  activeItem === 'about'
                    ? 'bg-cyan-400 text-stone-950' 
                    : 'text-white hover:bg-stone-800/50'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                About
              </Link>
              <Link 
                href="#projects" 
                onClick={() => {
                  setActiveItem('projects');
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center px-4 py-3 mb-2 rounded-xl font-medium transition-all ${
                  activeItem === 'projects'
                    ? 'bg-purple-400 text-stone-950' 
                    : 'text-white hover:bg-stone-800/50'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Projects
              </Link>
              <Link 
                href="#contact" 
                onClick={() => {
                  setActiveItem('contact');
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center px-4 py-3 mb-2 rounded-xl font-medium transition-all ${
                  activeItem === 'contact'
                    ? 'bg-cyan-400 text-stone-950' 
                    : 'text-white hover:bg-stone-800/50'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
      
      {/* Push content down when navbar is fixed */}
      <div className="pt-16"></div>
    </div>
  );
}