import { styled } from 'styled-components';
export const ProductContainer = styled.div`
  display: grid;
  align-self: center;

  grid-template-columns: 1fr;
  padding: 0px 12px;
  margin-top: 35px;
  gap: 105px;
  border-bottom: 2px solid #d9d9d9;
  width: 100%;
  max-width: 1440px;

  @media (min-width: 824px) {
    align-self: center;
  }

  @media (min-width: 1240px) {
    padding: 0px 100px;
    grid-template-columns: 1fr 1fr;
  }
`;
