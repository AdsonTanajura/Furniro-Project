import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 64px 102px;
`;

export const PorductList = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 34px;
  border-bottom: 2px solid #d9d9d9;
  margin-bottom: 22px;
`;

export const PorductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 88px 38px;
`;

export const PorductListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 22px;
  min-width: 528px;
`;

export const PorductListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 14px;
  min-width: 528px;
`;

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

export const CheckoutItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

export const CheckoutItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const PlaceOrderButton = styled.button`
  background-color: transparent;
  border: 1px solid #000000;
  border-radius: 15px;
  padding: 17px 102px;
  max-width: 318px;
  max-height: 64px;
`;
