import { SignInButton } from '@clerk/clerk-react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 30px 54px;
  width: 100%;
  max-width: 1440px;

  @media (max-width: 780px) {
    nav {
      display: none; /* Esconde o menu principal */
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
`;

export const LogoTitel = styled.span`
  font-size: 34px;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  width: 100vw;
  max-width: 430px;

  @media (max-width: 780px) {
    flex-direction: column;
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  color: #000000;
  transition: border-bottom 0.2s;

  &:hover {
    border-bottom: 2px #000000 solid;
  }
`;

export const UserMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const StyledSignInButton = styled(SignInButton)`
  cursor: pointer;
  padding: 8px;
  transition: border-bottom 0.2s;

  &:hover {
    border-bottom: 2px #000000 solid;
  }
`;

export const CartButton = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;

  transition: border-bottom 0.2s;
  &:hover {
    border-bottom: 2px #000000 solid;
  }
`;

export const CartIcon = styled(MdOutlineShoppingCart)`
  width: 28px;
  height: 28px;
`;

export const BurgerMenuButton = styled.button`
  display: none;

  @media (max-width: 780px) {
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
  }
`;

export const MobileMenuContainer = styled.div`
  z-index: 10;
  position: absolute;
  top: 64px;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;

  @media (min-width: 780px) {
    display: none;
  }
`;
