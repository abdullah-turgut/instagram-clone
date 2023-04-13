'use client';
import React from 'react';
import Story from './Story';
import { storyUsers } from '@/mocks/storyUsers';

function Stories() {
  return (
    <div className="flex w-full overflow-hidden gap-x-4 p-2">
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
