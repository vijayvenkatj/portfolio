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
  title: 'About Vijay Venkat | Full Stack Developer & Security Researcher',
  description: 'Passionate full-stack developer specializing in modern web technologies and cybersecurity. Explore my skills, expertise, and professional journey.',
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
  <div className="flex items-center space-x-4">
    <Link 
      href="https://github.com/vijayvenkatj" 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-stone-900/80 flex items-center justify-center border border-white/10 hover:border-cyan-500 transition-colors"
      aria-label="GitHub Profile"
    >
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    </Link>
    <Link 
      href="https://www.linkedin.com/in/vijayvenkatj/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-stone-900/80 flex items-center justify-center border border-white/10 hover:border-cyan-500 transition-colors"
      aria-label="LinkedIn Profile"
    >
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
      </svg>
    </Link>
    <Link 
      href="https://tryhackme.com/p/vijayvenkatj" 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-stone-900/80 flex items-center justify-center border border-white/10 hover:border-cyan-500 transition-colors"
      aria-label="TryHackMe Profile"
    >
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    </Link>
  </div>
);

const SkillChips = () => (
  <div className="flex flex-wrap gap-2">
    {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "DevOps", "Security"].map((skill) => (
      <span 
        key={skill} 
        className="px-3 py-1 bg-stone-800 text-stone-200 text-xs rounded-full"
      >
        {skill}
      </span>
    ))}
  </div>
);

const SkillCard = ({ icon: Icon, title, description, iconBg }: { 
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element, 
  title: string, 
  description: string,
  iconBg: string
}) => (
  <div className="bg-stone-900/50 p-4 rounded-lg border border-white/10">
    <div className="flex items-center mb-2">
      <div className={`w-8 h-8 mr-3 flex items-center justify-center ${iconBg} rounded-lg`}>
        <Icon className="w-4 h-4 text-purple-500" />
      </div>
      <h4 className="text-white font-medium text-sm md:text-base">{title}</h4>
    </div>
    <p className="text-stone-400 text-sm">{description}</p>
  </div>
);

const SkillIcons = {
  FrontendDev: (props:any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  BackendDev: (props:any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  DevOps: (props:any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Security: (props:any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
};

export default function AboutMe() {
  return (
    <section 
      id="about" 
      className="relative w-full py-16 md:py-24 bg-transparent"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <p className="text-center text-sm uppercase tracking-wider text-stone-400 mb-2">ABOUT ME</p>
          <h1 className="text-center text-3xl md:text-5xl font-bold">
            <span className="text-white">Who</span>
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text ml-2">I Am</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Left side - Profile info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-stone-950/80 rounded-xl p-6 border border-white/10">
              <h2 className="text-xl text-white font-bold mb-4">Full Stack Developer</h2>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-stone-300">
                  <div className="w-6 h-6 mr-3 flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2" />
                      <path d="M2 12h20" strokeWidth="2" />
                    </svg>
                  </div>
                  <span>Based in Tamilnadu, India</span>
                </div>
                <div className="flex items-center text-sm text-stone-300">
                  <div className="w-6 h-6 mr-3 flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeWidth="2" />
                    </svg>
                  </div>
                  <span>Available for freelance work</span>
                </div>
              </div>
              
              {/* Skills section */}
              <div className="mt-6">
                <h3 className="text-white font-semibold mb-3">Core Skills</h3>
                <SkillChips />
              </div>
              
              {/* Social links */}
              <div className="mt-6">
                <h3 className="text-white font-semibold mb-3">Connect With Me</h3>
                <SocialLinks />
              </div>
              
              {/* CTA */}
              <div className="mt-6">
                <Link 
                  href="/resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-6 bg-stone-900 hover:border-purple-400/70 border border-purple-400/10 text-white font-medium rounded-lg text-center block"
                >
                  Download Resume
                </Link>
              </div>
            </div>
          </div>
          
          {/* Right side - Bio */}
          <div className="lg:col-span-8">
            <div className="bg-stone-950/80 rounded-xl border border-white/10 overflow-hidden p-6 md:p-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-px w-6 md:w-8 bg-purple-500 mr-2 mt-3"></div>
                  <h2 className="text-xl md:text-2xl font-bold text-white">A Bit About Me</h2>
                </div>
                
                <p className="text-stone-300">
                  I'm a passionate full-stack developer specializing in modern web technologies and cybersecurity. I build scalable, responsive, and secure web applications using JavaScript/TypeScript frameworks like React and Next.js, alongside robust backend solutions with Node.js and cloud services. My expertise extends to penetration testing, CTF challenges, and security-focused development, ensuring applications are both efficient and resilient.
                </p>
                
                <div className="flex items-start mt-8">
                  <div className="h-px w-6 md:w-8 bg-cyan-500 mr-2 mt-3"></div>
                  <h2 className="text-lg md:text-xl font-bold text-white">What I Do</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <SkillCard 
                    icon={SkillIcons.FrontendDev}
                    title="Frontend Development"
                    description="Creating responsive, accessible, and intuitive user interfaces using modern frameworks and design systems."
                    iconBg="bg-purple-500/20"
                  />
                  <SkillCard 
                    icon={SkillIcons.BackendDev}
                    title="Backend Development"
                    description="Building scalable APIs, managing databases, and implementing efficient server-side logic."
                    iconBg="bg-cyan-500/20"
                  />
                  <SkillCard 
                    icon={SkillIcons.DevOps}
                    title="DevOps & Cloud"
                    description="Implementing CI/CD pipelines, containerization, and cloud-based infrastructure solutions."
                    iconBg="bg-purple-500/20"
                  />
                  <SkillCard 
                    icon={SkillIcons.Security}
                    title="Security-Focused Development"
                    description="Building secure and scalable web applications while integrating penetration testing techniques to identify and mitigate vulnerabilities."
                    iconBg="bg-cyan-500/20"
                  />
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="bg-stone-950/80 rounded-xl border border-white/10 overflow-hidden p-6 md:p-8 mt-8">
              <div className="flex items-start mb-6">
                <div className="h-px w-6 md:w-8 bg-purple-500 mr-2 mt-3"></div>
                <h2 className="text-xl md:text-2xl font-bold text-white">Professional Experience</h2>
              </div>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-6 pb-6 border-l border-stone-700 last:pb-0">
                    <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"></div>
                    <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 rounded-full bg-purple-500 animate-ping opacity-75"></div>
                    
                    <h3 className="text-lg font-bold text-white">{exp.position}</h3>
                    <div className="flex flex-wrap items-center mt-1 mb-3">
                      <span className="text-purple-400 text-sm mr-3">{exp.company}</span>
                      <span className="text-stone-500 text-xs px-2 py-1 bg-stone-800 rounded-full">{exp.period}</span>
                    </div>
                    <p className="text-stone-300 text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}