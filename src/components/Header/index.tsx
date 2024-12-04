import { useState } from 'react';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

import Logo from '../../assets/Logo.svg';
import userIcon from '../../assets/User.svg';

import {
  CartButton,
  CartIcon,
  HeaderContainer,
  LogoContainer,
  LogoTitel,
  MenuLink,
  MenuList,
  StyledSignInButton,
  UserMenu,
  BurgerMenuButton,
  MobileMenuContainer,
} from './styled';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={Logo} alt="Logo" />
        <LogoTitel>Furniro</LogoTitel>
      </LogoContainer>

      <nav>
        <MenuList>
          <li>
            <MenuLink to={'/home'}>Home</MenuLink>
          </li>
          <li>
            <MenuLink to={'/home/shop'}>Shop</MenuLink>
          </li>
          <li>
            <MenuLink to={'/a'}>About</MenuLink>
          </li>
          <li>
            <MenuLink to={'/a'}>Contact</MenuLink>
          </li>
        </MenuList>
      </nav>

      <BurgerMenuButton onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </BurgerMenuButton>

      {isMenuOpen && (
        <MobileMenuContainer>
          <MenuList>
            <li>
              <MenuLink to={'/home'}>Home</MenuLink>
            </li>
            <li>
              <MenuLink to={'/home/shop'}>Shop</MenuLink>
            </li>
            <li>
              <MenuLink to={'/a'}>About</MenuLink>
            </li>
            <li>
              <MenuLink to={'/a'}>Contact</MenuLink>
            </li>
          </MenuList>
        </MobileMenuContainer>
      )}

      <UserMenu>
        <SignedOut>
          <StyledSignInButton>
            <img src={userIcon} alt="" />
          </StyledSignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <CartButton>
          <CartIcon />
        </CartButton>
      </UserMenu>
    </HeaderContainer>
  );
};

export default Header;
