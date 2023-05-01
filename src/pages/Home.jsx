import Welcome from '../assets/hola.jpg';
import { LinkStyled, Image, Wrapper } from './Home.styled';

export const Home = () => {
  return (
    <Wrapper>
      <h2>Welcome to this app, my dear friend</h2>
      <Image src={Welcome} alt="Hello"></Image>
      <LinkStyled to="/tweets" aria-label="tweets page">
        See tweets
      </LinkStyled>
    </Wrapper>
  );
};
