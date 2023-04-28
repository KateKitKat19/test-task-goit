import { useState } from 'react';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';

import { page, fetchUsers } from 'API/getUsers';

export const App = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const savedState = localStorage.getItem('myAppUsers');
    if (savedState !== 'null') {
      setUsers(JSON.parse(savedState));
      return;
    } else if (users === 'null') {
      fetchUsers().then(res => setUsers(res));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('myAppUsers', JSON.stringify(users));
  }, [users]);

  function addFollower(name) {
    setUsers(prev => {
      return prev.map(tweet => {
        if (tweet.user === name) {
          return { ...tweet, followers: tweet.followers + 1 };
        } else {
          return tweet;
        }
      });
    });
  }

  function handleClick() {
    if (page >= 5) {
      return;
    }
    fetchUsers().then(res => {
      res !== undefined && setUsers(res);
    });
  }
  return (
    <div>
      {users ? (
        <>
          <ul>
            {users.map(tweet => {
              return <li key={nanoid()}>{tweet.user}</li>;
            })}
          </ul>
          <button
            type="button"
            aria-label="load more"
            onClick={handleClick}
            disabled={page === 5}
          >
            Load more
          </button>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
