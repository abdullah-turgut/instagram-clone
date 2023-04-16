import React from 'react';
import Suggestion from './Suggestion';
import { storyUsers } from '@/mocks/storyUsers';

export default function Suggestions() {
  return (
    <div className="flex flex-col text-sm pr-2 gap-y-2">
      <div className="flex justify-between items-center">
        <p className="text-gray-500 font-medium">Suggestions for you</p>
        <p className="text-xs font-medium hover:text-gray-400 cursor-pointer">
          See All
        </p>
      </div>
      {storyUsers
        .map((person) => (
          <Suggestion
            key={person.userId}
            avatar={person.avatar}
            username={person.username}
          />
        ))
        .filter((person, i) => i < 5)}
      <p className="text-sm text-gray-400 mt-3 text-center">
        © 2023 INSTAGRAM FROM META
      </p>
    </div>
  );
}
