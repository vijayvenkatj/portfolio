'use client';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import aws from '../../../public/icons/aws.svg';
import ts from '../../../public/icons/ts.svg';
import js from '../../../public/icons/js.svg';
import python from '../../../public/icons/python.svg';
import nodejs from '../../../public/icons/nodejs.svg';
import nextjs from '../../../public/icons/nextjs.svg';
import react from '../../../public/icons/react.svg';
import docker from '../../../public/icons/docker.svg';
import kubernetes from '../../../public/icons/kubernetes.svg';
import git from '../../../public/icons/git.svg';
import mongo from '../../../public/icons/mongo.svg';
import tailwind from '../../../public/icons/tailwind.svg';
import azure from '../../../public/icons/azure.svg';
import linux from '../../../public/icons/linux.svg';
import jenkins from '../../../public/icons/jenkins.svg';
import api from '../../../public/icons/api.svg';
import nginx from '../../../public/icons/nginx.svg';
import bash from '../../../public/icons/bash.svg';

const technologies = [
  { name: 'React', icon: react },
  { name: 'TypeScript', icon: ts },
  { name: 'JavaScript', icon: js },
  { name: 'Python', icon: python },
  { name: 'Node.js', icon: nodejs },
  { name: 'Docker', icon: docker },
  { name: 'Kubernetes', icon: kubernetes },
  { name: 'Azure', icon: azure },
  { name: 'Jenkins', icon: jenkins },
  { name: 'Git', icon: git },
  { name: 'MongoDB', icon: mongo },
  { name: 'Tailwind CSS', icon: tailwind },
  { name: 'Linux', icon: linux },
  { name: 'RESTful APIs', icon: api },
  { name: 'AWS', icon: aws },
  { name: 'NGINX', icon: nginx },
  { name: 'Next.js', icon: nextjs },
  { name: 'Bash', icon: bash },
];

// Split into two lines
const firstRow = technologies.slice(0, Math.ceil(technologies.length / 2));
const secondRow = technologies.slice(Math.ceil(technologies.length / 2));

const TechnologyTag = ({ name, icon }: { name: string; icon: any }) => (
  <div className="flex flex-col items-center p-4 rounded-lg bg-stone-900/50 border border-white/10 shadow-md hover:border-purple-500/50 transition-colors">
    <div className="relative w-12 h-12 md:w-16 md:h-16">
      <Image src={icon} alt={`${name} icon`} fill className="object-contain" />
    </div>
    <p className="text-sm font-semibold text-gray-300 mt-2">{name}</p>
  </div>
);

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className={`relative w-full py-16 md:py-24 bg-transparent transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <p className="text-center text-sm uppercase tracking-wider text-stone-400 mb-2">Here, My current tech stack</p>
          <h2 className="text-center text-3xl md:text-5xl font-bold">
            <span className="text-white">Technical</span>
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text ml-2">tools</span>
          </h2>
        </div>

        {/* Skills Container */}
        <div className="relative w-full overflow-hidden">
          {/* First Row - Left to Right */}
          <div className="mb-8 relative">
            <div className="flex space-x-6 py-4 animate-scroll-left">
              {[...firstRow, ...firstRow].map((tech, index) => (
                <div key={`row1-${index}`} className="w-32 md:w-40 flex-shrink-0">
                  <TechnologyTag name={tech.name} icon={tech.icon} />
                </div>
              ))}
            </div>
            <div className="absolute left-0 top-0 h-full w-16 bg-transparent"></div>
            <div className="absolute right-0 top-0 h-full w-16 bg-transparent"></div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="relative">
            <div className="flex space-x-6 py-4 animate-scroll-right">
              {[...secondRow, ...secondRow].map((tech, index) => (
                <div key={`row2-${index}`} className="w-32 md:w-40 flex-shrink-0">
                  <TechnologyTag name={tech.name} icon={tech.icon} />
                </div>
              ))}
            </div>
            <div className="absolute left-0 top-0 h-full w-16 bg-transparent"></div>
            <div className="absolute right-0 top-0 h-full w-16 bg-transparent"></div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          display: flex;
          animation: scrollLeft 5s linear infinite;
        }
        .animate-scroll-right {
          display: flex;
          animation: scrollRight 5s linear infinite;
        }
      `}</style>
    </section>
  );
}