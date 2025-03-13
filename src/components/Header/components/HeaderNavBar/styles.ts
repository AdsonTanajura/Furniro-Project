import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
