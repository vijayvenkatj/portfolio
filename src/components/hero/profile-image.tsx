import React from 'react';
import Image from 'next/image';
import dp from '../../../public/dp.png';

export default function ProfileImage() {
  return (
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-80 blur-sm"></div>
      <div className="relative overflow-hidden rounded-lg">
        <Image
          loading='lazy'
          src={dp}
          alt="Portrait"
          width={400}
          height={400}
          className="w-full object-cover rounded-full"
        />
      </div>
    </div>
  );
}