import { useState } from 'react';
import { useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { nanoid } from 'nanoid';

import { page, fetchUsers } from 'API/getUsers';
import { Container } from './Container.styled';
import { Card } from './Card/Card';
import { List } from './List/List.styled';
import { LoadBtn } from './Button/Button.styled';

export const App = () => {
  const [users, setUsers] = useState(null);
  console.log('App   users:', users);

  useEffect(() => {
    const savedState = localStorage.getItem('myAppUsers');
    if (savedState !== 'null') {
      setUsers(JSON.parse(savedState));
      return;
    } else if (users === 'null') {
      fetchUsers().then(res => setUsers(res));
    }
  }, [users]);

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
    if (page >= 5) {
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
      {users ? (
        <>
          <List>
            {users.map(tweet => {
              return (
                <Card
                  key={nanoid()}
                  userInfo={tweet}
                  handleFollowClick={addFollower}
                ></Card>
              );
            })}
          </List>
          <LoadBtn
            type="button"
            aria-label="load more"
            onClick={handleClick}
            disabled={page === 5}
          >
            Load more
          </LoadBtn>
        </>
      ) : (
        <TailSpin
          height="180"
          width="180"
          color="#0E79B2"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
    </Container>
  );
};
