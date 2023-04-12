import React from 'react';
import Image from 'next/image';
import Avatar from '@/public/avatar.jpg';
import {
  HiHome,
  HiOutlineSearch,
  HiOutlineUser,
  HiOutlineMenu,
} from 'react-icons/hi';
import { BsPlusCircleDotted } from 'react-icons/bs';

export default function Navbar() {
  return (
    <>
      <div className="fixed bottom-0 w-screen h-14 border-t border-gray-300 flex gap-y-4 items-center justify-evenly md:static md:border-none md:mb-5 md:w-12 md:flex-col md:h-full xl:items-stretch xl:w-full">
        <div className="p-2 cursor-pointer hover:bg-gray-100 rounded-full flex gap-x-4 items-center hover:scale-110 xl:hover:scale-100">
          <HiHome size={30} />
          <p className="hidden xl:block font-bold">Home</p>
        </div>
        <div className="p-2 cursor-pointer hover:bg-gray-100 rounded-full flex gap-x-4 items-center hover:scale-110 xl:hover:scale-100">
          <HiOutlineSearch size={30} />
          <p className="hidden xl:block">Search</p>
        </div>
        <div className="p-2 cursor-pointer hover:bg-gray-100 rounded-full flex gap-x-4 items-center hover:scale-110 xl:hover:scale-100">
          <BsPlusCircleDotted size={30} />
          <p className="hidden xl:block">Create</p>
        </div>
        <div className="p-2 cursor-pointer hover:bg-gray-100 rounded-full flex gap-x-4 items-center hover:scale-110 xl:hover:scale-100">
          <HiOutlineUser size={30} />
          <p className="hidden xl:block">Profile</p>
        </div>
        <div className="p-2 cursor-pointer hover:bg-gray-100 rounded-full flex gap-x-4 items-center md:mt-auto hover:scale-110 xl:hover:scale-100">
          <HiOutlineMenu size={30} />
          <p className="hidden xl:block">More</p>
        </div>
      </div>
    </>
  );
}
