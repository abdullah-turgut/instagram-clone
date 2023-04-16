import React from 'react';

export default function MiniProfile() {
  return (
    <div className="flex justify-between items-center h-14  mt-4 mb-3">
      <div className="flex items-center h-full gap-x-3">
        <img
          src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/176.jpg"
          alt=""
          className="h-full rounded-full border border-gray-200"
        />
        <div className="flex flex-col text-sm">
          <p className="font-medium">abdturgut</p>
          <p className="text-gray-500">Abdullah Turgut</p>
        </div>
      </div>
      <button className="text-xs font-semibold px-2 text-sky-400">
        Switch
      </button>
    </div>
  );
}
