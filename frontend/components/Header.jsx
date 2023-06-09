import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import InstagramLogo from '@/public/instagram_logo.png';
import { AiOutlineInstagram } from 'react-icons/ai';

export default function Header() {
  return (
    <div className="flex flex-col gap-y-4 md:fixed bg-white md:pt-2 md:px-3 md:h-screen md:border-r md:border-gray-300">
      <div className="flex bg-white items-center justify-between fixed px-4 md:p-0 h-[60px] w-screen top-0 border-b border-gray-300 md:relative md:flex-col md:w-auto md:h-[92px]  md:justify-center md:items-center md:border-none xl:w-[220px] min-[1920px]:w-[310px]">
        <Link
          href="/"
          className="top-0 left-0 scale-100 md:absolute md:top-1/2 md:-translate-y-1/2 md:scale-0 xl:scale-100 transition-all duration-200 xl:px-2"
        >
          <Image
            src={InstagramLogo}
            width={100}
            height={30}
            alt="instagram_logo"
          />
        </Link>

        <Link
          href="/"
          className="hidden md:block  absolute top-0 left-0 scale-0 md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 md:scale-100 xl:scale-0 transition-all duration-200 hover:bg-gray-100 p-3 rounded-full"
        >
          <AiOutlineInstagram
            size={30}
            alt="instagram_logo"
            className="hover:scale-110"
          />
        </Link>
        <div className="md:hidden">
          <SearchBar />
        </div>
      </div>

      <Navbar />
    </div>
  );
}
