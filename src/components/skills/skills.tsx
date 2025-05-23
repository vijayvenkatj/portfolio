"use client";
import Image from "next/image";
import aws from "../../../public/icons/aws.svg";
import ts from "../../../public/icons/ts.svg";
import js from "../../../public/icons/js.svg";
import python from "../../../public/icons/python.svg";
import nodejs from "../../../public/icons/nodejs.svg";
import nextjs from "../../../public/icons/nextjs.svg";
import react from "../../../public/icons/react.svg";
import docker from "../../../public/icons/docker.svg";
import kubernetes from "../../../public/icons/kubernetes.svg";
import git from "../../../public/icons/git.svg";
import mongo from "../../../public/icons/mongo.svg";
import tailwind from "../../../public/icons/tailwind.svg";
import azure from "../../../public/icons/azure.svg";
import linux from "../../../public/icons/linux.svg";
import jenkins from "../../../public/icons/jenkins.svg";
import api from "../../../public/icons/api.svg";
import nginx from "../../../public/icons/nginx.svg";
import bash from "../../../public/icons/bash.svg";

export const metadata = {
  title: "Skills - My Tech Stack",
  description:
    "A showcase of my current technology stack, including tools like React, TypeScript, AWS, and more.",
};

const technologies = [
  { name: "React", icon: react },
  { name: "TypeScript", icon: ts },
  { name: "JavaScript", icon: js },
  { name: "Python", icon: python },
  { name: "Node.js", icon: nodejs },
  { name: "Docker", icon: docker },
  { name: "Kubernetes", icon: kubernetes },
  { name: "Azure", icon: azure },
  { name: "Jenkins", icon: jenkins },
  { name: "Git", icon: git },
  { name: "MongoDB", icon: mongo },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Linux", icon: linux },
  { name: "RESTful APIs", icon: api },
  { name: "AWS", icon: aws },
  { name: "NGINX", icon: nginx },
  { name: "Next.js", icon: nextjs },
  { name: "Bash", icon: bash },
];

// Duplicate rows for seamless scrolling effect
const scrollingTechnologies = [...technologies, ...technologies];

const TechnologyTag = ({ name, icon }: { name: string; icon: any }) => (
  <div
    className="flex flex-col items-center p-4 rounded-lg bg-stone-900/50 border border-white/10 shadow-md hover:border-purple-500/50 transition-colors"
    aria-label={name}
  >
    <Image
      src={icon}
      alt={`${name} icon`}
      width={64}
      height={64}
      priority={false} // Lazy load for performance
      className="object-contain"
    />
    <p className="text-sm font-semibold text-gray-300 mt-2">{name}</p>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="relative w-full py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center">
          <p className="text-md uppercase tracking-wider text-white mb-2">
            My Current Tech Stack
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-white">Technical</span>
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text ml-2">
              Skills
            </span>
          </h2>
        </div>

        {/* Scrolling Skills */}
        <div className="overflow-hidden relative">
          <div className="flex flex-col space-y-6">
            {/* First Row */}
            <div className="flex space-x-6 py-4 animate-marquee">
              {scrollingTechnologies.map((tech, index) => (
                <div key={`row1-${index}`} className="w-32 md:w-40 flex-shrink-0">
                  <TechnologyTag name={tech.name} icon={tech.icon} />
                </div>
              ))}
            </div>

            {/* Second Row (Reversed Animation) */}
            <div className="flex space-x-6 py-4 animate-marquee-reverse">
              {scrollingTechnologies.map((tech, index) => (
                <div key={`row2-${index}`} className="w-32 md:w-40 flex-shrink-0">
                  <TechnologyTag name={tech.name} icon={tech.icon} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-reverse {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
        .animate-marquee-reverse {
          display: flex;
          animation: marquee-reverse 20s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-marquee,
          .animate-marquee-reverse {
            animation-duration: 30s;
          }
        }
      `}</style>
    </section>
  );
}
