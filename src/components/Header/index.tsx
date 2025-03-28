import { useState, useRef, useEffect } from 'react';

import { HeaderContainer, NavContainerDesktop } from './styled';
import CartModal from './components/CartModal';
import UserMenu from './components/UserMenu';
import HeaderMobileMenu from './components/HeaderMobileMenu';
import HeaderNavBar from './components/HeaderNavBar';
import HeaderLogo from './components/HeaderLogo';
import HeaderBurgerMenuButton from './components/HeaderBurgerMenuButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(147);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setHeaderHeight(ref.current.clientHeight);
    }
  }, [isMenuOpen, headerHeight, ref.current, ref]);

  return (
    <HeaderContainer ref={ref}>
      <HeaderLogo />

      <NavContainerDesktop>
        <HeaderNavBar />
      </NavContainerDesktop>

      <HeaderBurgerMenuButton
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      />

      {isMenuOpen && <HeaderMobileMenu headerHeight={headerHeight} />}

      <UserMenu setIsCartOpen={setIsCartOpen} />

      {isCartOpen && <CartModal setIsCartOpen={setIsCartOpen} />}
    </HeaderContainer>
  );
};

export default Header;
