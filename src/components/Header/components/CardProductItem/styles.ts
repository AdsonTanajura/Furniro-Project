import { styled } from 'styled-components';

export const Conatiner = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

export const Imagen = styled.img`
  border-radius: 4px;
  max-width: 108px;
  max-height: 108px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.span`
  font-size: 16px;
  font-weight: 300;
`;

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 15px;
`;

export const Quantity = styled.span`
  font-size: 16px;
  font-weight: 200;
`;

export const X = styled.span`
  font-size: 12px;
  font-weight: 200;
`;

export const Value = styled.span`
  color: #b88e2f;
  font-size: 12px;
  font-weight: 500;
`;

export const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  padding: 2px 4px;
  border: none;
  color: #9f9f9f;
  font-size: 20px;
  transition: color 0.2s;

  &:hover {
    color: #000000;
  }
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 42px 0px;
  gap: 20px;
`;

export const SubtotalContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 101px;
`;

export const Subtotal = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

export const SubtotalPrice = styled.span`
  color: #b88e2f;
  font-size: 16px;
  font-weight: 600;
`;
