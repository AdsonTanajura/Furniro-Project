import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 30px 54px;
  width: 100%;
  max-width: 1440px;
  position: relative;
`;

export const NavContainerDesktop = styled.div`
  display: none;
  @media (min-width: 780px) {
    display: block;
  }
`;

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
