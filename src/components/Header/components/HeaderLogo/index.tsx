import React from 'react';
import { LogoContainer, LogoTitle } from './styles';
import Logo from '../../../../assets/Logo.svg';

const HeaderLogo = () => {
  return (
    <LogoContainer>
      <img src={Logo} alt="Logo" />
      <LogoTitle>Furniro</LogoTitle>
    </LogoContainer>
  );
};

export default HeaderLogo;
