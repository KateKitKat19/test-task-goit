import styled from 'styled-components';
import LogoGoit from '../../assets/LogoGoit.svg';
import Bcg from '../../assets/bcgImage.png';

export const CardStyled = styled.li`
  display: flex;
  flex-direction: column;
  width: 380px;
  position: relative;
  align-items: center;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  width: 196px;
  height: 50px;
  margin-bottom: 36px;
  margin-top: 26px;
  background: ${props => (props.followed ? '#5CD3A8' : ' #EBD8FF')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border-color: transparent;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  cursor: pointer;
  transition: 350ms ease-in cubic-bezier(0.165, 0.84, 0.44, 1) scale;
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const Logo = styled.div`
  width: 76px;
  height: 22px;
  background-image: url(${LogoGoit});
  position: absolute;
  left: 20px;
  top: 20px;
`;

export const Background = styled.div`
  background-image: url(${Bcg});
  width: 308px;
  height: 168px;
  margin-top: 28px;
`;

export const AvatarWrap = styled.div`
  position: relative;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 62px;
`;

export const AvatarLine = styled.div`
  width: 100%;
  height: 8px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const AvatarImg = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-image: url(${props => props.img});
  background-position: center;
  background-size: contain;
  border: 13px solid #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const RegText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  &:first-of-type {
    margin-bottom: 16px;
  }
  color: #ebd8ff;
`;
