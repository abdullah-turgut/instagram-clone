'use client';
import React from 'react';
import Story from './Story';
import { storyUsers } from '@/mocks/storyUsers';

function Stories() {
  return (
    <div className="flex w-full overflow-x-scroll">
      {storyUsers.map((user) => (
        <Story
          key={user.userId}
          username={user.username}
          avatar={user.avatar}
        />
      ))}
    </div>
  );
}

export default Stories;
