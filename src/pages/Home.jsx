import { LinkStyled, Wrapper, Title } from './Home.styled';

export const Home = () => {
  return (
    <Wrapper>
      <Title>Welcome to this app, my dear friend</Title>
      <LinkStyled to="/tweets" aria-label="tweets page">
        See tweets
      </LinkStyled>
    </Wrapper>
  );
};
