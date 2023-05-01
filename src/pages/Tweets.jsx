import { Card } from '../components/Card/Card';
import { List } from '../components/List/List.styled';
import { LoadBtn } from '../components/Button/Button.styled';
import { LinkStyled } from './Home.styled';

import { TailSpin } from 'react-loader-spinner';
import { nanoid } from 'nanoid';

export const TweetsPage = ({ users, page, addFnc, loadFnc }) => {
  return (
    <>
      {users ? (
        <>
          <LinkStyled to="/" aria-label="back">
            Back to homepage
          </LinkStyled>
          <List>
            {users.map(tweet => {
              return (
                <Card
                  key={nanoid()}
                  userInfo={tweet}
                  handleFollowClick={addFnc}
                ></Card>
              );
            })}
          </List>
          <LoadBtn
            type="button"
            aria-label="load more"
            onClick={loadFnc}
            disabled={page === 6}
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
    </>
  );
};
