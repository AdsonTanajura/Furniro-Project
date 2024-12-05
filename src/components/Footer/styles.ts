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
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-between;
  flex-direction: row;
  border-bottom: 2px solid #d9d9d9;
  padding-bottom: 48px;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 996px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const RightsReverved = styled.span`
  padding: 38px 0px;
`;
