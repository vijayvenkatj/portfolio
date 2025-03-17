'use client';
import { useState, useEffect } from 'react';
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
  <div className="flex flex-col items-center p-4 rounded-lg bg-stone-900/50 border border-stone-800 shadow-md">
    <div className="relative w-16 h-16">
      <Image src={icon} alt={`${name} icon`} fill className="object-contain" />
    </div>
    <p className="text-sm font-semibold text-gray-300 mt-2">{name}</p>
  </div>
);

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const sectionElement = document.getElementById('skills-section');
    if (sectionElement) observer.observe(sectionElement);

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  return (
    <section id="skills-section" className="w-full bg-transparent rounded-lg overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className={`text-3xl font-extrabold text-white/90 mb-3 transition-all duration-200"`}>
          Technical Skills
        </h2>
        <p className="text-stone-400 max-w-2xl mx-auto">
          Here are some of the tools and technologies I've worked with recently:
        </p>
      </div>

      {/* Scrolling Tech Tracks */}
      <div className="relative w-full overflow-hidden">
        {/* First Row - Left to Right */}
        <div className="flex space-x-6 py-4 animate-scroll-left">
          {[...firstRow, ...firstRow].map((tech, index) => (
            <div key={`row1-${index}`} className="w-40 flex-shrink-0">
              <TechnologyTag name={tech.name} icon={tech.icon} />
            </div>
          ))}
        </div>

        {/* Second Row - Right to Left */}
        <div className="flex space-x-6 py-4 animate-scroll-right">
          {[...secondRow, ...secondRow].map((tech, index) => (
            <div key={`row2-${index}`} className="w-40 flex-shrink-0">
              <TechnologyTag name={tech.name} icon={tech.icon} />
            </div>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          display: flex;
          animation: scrollLeft 30s linear infinite;
        }
        .animate-scroll-right {
          display: flex;
          animation: scrollRight 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
