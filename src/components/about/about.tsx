import { Metadata } from 'next';
import Link from 'next/link';
import { JSX } from 'react';

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
}

export const metadata: Metadata = {
  title: 'Vijay Venkat | Full Stack Developer & Security Researcher',
  description: 'Passionate full-stack developer specializing in modern web technologies and cybersecurity. Explore my skills, expertise, and professional journey.',
  // Enhanced accessibility metadata
  applicationName: 'Vijay Venkat Portfolio',
  keywords: ['full-stack developer', 'web development', 'cybersecurity', 'react', 'next.js'],
};

const experiences: Experience[] = [
  {
    company: 'Freelance & Personal Projects',
    position: 'Full Stack Developer & Security Researcher',
    period: 'Ongoing',
    description: 'Developed security-focused web applications, including a Cypher CLI tool using Node.js and Go. Built and optimized scalable applications with React, Next.js, and cloud services, ensuring performance and security best practices.'
  },
  {
    company: "CyberSecurity Club IIITK",
    position: "Core Member",
    period: "2023 - Present",
    description: "Helped organizing Apoorv CTF with 2349+ users and 1247 teams. Created Web exploitation challenges. Managed event logistics and participant support."
  }
];

const SocialLinks = () => (
  <div 
    className="flex items-center space-x-4" 
    role="navigation" 
    aria-label="Social media profiles"
  >
    {[
      {
        href: "https://github.com/vijayvenkatj",
        ariaLabel: "Visit Vijay's GitHub profile",
        icon: (
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        )
      },
      {
        href: "https://www.linkedin.com/in/vijayvenkatj/",
        ariaLabel: "Visit Vijay's LinkedIn profile",
        icon: (
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
          </svg>
        )
      },
      {
        href: "https://tryhackme.com/p/vijayvenkatj",
        ariaLabel: "Visit Vijay's TryHackMe profile",
        icon: (
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
          </svg>
        )
      }
    ].map(({ href, ariaLabel, icon }) => (
      <Link 
        key={href}
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-stone-900/80 flex items-center justify-center border border-white/10 hover:border-cyan-500 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
        aria-label={ariaLabel}
      >
        {icon}
      </Link>
    ))}
  </div>
);

const SkillChips = () => (
  <div 
    className="flex flex-wrap gap-2" 
    role="list" 
    aria-label="Professional skills"
  >
    {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "DevOps", "Security"].map((skill) => (
      <span 
        key={skill} 
        role="listitem"
        className="px-3 py-1 bg-stone-800 text-stone-50 text-xs rounded-full"
      >
        {skill}
      </span>
    ))}
  </div>
);

// Rest of the component remains the same, with minor accessibility improvements

export default function AboutMe() {
  return (
    <section 
      id="about" 
      className="relative w-full py-16 md:py-24 bg-transparent"
      aria-labelledby="about-title"
    >
      {/* ... existing code with these key changes ... */}
      <h1 
        id="about-title" 
        className="text-center text-3xl md:text-5xl font-bold"
      >
        <span className="text-white">Who</span>
        <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text ml-2">I Am</span>
      </h1>

      {/* Download Resume button with improved accessibility */}
      <Link 
        href="/resume.pdf" 
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-xs mx-auto py-4 px-8 bg-stone-900 hover:bg-stone-800 border border-purple-400/10 hover:border-purple-400/70 text-white font-medium rounded-lg text-center block"
        aria-label="Download Vijay Venkat's Resume"
      >
        Download Resume
      </Link>
    </section>
  );
}