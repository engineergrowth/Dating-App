import React, { useState, useEffect } from 'react';

const Suggestions = () => {
  const [suggestedUsers, setSuggestedUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const data = await fetchSuggestedUsers();
        setSuggestedUsers(data);
      } catch (error) {
        console.error('Error fetching suggested users:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Suggested Users</h2>
      <ul>
        {suggestedUsers.map((user) => (
          <li key={user.id}>
            <div>
              <img src={user.profilePicture} alt={user.name} />
            </div>
            <div>
              <h3>{user.name}</h3>
              <p>{user.bio}</p>
              <button>View Profile</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;
