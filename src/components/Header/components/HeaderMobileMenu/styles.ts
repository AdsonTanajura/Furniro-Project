import styled from 'styled-components';

export const MobileMenuContainer = styled.div<{ $headerHeight?: number }>`
  position: absolute;
  z-index: 10;
  top: ${({ $headerHeight }) =>
    $headerHeight ? `${$headerHeight}px` : '147px'};
  left: 0;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;

  @media (min-width: 780px) {
    display: none;
    visibility: hidden;
  }
`;

export const NavContainerMobile = styled.div`
  display: flex;
  justify-content: center;
`;
