import React from 'react';
import Image from 'next/image';
import InstagramLogo from '@/public/instagram_logo.png';
import { AiOutlineInstagram } from 'react-icons/ai';

export default function Header() {
  return (
    <div>
      <div className="flex items-center sticky h-[60px] top-0 border-b border-gray-300 px-4 md:relative md:h-fit md:p-3 md:border-none">
        <Image
          src={InstagramLogo}
          width={100}
          height={30}
          className="md:absolute top-0 left-0 scale-100 md:scale-0 xl:scale-100 transition-all duration-200"
        />
        <AiOutlineInstagram
          size={30}
          className="absolute top-0 left-0 scale-0 md:scale-100 xl:scale-0 transition-all duration-200"
        />
      </div>
    </div>
  );
}
