// DisplayUsername.js

import React from 'react';

const DisplayUsername = () => {
  // Retrieve the username from localStorage
  const username = localStorage.getItem('username');

  // Render the username in the UI
  return (
    <div>
      {username && <p>Welcome, {username}!</p>}
    </div>
  );
};

export default DisplayUsername;
