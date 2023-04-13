import React from 'react';

function Story({ username, avatar }) {
  return (
    <div>
      <img src={avatar} alt={username} />
      <p>{username}</p>
    </div>
  );
}

export default Story;
