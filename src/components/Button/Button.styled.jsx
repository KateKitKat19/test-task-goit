import styled from 'styled-components';

export const LoadBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  width: 196px;
  height: 50px;
  margin-top: 25px;
  border-radius: 10px;
  border-color: transparent;
  background: #5736a3;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: white;
  cursor: pointer;
  transition: 350ms ease-in cubic-bezier(0.165, 0.84, 0.44, 1) box-shadow;
  &:hover,
  &:focus {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
