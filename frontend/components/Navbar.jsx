import React from 'react';
import { HiHome, HiOutlineSearch } from 'react-icons/hi';
import { BsPlusCircleDotted } from 'react-icons/bs';

export default function Navbar() {
  return (
    <div>
      <div className="fixed bottom-0 w-screen h-12 flex gap-y-4 items-center justify-evenly md:static md:w-12 md:flex-col md:h-fit xl:items-stretch xl:w-full">
        <div className="p-2 cursor-pointer hover:bg-gray-100 rounded-full flex gap-x-4 items-center">
          <HiHome size={30} />
          <p className="hidden xl:block font-bold">Home</p>
        </div>
        <div className="p-2 cursor-pointer hover:bg-gray-100 rounded-full flex gap-x-4 items-center">
          <HiOutlineSearch size={30} />
          <p className="hidden xl:block">Search</p>
        </div>
        <div className="p-2 cursor-pointer hover:bg-gray-100 rounded-full flex gap-x-4 items-center">
          <BsPlusCircleDotted size={30} />
          <p className="hidden xl:block">Create</p>
        </div>
        <div className="p-2 cursor-pointer hover:bg-gray-100 rounded-full flex gap-x-4 items-center h-8 w-8 bg-black"></div>
      </div>
      <div></div>
    </div>
  );
}
