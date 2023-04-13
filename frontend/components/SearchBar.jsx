import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function SearchBar() {
  return (
    <div className="relative flex -left-3">
      <div className="flex h-full items-center absolute left-3">
        <MagnifyingGlassIcon className="h-1/2 text-gray-500" />
      </div>
      <input
        type="search"
        placeholder="Search"
        className="form-input rounded-xl bg-gray-200 border-none pl-10 text-sm focus:ring-0"
      />
    </div>
  );
}
