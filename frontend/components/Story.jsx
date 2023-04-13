import React from 'react';

function Story({ username, avatar }) {
  return (
    <div className="flex h-[84px] w-16 flex-col gap-y-1">
      <div className="w-16 h-16 p-[3px] border-2 border-pink-600 rounded-full hover:scale-105 cursor-pointer">
        <img
          src={avatar}
          alt={username}
          className="rounded-full w-full h-full object-fill "
        />
      </div>

      <p className="text-xs text-center truncate">{username}</p>
    </div>
  );
}

export default Story;
