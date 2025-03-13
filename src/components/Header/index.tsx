import { useState, useRef, useEffect } from 'react';

import Logo from '../../assets/Logo.svg';

import {
  HeaderContainer,
  LogoContainer,
  LogoTitel,
  MenuLink,
  MenuList,
  BurgerMenuButton,
  MobileMenuContainer,
} from './styled';
import CartModal from './components/CartModal';
import UserMenu from './components/UserMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(147);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setHeaderHeight(ref.current.clientHeight);
      console.log(headerHeight);
    }
  }, [isMenuOpen, headerHeight, ref.current, ref]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <HeaderContainer ref={ref}>
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
            <MenuLink to={'/'}>About</MenuLink>
          </li>
          <li>
            <MenuLink to={'/home/contact'}>Contact</MenuLink>
          </li>
        </MenuList>
      </nav>
      <BurgerMenuButton onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </BurgerMenuButton>
      {isMenuOpen && (
        <MobileMenuContainer headerHeight={headerHeight}>
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
              <MenuLink to={'/home/contact'}>Contact</MenuLink>
            </li>
          </MenuList>
        </MobileMenuContainer>
      )}
      <UserMenu setIsCartOpen={setIsCartOpen} />
      {isCartOpen && <CartModal setIsCartOpen={setIsCartOpen} />}
    </HeaderContainer>
  );
};

export default Header;
