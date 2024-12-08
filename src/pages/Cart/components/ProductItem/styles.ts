import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;

  align-items: center;
  flex-direction: row;
`;

export const ProductImagen = styled.img`
  width: 108px;
  height: 108px;
  border-radius: 4px;
  margin-right: 37px;
`;

export const ProductName = styled.h3`
  font-size: 16px;
  font-weight: 300;
  margin-right: 69px;
`;

export const ProductPrice = styled.h3`
  font-size: 16px;
  font-weight: 300;
  margin-right: 44px;
`;

export const ProductSubtotal = styled.h3`
  font-size: 16px;
  margin-left: 20px;
  margin-right: 49px;
`;

export const ProductTrashButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  color: #b88e2f;
  font-size: 24px;
  padding: 2px 4px;
  transition: all 0.2s;

  &:hover {
    color: #000;
  }
`;
