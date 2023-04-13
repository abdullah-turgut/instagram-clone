'use client';
import React, { useEffect, useState } from 'react';
import Story from './Story';
import { faker } from '@faker-js/faker/locale/en_GB';

function Stories() {
  const [storyUsers, setStoryUsers] = useState([]);

  useEffect(() => {
    for (let i = 0; i < 20; i++) {
      let user = {
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        avatar: faker.image.avatar(),
      };
      storyUsers.push(user);
    }

    setStoryUsers(storyUsers);
    console.log(storyUsers);
  }, []);

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
