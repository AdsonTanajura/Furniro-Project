import styled from 'styled-components';

export const BurgerMenuButton = styled.button`
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;

  span {
    width: 24px;
    height: 3px;
    background-color: black;
    border-radius: 2px;
  }

  @media (min-width: 780px) {
    display: none;
  }
`;
