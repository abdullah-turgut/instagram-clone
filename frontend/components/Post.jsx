import React from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { BsDot, BsEmojiSmile } from 'react-icons/bs';
import {
  FaRegHeart,
  FaRegComment,
  FaRegPaperPlane,
  FaRegBookmark,
} from 'react-icons/fa';
import numeral from 'numeral';

function Post({ username, avatar, img, caption }) {
  return (
    <div className="flex flex-col pb-5 mb-3 border-b border-gray-300">
      <div className="flex h-14 justify-between px-1 items-center">
        <div className="flex items-center gap-x-2 text-sm">
          <div className="w-10 h-10 p-[2px] bg-gradient-to-r to-pink-500 via-red-500 from-yellow-500 rounded-full">
            <img
              src={avatar}
              alt="post-avatar"
              className="w-full rounded-full border-2 border-white cursor-pointer"
            />
          </div>
          <div className="flex items-center">
            <p className="cursor-pointer font-semibold hover:text-gray-400">
              {username}
            </p>
            <BsDot size={14} />
            <p className="text-gray-500">5h</p>
          </div>
        </div>
        <HiOutlineDotsHorizontal
          size={20}
          className="cursor-pointer hover:text-gray-400"
        />
      </div>
      <div className="w-full h-[468px]">
        <img src={img} alt="post-img" className="h-full w-full object-cover" />
      </div>
      <div className="w-full h-12 flex justify-between items-center">
        <div className="flex items-center gap-x-4">
          <FaRegHeart
            size={24}
            className="cursor-pointer hover:text-gray-400"
          />
          <FaRegComment
            size={24}
            className="cursor-pointer hover:text-gray-400"
          />
          <FaRegPaperPlane
            size={24}
            className="cursor-pointer hover:text-gray-400"
          />
        </div>
        <FaRegBookmark
          size={24}
          className="cursor-pointer hover:text-gray-400"
        />
      </div>
      <div className="flex gap-x-1 text-sm font-medium">
        <p>{numeral(14214).format('0,0')}</p>
        <p>likes</p>
      </div>

      <p className="text-sm mt-1 ">
        <span className="font-semibold">{username}</span> {caption}
      </p>
      <p className="text-sm mt-1 text-gray-500 cursor-pointer hover:underline">
        View all 12 Comments
      </p>
      <form className="w-full mt-1 flex items-center justify-between gap-x-2 relative">
        <textarea
          name=""
          id=""
          className="w-full max-w-[420px] resize-none border-none align-middle h-5 py-[2px] px-0 text-sm scrollbar-none focus:ring-0"
          placeholder="Add a comment..."
        ></textarea>
        <button
          type="submit"
          value="Post"
          className="bg-transparent text-sky-600 font-medium"
        >
          Post
        </button>
        <BsEmojiSmile
          size={13}
          className="text-gray-600 hover:text-gray-400 cursor-pointer"
        />
      </form>
    </div>
  );
}

export default Post;
