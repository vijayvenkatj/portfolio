"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import intellisum from '../../../public/intellisum.png';

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
  longDescription?: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

interface ProjectsShowcaseProps {
  projects: Project[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

// Project Card Component
const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative group bg-stone-900/20 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Project Image with Overlay */}
      <div className="relative w-full h-64 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-stone-950/90 z-10 transition-opacity duration-300 ${isHovered ? 'opacity-90' : 'opacity-70'}`}></div>
        
        {project.imageUrl ? (
          <div className="relative h-64 w-full transform transition-transform duration-700 group-hover:scale-110">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="relative h-64 w-full bg-gradient-to-br from-stone-800/30 to-stone-900/30 flex items-center justify-center">
            <span className="text-2xl text-stone-400 font-bold">{project.title[0]}</span>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6 relative z-20 bg-stone-950/20 backdrop-blur-sm">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-stone-300 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="mt-4 text-cyan-400/70 text-sm font-medium flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          View Details
        </div>
      </div>
      
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 transition-opacity duration-300 ease-in-out pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></div>
      <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
      </div>  
    </div>
  );
};

// Modal Component
const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;
  
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-950/80 backdrop-blur-md"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-stone-900/70 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden w-full max-w-3xl max-h-[90vh] overflow-y-auto m-4">
        {/* Close button */}
        <button 
          className="absolute top-4 right-4 text-white hover:text-cyan-400 z-10 p-2"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Project Image */}
        <div className="relative w-full h-64 md:h-80">
          {project.imageUrl ? (
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-stone-800 to-stone-900 flex items-center justify-center">
              <span className="text-4xl text-stone-600 font-bold">{project.title[0]}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-950/90"></div>
          
          {/* Project title on top of image */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {project.title}
            </h2>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 text-sm rounded-full bg-stone-800/80 text-cyan-400 border border-cyan-400/20"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Description */}
          <div className="text-stone-300 mb-8">
            {project.longDescription || project.description}
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {project.githubUrl && (
              <Link 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-stone-800/50 hover:bg-stone-700/70 text-white px-5 py-2 rounded-full border border-white/10 transition-all duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.022A9.607 9.607 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                <span>GitHub Repository</span>
              </Link>
            )}
            
            {project.liveUrl && (
              <Link 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500/50 to-purple-500/50 hover:from-cyan-500/70 hover:to-purple-500/70 text-white px-5 py-2 rounded-full border border-white/10 transition-all duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                </svg>
                <span>View Live Demo</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Projects Showcase Component
const ProjectsShowcase = ({ projects }: ProjectsShowcaseProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };
  
  return (
    <section className="relative w-full py-16">
      {/* Content container - transparent background */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-purple-400">
              My Projects
            </span>
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            A showcase of my work and side projects exploring different technologies and ideas.
          </p>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => openModal(project)}
            />
          ))}
        </div>
      </div>
      
      {/* Project detail modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </section>
  );
};

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
          title: "Intellisum",
          description: "A system that integrates the Gmail API to retrieve inbox data and employs Large Language Models (LLMs) for automated email summarization. ",
          imageUrl: intellisum,
          technologies: ["Generative AI","MongoDB","Gmail API","Full Stack"],
          categories: ["web", "fullstack"],
          githubUrl: "https://github.com/vijayvenkatj/Intellisum",
          liveUrl: "https://intellisum.vijayvenkatj.me"
        },
      // Add more projects as needed
    ];
  
    return <ProjectsShowcase projects={projectsData} />;
}