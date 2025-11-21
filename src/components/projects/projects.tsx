"use client"
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { Github, ExternalLink, Code2 } from 'lucide-react';

import livetran from '../../../public/livetran.png';
import dhwanini from '../../../public/dhwanini.png';
import cypher from '../../../public/cypher.png';
import intellisum from '../../../public/intellisum.png';

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

interface ProjectCardProps {
  project: CaseStudy;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group relative bg-stone-900/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-48 sm:h-60 overflow-hidden">
        <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
        />

        {/* Links Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-stone-950/60 backdrop-blur-[2px]">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className="p-3 bg-stone-900 rounded-full text-white hover:text-purple-400 hover:bg-stone-800 border border-white/10 transition-all transform hover:scale-110"
              title="View Source Code"
            >
              <Github className="w-6 h-6" />
            </Link>
          )}
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              className="p-3 bg-stone-900 rounded-full text-white hover:text-cyan-400 hover:bg-stone-800 border border-white/10 transition-all transform hover:scale-110"
              title="Visit Project"
            >
              <ExternalLink className="w-6 h-6" />
            </Link>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-stone-300 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium text-stone-300 bg-stone-800/50 rounded-full border border-white/5"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 text-xs font-medium text-stone-400 bg-stone-900/50 rounded-full border border-white/5">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default function FeaturedWork() {
  const caseStudiesData: CaseStudy[] = [
    {
      id: 1,
      title: "LiveTran",
      description: "A low-latency live video streaming platform that ingests SRT feeds, transcodes them into adaptive-bitrate HLS using FFmpeg, and delivers them globally through a distributed Go microservices architecture with NATS and Cloudflare R2.",
      imageUrl: livetran,
      highlights: [],
      technologies: ["Go", "FFmpeg", "NATS", "Cloudflare R2", "HLS", "SRT", "Microservices"],
    },
    {
      id: 2,
      title: "Dhwanini",
      description: "A full-featured music education platform combining a public website and an academy portal, built with Next.js, Supabase, and Razorpay, enabling online admissions, interactive video lessons, progress tracking, assignments, and certifications for music learners.",
      imageUrl: dhwanini,
      highlights: [],
      technologies: ["Next.js", "Supabase", "Razorpay", "TypeScript", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "Cypher-Cli",
      description: "An Open Source client-side cloud Password Manager with advanced encryption techniques. Built for Browser and CLI with zero-knowledge encryption for maximum security.",
      imageUrl: cypher,
      highlights: [],
      technologies: ["Go", "CLI", "Cryptography", "Security"],
      github: "https://github.com/vijayvenkatj/Cypher-Cli",
    },
    {
      id: 4,
      title: "IntelliSum",
      description: "A system that integrates the Gmail API to retrieve inbox data and employs Large Language Models for automated email summarization via a responsive dashboard.",
      imageUrl: intellisum,
      highlights: [],
      technologies: ["Next.js", "MongoDB", "Gmail API", "Oauth", "Tailwind CSS"],
      link: "https://intellisum.vijayvenkatj.me",
      github: "https://github.com/vijayvenkatj/IntelliSum"
    }
  ];

  return (
    <section id="projects" className="relative w-full py-20 md:py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-16 md:mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900/50 border border-white/10 text-purple-400 text-sm font-medium mb-6">
            <Code2 className="w-4 h-4" />
            <span>PORTFOLIO</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Featured</span>
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text ml-3">Work</span>
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg">
            A collection of projects that showcase my passion for building scalable systems,
            solving complex problems, and creating intuitive user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {caseStudiesData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}