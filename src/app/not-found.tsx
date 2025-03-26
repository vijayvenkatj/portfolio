import React from 'react';
import Link from 'next/link';
import PortfolioBackground from '@/components/background';

export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-auto">
      {/* Fixed Background */}
      <div className="fixed inset-0 z-0">
        <PortfolioBackground />
      </div>
      
      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-2 text-center">
          <div className="mb-6 inline-block">
            <div className="px-4 py-2 rounded-full border border-white/20 bg-white/5 text-cyan-400 text-sm font-mono transform hover:scale-105 transition-transform duration-300">
              Page Not Found
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            404 <span className="text-cyan-400">Oops!</span>
          </h1>
      
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            <span className="text-purple-200 font-semibold">The page you're looking for</span> 
            <span className="text-cyan-200 font-semibold"> has disappeared into the digital void.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/" 
              className="px-6 py-3 rounded-full border border-cyan-500/50 bg-stone-900/50 text-cyan-400 hover:bg-cyan-900/30 hover:border-cyan-400 transition-all duration-300 font-medium"
            >
              Go Home
            </Link>
            <Link 
              href="/projects" 
              className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-gray-200 hover:bg-purple-900/30 hover:border-purple-400 hover:text-purple-200 transition-all duration-300 font-medium"
            >
              View Projects
            </Link>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            <p>If you believe this is an error, please contact.</p>
          </div>
        </div>
      </div>
    </div>
  );
}