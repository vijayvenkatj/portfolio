"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import intellisum from '../../../public/intellisum.png';
import cypher from '../../../public/cypher.png';
import timetable from '../../../public/timetable.png';

// Define TypeScript interfaces
interface Project {
  id: number | string;
  title: string;
  description: string;
  imageUrl?: string | StaticImageData;
  technologies: string[];
  categories?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

interface ProjectsShowcaseProps {
  projects: Project[];
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative group bg-stone-950/60 border border-white/20 rounded-xl overflow-hidden transition-all duration-300 hover:border-white/40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image with Overlay */}
      <div className="relative w-full h-64 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-stone-950/90 z-10 transition-opacity duration-300 ${isHovered ? 'opacity-90' : 'opacity-70'}`}></div>
        
        {project.imageUrl ? (
          <div className="relative h-64 w-full">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-fill"
            />
          </div>
        ) : (
          <div className="relative h-64 w-full flex items-center justify-center">
            <span className="text-2xl text-stone-400 font-bold">{project.title[0]}</span>
          </div>
        )}

      </div>
      
      {/* Content */}
      <div className="p-6 relative z-20 bg-stone-950/60">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-stone-300 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        
        {/* Links */}
        <div className="flex items-center space-x-3 mt-4">
          {project.githubUrl && (
            <Link 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-white transition-colors duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.022A9.607 9.607 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              <span className="text-sm font-medium hover:text-purple-400 transition-colors duration-300">GitHub</span>
            </Link>
          )}
          
          {project.liveUrl && (
            <Link 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
              </svg>
              <span className="text-sm font-medium">Live Demo</span>
            </Link>
          )}
        </div>
      </div>
      
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
        <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-purple-400 to-transparent"></div>
      </div>
    </div>
  );
};

const ProjectsShowcase = ({ projects }: ProjectsShowcaseProps) => {
  const [filter, setFilter] = useState<string>('all');
  
  // Get unique categories from projects
  const categories = ['all', ...new Set(projects.flatMap(project => project.categories || []))];
  
  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.categories?.includes(filter));
  
  return (
    <section className="relative w-full py-16">
      {/* Content container - transparent background */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="bg-clip-text text-white/90">
              My Projects
            </span>
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            A showcase of my work and side projects exploring different technologies and ideas.
          </p>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Example usage with typed data
export default function Projects() {
  // Sample projects data - replace with your actual data
  const projectsData: Project[] = [
    {
        id: 1,
        title: "Intellisum",
        description: "A system that integrates the Gmail API to retrieve inbox data and employs Large Language Models (LLMs) for automated email summarization. ",
        imageUrl: intellisum,
        technologies: ["Generative AI","MongoDB","Gmail API","Full Stack"],
        categories: ["web", "fullstack"],
        githubUrl: "https://github.com/vijayvenkatj/Intellisum",
        liveUrl: "https://intellisum.vijayvenkatj.me"
    },
    {
        id: 2,
        title: "TimeTable",
        description: "A simple and efficient timetable management app for students.",
        imageUrl: timetable,
        technologies: ["Generative AI","MongoDB","Full Stack"],
        categories: ["web", "fullstack"],
        githubUrl: "https://github.com/CampusCrafters/Timetable_v2",
        liveUrl: "https://timetable.vijayvenkatj.me/"
    },
    {
      id: 3,
      title: "Cypher-Cli",
      description: "An Open Source all on client cloud Password Manager.",
      imageUrl: cypher,
      technologies: ["Go","CLI","Cryptography","Security"],
      categories: ["cli", "security"],
      githubUrl: "https://github.com/vijayvenkatj/Cypher-Cli",
  },

    // Add more projects as needed
  ];

  return <ProjectsShowcase projects={projectsData} />;
}





