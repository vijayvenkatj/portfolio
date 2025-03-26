import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const IntroComponent = () => {
  return (
    <header 
      className="relative z-30 flex items-center justify-center px-4 py-16"
      itemScope 
      itemType="http://schema.org/Person"
    >
      <div className="text-center max-w-3xl mx-auto">
        {/* SEO-optimized badge */}
        <div className="mb-6 inline-block">
          <span 
            className="px-4 py-2 rounded-full border border-white/20 bg-white/5 text-cyan-400 text-sm font-mono transform hover:scale-105 transition-transform duration-300"
            itemProp="jobTitle"
          >
            Web Developer & CTF Competitor
          </span>
        </div>
        
        {/* Improved semantic heading with itemProp */}
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white"
          itemProp="name"
        >
          Hey there, I'm <span className="text-cyan-400">Vijay</span>
        </h1>
    
        {/* Enhanced description with semantic markup */}
        <p 
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          itemProp="description"
        >
          <span className="text-purple-200 font-semibold">Building cool projects</span> and <span className="text-cyan-200 font-semibold">competing in CTFs</span>.
        </p>
        
        {/* Navigation with improved accessibility */}
        <nav className="hidden mt-8 sm:flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href='#projects' 
            className="px-6 py-3 rounded-full border border-cyan-500/50 bg-stone-900/50 text-cyan-400 hover:bg-cyan-900/30 hover:border-cyan-400 transition-all duration-300 font-medium"
            aria-label="View My Projects"
          >
            My Projects
          </a>
          <a 
            href='#about' 
            className="hidden sm:flex px-6 py-3 rounded-full border border-white/10 bg-white/5 text-gray-200 hover:bg-purple-900/30 hover:border-purple-400 hover:text-purple-200 transition-all duration-300 font-medium"
            aria-label="Contact Me"
          >
            Contact Me
          </a>
        </nav>

        {/* Scroll Down Arrow with improved accessibility */}
        <a 
          href='#about' 
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
          aria-label="Scroll to Skills Section"
        >
          <FaChevronDown 
            className="text-cyan-400 text-3xl animate-bounce" 
            aria-hidden="true"
          />
        </a>
      </div>
    </header>
  );
};

export default IntroComponent;