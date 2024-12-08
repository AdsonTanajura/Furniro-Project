import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 72px 100px;
  gap: 30px;
`;

export const CartDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderTags = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f1e7;
  width: 817px;
  height: 55px;
  padding: 16px 142px;
`;

export const Tags = styled.h2`
  font-size: 16px;
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 55px;
  gap: 8px;
`;

export const CartTotalsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f9f1e7;
  padding: 15px 75px;
  max-height: 380px;
`;

export const CartTotalsTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 62px;
`;

export const CartTotalsSubContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 62px;

  &:has(+ div) {
    margin-bottom: 32px; /* Exemplo de estilo adicional */
  }
`;

export const CartTotalsSubTitles = styled.h2`
  font-size: 16px;
  font-weight: 500;
`;

export const CartTotalsSubtotalPrice = styled.p`
  color: #9f9f9f;
  font-size: 16px;
  font-weight: 300;
`;

export const CartTotalsTotalPrice = styled.p`
  color: #b88e2f;
  font-size: 18px;
  font-weight: 500;
`;

export const CartTotalsCheckOut = styled.button`
  background-color: transparent;
  border: 1px solid #000000;
  margin-top: 42px;
  border-radius: 15px;
  padding: 14px 58px;
  transition: all 0.2s;

  &:hover {
    background-color: #000000;
    color: #fff;
  }
`;
