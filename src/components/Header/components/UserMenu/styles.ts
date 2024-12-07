import { SignInButton } from '@clerk/clerk-react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import styled from 'styled-components';

export const UserMenuContainer = styled.div`
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
