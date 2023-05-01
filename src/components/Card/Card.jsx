import {
  CardStyled,
  Button,
  Logo,
  Background,
  AvatarLine,
  AvatarWrap,
  RegText,
  AvatarImg,
} from './Card.styled';

export const Card = ({ userInfo, handleFollowClick }) => {
  const { avatar, user, followers, tweets, id, following } = userInfo;
  return (
    <CardStyled>
      <Logo />
      <Background></Background>
      <AvatarWrap>
        <AvatarLine></AvatarLine>
        <AvatarImg img={avatar}></AvatarImg>
      </AvatarWrap>
      <RegText>{tweets} tweets </RegText>
      <RegText>{followers} followers </RegText>
      <Button
        type="button"
        aria-label="follow user"
        onClick={() => handleFollowClick(id)}
        followed={following}
      >
        {following ? 'Following' : 'Follow'}
      </Button>
    </CardStyled>
  );
};
