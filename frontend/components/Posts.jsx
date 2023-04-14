import React from 'react';
import Post from './Post';
import { postUsers } from '@/mocks/postUsers';

export default function Posts() {
  return (
    <div className="w-full max-w-[470px] flex flex-col mx-auto mt-4">
      {postUsers.map((post, i) => (
        <Post
          key={i}
          username={post.username}
          avatar={post.avatar}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
