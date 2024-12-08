import styled from 'styled-components';
export const ProductQuantityInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 123px;
  height: 64px;
  border: 1px solid #9f9f9f;
`;

export const ProductQuantityAddCardButton = styled.button`
  border-radius: 15px;
  padding: 17px 48px;
  border: 1px solid #000000;
  text-align: center;
  background-color: transparent;
`;

export const ProductQuantityAddButtonInput = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 400;
  border-radius: 0px 7px 7px 0px;
  transition: background-color 0.2s;
  &:hover {
    background-color: #9f9f9f;
  }
`;

export const ProductQuantityLessButtonInput = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 400;
  border-radius: 7px 0px 0px 7px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #9f9f9f;
  }
`;

export const ProductQuantityInput = styled.input`
  all: unset;
  text-align: center;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
  max-width: 70px;
  font-size: 16px;
`;
