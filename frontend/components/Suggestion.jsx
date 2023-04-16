import React from 'react';

export default function Suggestion({ avatar, username }) {
  return (
    <div className="flex justify-between">
      <div className="flex h-9 items-center gap-x-3">
        <img src={avatar} alt="" className="h-full rounded-full" />
        <p className="font-medium">{username}</p>
      </div>
      <button className="text-xs font-semibold text-sky-400 hover:text-sky-700">
        Follow
      </button>
    </div>
  );
}
