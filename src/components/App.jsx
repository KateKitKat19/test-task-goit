import { useState } from 'react';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { page, fetchUsers } from 'API/getUsers';
import { Container } from './Container.styled';
import { TweetsPage } from 'pages/Tweets';
import { Home } from 'pages/Home';

export const App = () => {
  const [users, setUsers] = useState(null);
  const [checkedLocalStorage, setCheckedLocalStorage] = useState(false);

  useEffect(() => {
    if (!checkedLocalStorage) {
      const savedState = localStorage.getItem('myAppUsers');
      if (savedState !== 'null') {
        setTimeout(() => {
          setUsers(JSON.parse(savedState));
        }, 100);
      } else if (savedState === 'null') {
        fetchUsers().then(res => setUsers(res));
      }
    }

    setCheckedLocalStorage(true);
  }, [checkedLocalStorage]);

  useEffect(() => {
    localStorage.setItem('myAppUsers', JSON.stringify(users));
  }, [users]);

  function addFollower(id) {
    setUsers(prev => {
      return prev.map(tweet => {
        if (tweet.id === id) {
          return tweet.following
            ? { ...tweet, followers: tweet.followers - 1, following: false }
            : { ...tweet, followers: tweet.followers + 1, following: true };
        } else {
          return tweet;
        }
      });
    });
  }

  function handleClick() {
    if (page >= 6) {
      return;
    }
    fetchUsers().then(res => {
      res !== undefined &&
        setUsers(prev => {
          return [...prev, ...res];
        });
    });
  }
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/tweets"
          element={
            <TweetsPage
              users={users}
              page={page}
              addFnc={addFollower}
              loadFnc={handleClick}
            />
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </Container>
  );
};
