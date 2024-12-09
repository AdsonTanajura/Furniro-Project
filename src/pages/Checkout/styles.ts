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

export const PorductQuantity = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PorductItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PorductItemName = styled.h3`
  color: #9f9f9f;
  font-size: 16px;
`;

export const ProductItemQuantity = styled.span`
  color: #000000;
  font-size: 12px;
`;

export const PorductItemPrice = styled.p`
  font-size: 16px;
  font-weight: 300;
`;

export const PorductTitleSubTotal = styled.h3`
  font-size: 16px;
  font-weight: 400;
  margin-top: 22px;
`;

export const PorductTitleSubtotalPrice = styled.p`
  font-size: 16px;
  font-weight: 300;
  margin-top: 22px;
`;

export const ProductTotalPrice = styled.p`
  color: #b88e2f;
  font-size: 24px;
  font-weight: bold;
  margin-top: 22px;
`;

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
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

export const CheckoutItemName = styled.h3`
  font-size: 16px;
  font-weight: 400;
`;

export const CheckoutItemDesc = styled.h3`
  font-size: 16px;
  font-weight: 300;
  color: #9f9f9f;
`;

export const CheckoutItemSubName = styled.h3`
  color: #9f9f9f;
  font-size: 16px;
  font-weight: 500;
`;

export const PlaceOrderButton = styled.button`
  background-color: transparent;
  border: 1px solid #000000;
  border-radius: 15px;
  padding: 17px 102px;
  max-width: 318px;
  max-height: 64px;
  margin-top: 39px;
  transition: all 0.2s;
  &:hover {
    background-color: #000000;
    color: #fff;
  }
`;

export const EndDesc = styled.p`
  font-size: 16px;
  font-weight: 300;

  p {
    font-weight: 600;
  }
`;

export const PlaceOrderButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
