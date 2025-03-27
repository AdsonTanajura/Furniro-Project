import styled from 'styled-components';

export const MobileMenuContainer = styled.div.attrs<{ $headerHeight?: number }>(
  ({ $headerHeight }) => ({
    style: { top: `${$headerHeight}px` },
  })
)`
  position: absolute;
  z-index: 10;
  top: 64px;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
`;

export const NavContainerMobile = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 780px) {
    display: none;
  }
`;
