import React from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function SearchBar() {
  return (
    <div className="relative flex">
      <div className="flex h-full items-center absolute left-3">
        <MagnifyingGlassIcon className="h-1/2 text-gray-500" />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="form-input rounded-xl bg-gray-200 border-none pl-10 text-sm focus:ring-0"
      />
      <div className="top-1/2 -translate-y-1/2 flex items-center absolute right-2 p-1 bg-gray-300 rounded-full h-1/2 text-gray-50 cursor-pointer hover:bg-gray-400">
        <XMarkIcon className="h-full" />
      </div>
    </div>
  );
}
