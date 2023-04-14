import React from 'react';

function Story({ username, avatar }) {
  return (
    <div className="flex h-[84px] w-16 flex-col gap-y-1">
      <div className="w-16 h-16 p-[2px] bg-gradient-to-r to-pink-500 via-red-500 from-yellow-500 rounded-full cursor-pointer">
        <img
          src={avatar}
          alt={username}
          className="rounded-full w-full h-full object-fill border-2 border-white "
        />
      </div>

      <p className="text-xs text-center truncate">{username}</p>
    </div>
  );
}

export default Story;
