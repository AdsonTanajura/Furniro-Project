import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 20px;
`;

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #ffffff;
  border: none;
  gap: 2px;
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 4px;
  transition: border-bottom 0.2s;
  border-bottom: 4px solid transparent;

  &:hover {
    border-bottom: 4px solid #b88e2f;
  }
`;
