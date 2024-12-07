import { useState } from 'react';

import Logo from '../../assets/Logo.svg';

import {
  HeaderContainer,
  LogoContainer,
  LogoTitel,
  MenuLink,
  MenuList,
  BurgerMenuButton,
  MobileMenuContainer,
  Test,
} from './styled';
import CartModal from './components/CartModal';
import UserMenu from './components/UserMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

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
      <UserMenu setIsCartOpen={setIsCartOpen} />
      {isCartOpen && <Test></Test>}
      {isCartOpen && <CartModal setIsCartOpen={setIsCartOpen} />}
    </HeaderContainer>
  );
};

export default Header;
