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
  background: #624cab;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: white;
  cursor: pointer;
  transition: 350ms ease-in cubic-bezier(0.165, 0.84, 0.44, 1) scale;
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
