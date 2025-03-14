import styled, { css } from 'styled-components';

export const SectionHeaderContainer = styled.div<{ isTextCentet: boolean }>`
  ${({ isTextCentet }) =>
    isTextCentet
      ? css`
          text-align: center;
        `
      : css`
          text-align: left;
        `}
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SectionPreTitle = styled.span`
  color: #616161;
  font-size: 20px;
  font-weight: 600;
  line-height: 150%;
`;
export const SectionSubTitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #666666;
`;
export const SectionTitle = styled.h2`
  color: #3a3a3a;
  /* word-break: break-all; */
  font-size: 30px;
  font-weight: bold;
  line-height: 120%;

  @media (min-width: 780px) {
    font-size: 40px;
  }
`;
