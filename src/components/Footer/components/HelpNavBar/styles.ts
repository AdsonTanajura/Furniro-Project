import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const HelpNavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HelpNavBarTitle = styled.h2`
  color: #9f9f9f;
  font-size: 16px;
  font-weight: 500;
  min-height: 55px;
`;

export const HelpNavBarList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 46px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  color: #000000;
  transition: border-bottom 0.2s;

  &:hover {
    border-bottom: 2px #000000 solid;
  }
`;
