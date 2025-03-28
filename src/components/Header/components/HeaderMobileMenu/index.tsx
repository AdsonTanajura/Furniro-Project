import React from 'react';
import MobileMenuProps from './Interfaces/MobileMenuProps';
import HeaderNavBar from '../HeaderNavBar';
import { MobileMenuContainer, NavContainerMobile } from './styles';

const HeaderMobileMenu = ({ headerHeight = 147 }: MobileMenuProps) => {
  return (
    <MobileMenuContainer $headerHeight={headerHeight}>
      <NavContainerMobile>
        <HeaderNavBar />
      </NavContainerMobile>
    </MobileMenuContainer>
  );
};

export default HeaderMobileMenu;
