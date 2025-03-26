import React from 'react';
import Image from 'next/image';
import dp from '../../../public/dp.png';

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
          priority
          src={dp}
          alt="Vijay - Portrait"
          width={400}
          height={400}
          layout="intrinsic"  // Helps with CLS (Cumulative Layout Shift)
          quality={90}
          className="object-cover rounded-full transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
}
