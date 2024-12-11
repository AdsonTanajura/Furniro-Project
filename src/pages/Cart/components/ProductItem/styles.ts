import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`;
export const ProductNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;
export const ProductImagen = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 4px;
  margin-right: 37px;
  @media (min-width: 1280px) {
    width: 108px;
    height: 108px;
    margin-right: 37px;
  }
`;

export const ProductName = styled.h3`
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  margin-right: 69px;

  @media (min-width: 1280px) {
    font-size: 16px;
    font-weight: 300;
    margin-right: 69px;
  }
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
