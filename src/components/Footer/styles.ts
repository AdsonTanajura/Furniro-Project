import { styled } from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  border-top: 2px solid #0000002b;
  width: 100%;
  padding: 48px 102px 0px;
  margin-top: 40px;

  @media (max-width: 780px) {
    padding: 0;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-bottom: 2px solid #d9d9d9;
  padding-bottom: 48px;
  @media (max-width: 780px) {
  }
`;

export const RightsReverved = styled.span`
  padding: 38px 0px;
`;
