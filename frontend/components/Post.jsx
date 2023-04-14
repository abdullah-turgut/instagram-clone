import React from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

function Post({ username, avatar, img, caption }) {
  return (
    <div className="flex flex-col">
      <div className="flex h-14 justify-between px-1 items-center">
        <div className="flex items-center gap-x-2">
          <div className="w-10 h-10 p-[2px] bg-gradient-to-r to-pink-500 via-red-500 from-yellow-500 rounded-full">
            <img
              src={avatar}
              alt="post-avatar"
              className="w-full rounded-full border-2 border-white"
            />
          </div>
          <p className="text-sm">{username}</p>
        </div>
        <HiOutlineDotsHorizontal size={20} />
      </div>
      <div className="w-full h-[468px] bg-gray-300"></div>
    </div>
  );
}

export default Post;
