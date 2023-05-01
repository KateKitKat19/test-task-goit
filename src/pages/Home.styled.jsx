import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 30px 15px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;
export const Title = styled.h2``;

export const Image = styled.img`
  display: block;
  margin: 0;
  padding: 0;
  max-width: 100%;
  width: 750px;
`;

export const LinkStyled = styled(NavLink)`
  display: flex;
  margin-top: 20px;
  padding: 15px;
  text-align: center;
  justify-content: center;
  height: auto;
  color: white;
  background-color: #5736a3;
  font-weight: 600;
  font-size: 23px;
  line-height: 26px;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  transition: 350ms ease-in cubic-bezier(0.165, 0.84, 0.44, 1) box-shadow;

  &:hover,
  &:focus {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
`;
