"use client"
import React, { useState, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import cypher from '../../../public/cypher.png';
import intellisum from '../../../public/intellisum.png';
import timetable from '../../../public/timetable.png';
import portfolio from '../../../public/portfolio.png';

// Define TypeScript interfaces
interface CaseStudy {
  id: number | string;
  title: string;
  description: string;
  imageUrl: string | StaticImageData;
  highlights: string[];
  technologies: string[];
  link?: string;
  github?: string;
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  isActive: boolean;
  onClick: () => void;
}

interface FeaturedCaseStudiesProps {
  caseStudies: CaseStudy[];
}

const CaseStudyCard = React.memo(({ caseStudy, isActive, onClick }: CaseStudyCardProps) => {
  return (
    <div 
      className={`relative rounded-xl overflow-hidden transition-all duration-500 cursor-pointer mb-4 ${
        isActive ? 'border-purple-600/90' : 'border-white/40'
      } border`}
      onClick={onClick}
      role="article"
      aria-label={`Project: ${caseStudy.title}`}
    >
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={caseStudy.imageUrl}
          alt={`${caseStudy.title} project screenshot`}
          loading='lazy'
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-transparent opacity-100"></div>
        
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <h3 className="text-xl font-bold text-white mb-1">{caseStudy.title}</h3>
          <p className="text-sm text-stone-100 line-clamp-2">{caseStudy.description}</p>
        </div>
      </div>
    </div>
  );
});

const FeaturedCaseStudies = ({ caseStudies }: FeaturedCaseStudiesProps) => {
  const [activeStudy, setActiveStudy] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setActiveStudy(prev => (prev > 0 ? prev - 1 : caseStudies.length - 1));
    } else {
      setActiveStudy(prev => (prev < caseStudies.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <section 
      id="projects" 
      className="relative w-full py-12 md:py-20 bg-transparent"
      aria-labelledby="featured-projects-title"
    >
      <Head>
        <title>Vijay Venkat - Featured Projects</title>
        <meta 
          name="description" 
          content="Explore my featured software development projects showcasing innovative solutions in web development, AI, and security." 
        />
        <meta 
          name="keywords" 
          content="software projects, web development, AI, NextJS, React, Go, cybersecurity, full-stack development" 
        />
        <link 
          rel="canonical" 
          href="https://vijayvenkatj.me/projects" 
        />
      </Head>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-8 md:mb-16">
          <p 
            className="text-center text-md uppercase tracking-wider text-white mb-2"
            aria-hidden="true"
          >
            FEATURED Personal Projects
          </p>
          <h2 
            id="featured-projects-title" 
            className="text-center text-3xl md:text-5xl font-bold mb-6 md:mb-12"
          >
            <span className="text-white">Featured</span>
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text ml-2 md:ml-4">work</span>
          </h2>
        </div>
        
        {/* Mobile navigation controls (visible on small screens) */}
        <div className="flex justify-between items-center mb-6 md:hidden">
          <button 
            className="p-2 rounded-full bg-stone-900 hover:bg-stone-800 border border-white/10 transition-colors" 
            onClick={() => handleScroll('prev')}
            aria-label="Previous project"
          >
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span className="text-white text-md">
            {activeStudy + 1} / {caseStudies.length}
          </span>
          <button 
            className="p-2 rounded-full bg-stone-900 hover:bg-stone-800 border border-white/10 transition-colors" 
            onClick={() => handleScroll('next')}
            aria-label="Next project"
          >
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 6l6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Thumbnails container - full width on mobile, left side on desktop */}
          <div className="lg:col-span-5 relative">
            {/* Desktop scroll buttons - hidden on mobile */}
            <div className="hidden md:flex absolute -top-12 right-0 space-x-2 z-10">
              <button 
                className="p-2 rounded-full bg-stone-900 hover:bg-stone-800 border border-white/10 transition-colors" 
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollTop -= 200;
                  }
                }}
                aria-label="Scroll up"
              >
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M18 15l-6-6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                className="p-2 rounded-full bg-stone-900 hover:bg-stone-800 border border-white/10 transition-colors" 
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollTop += 200;
                  }
                }}
                aria-label="Scroll down"
              >
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            {/* Desktop scrollable container - hidden on mobile */}
            <div 
              ref={scrollRef} 
              className="hidden md:block max-h-96 lg:max-h-[500px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-stone-900"
              aria-label="Project thumbnails"
            >
              {caseStudies.map((study, index) => (
                <CaseStudyCard
                  key={study.id}
                  caseStudy={study}
                  isActive={index === activeStudy}
                  onClick={() => setActiveStudy(index)}
                />
              ))}
            </div>
            
            {/* Mobile current case study thumbnail - visible only on mobile */}
            <div className="md:hidden">
              <CaseStudyCard
                caseStudy={caseStudies[activeStudy]}
                isActive={true}
                onClick={() => {}}
              />
            </div>
          </div>
          
          {/* Active case study details - full width on mobile, right side on desktop */}
          <div 
            className="lg:col-span-7 bg-stone-950/80 rounded-xl p-6 md:p-8 border border-white/30"
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="flex items-start mb-4 md:mb-6">
              <div className="h-px w-6 md:w-8 bg-purple-500 mr-2 mt-3"></div>
              <h3 className="text-xl md:text-2xl font-bold text-white">{caseStudies[activeStudy].title}</h3>
              <div className="ml-auto flex gap-2">
                {caseStudies[activeStudy].github && (
                  <Link href={caseStudies[activeStudy].github} className="mr-2">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center border border-white/20 hover:border-purple-500 transition-colors">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </Link>
                )}
                <Link href={caseStudies[activeStudy].link || '#'}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center border border-white/20 hover:border-purple-500 transition-colors">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
              
            <p className="text-sm md:text-base text-stone-100 mb-6 md:mb-8">
              {caseStudies[activeStudy].description}
            </p>
              
            <div className="space-y-3 md:space-y-4">
              {caseStudies[activeStudy].highlights.map((highlight, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-2 mt-1">
                    <svg className="w-4 h-4 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 22L3 17V7L12 2L21 7V17L12 22Z" />
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-stone-100">{highlight}</p>
                </div>
              ))}
            </div>
              
            {/* Technologies */}
            <div className="mt-6 md:mt-10 flex flex-wrap gap-2">
              {caseStudies[activeStudy].technologies.map((tech, index) => (
                <div
                  key={index}
                  className="px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm border border-white/30 text-white bg-stone-900/60 hover:border-purple-500"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Mobile dot indicators for navigation */}
        <div className="flex justify-center mt-6 md:hidden space-x-3">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === activeStudy ? 'bg-purple-500' : 'bg-stone-700'
              }`}
              onClick={() => setActiveStudy(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default function FeaturedWork() {
  const caseStudiesData: CaseStudy[] = [
    {
      id: 1,
      title: "TimeTable",
      description: "A simple and efficient timetable management app for students with AI-powered schedule optimization.",
      imageUrl: timetable,
      highlights: [
        "Designed intuitive interface for course scheduling.",
        "Implemented Upload functionality for easy timetable creation.",
        "Integrated conflict detection system for overlapping classes."
      ],
      technologies: ["React", "Mongo", "Tailwind CSS", "Generative AI"],
      link: "https://timetable.vijayvenkatj.me",
      github: "https://github.com/CampusCrafters/Timetable_v2"
    },
    {
      id: 2,
      title: "Cypher-Cli",
      description: "An Open Source client-side cloud Password Manager with advanced encryption techniques.",
      imageUrl: cypher,
      highlights: [
        "Built with Go for high performance and cross-platform compatibility.",
        "Built for Browser and CLI.",
        "Implemented zero-knowledge encryption for maximum security.",
        "Created intuitive CLI interface for easy password management."
      ],
      technologies: ["Go", "CLI", "Cryptography", "Security"],
      github: "https://github.com/vijayvenkatj/Cypher-Cli",
    },
    {
      id: 3,
      title: "IntelliSum",
      description: "A system that integrates the Gmail API to retrieve inbox data and employs Large Language Models for automated email summarization.",
      imageUrl: intellisum,
      highlights: [
        "Built responsive dashboard for email management.",
        "Gmail API integration for real-time email fetching.",
        "Implemented Gemini API integration for email content analysis.",
      ],
      technologies: ["Next.js", "MongoDB", "Gmail API", "Oauth", "Tailwind CSS"],
      link: "https://intellisum.vijayvenkatj.me",
      github: "https://github.com/vijayvenkatj/IntelliSum"
    },
    {
      id: 4,
      title: "Terminal-based Portfolio Website",
      description: "A modern, responsive terminal based portfolio website built with Next.js and Tailwind CSS to showcase projects and skills.",
      imageUrl: portfolio,
      highlights: [
        "Designed with a focus on user experience and accessibility.",
        "Optimized for performance and SEO."
      ],
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      link: "https://terminal.vijayvenkatj.me",
      github: "https://github.com/vijayvenkatj/terminal"
    }
  ];
  
  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Vijay Venkat - Featured Projects",
            "description": "A collection of innovative software development projects showcasing expertise in web technologies, AI, and cybersecurity.",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": caseStudiesData.map((project, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": project.title,
                "description": project.description,
                "url": project.link
              }))
            }
          })}
        </script>
      </Head>
      <FeaturedCaseStudies caseStudies={caseStudiesData} />
    </>
  );
}