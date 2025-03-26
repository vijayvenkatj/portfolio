import React from 'react';
import Image from 'next/image';
import dp from '../../../public/dp.webp';

export default function ProfileImage() {
  return (
    <div className="relative inline-block">
      {/* Optimized gradient background */}
      <div 
        className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-50 blur-sm" 
        aria-hidden="true"
      ></div>
      
      {/* Improved image container */}
      <div className="relative overflow-hidden rounded-full border-4 border-gray-800/50">
      <Image
        src={dp}
        alt="Vijay - Portrait"
        width={400}
        height={400}
        quality={80} // Reduce quality slightly
        priority // Keep priority if it's the LCP element
        className="object-cover rounded-full transition-transform duration-300 hover:scale-105"
      />

      </div>
    </div>
  );
}
