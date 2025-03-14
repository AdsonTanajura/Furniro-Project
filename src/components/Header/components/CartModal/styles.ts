import { styled } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  background-color: #ffffff;
  width: 240px;
  z-index: 20;
  right: 0;
  top: 0;
  height: 100vh;

  @media (min-width: 768px) {
    width: auto;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 20px;

  @media (min-width: 768px) {
    padding: 28px 40px 24px 28px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 42px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
`;

export const TitleBorderContainer = styled.div`
  flex-direction: row;
  padding-bottom: 26px;
  border-bottom: 2px solid #d9d9d9;

  @media (min-width: 768px) {
    min-width: 287px;
  }
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 2px 4px;
  color: #9f9f9f;
  font-size: 20px;

  &:hover {
    color: black;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 2px solid #d9d9d9;
  padding: 13px 13px;
  gap: 8px;

  @media (min-width: 768px) {
    padding: 26px 26px;
    gap: 14px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: 2px solid #000000;
  border-radius: 50px;
  padding: 6px 6px;
  transition: all 0.2s;
  font-size: 12px;

  @media (min-width: 768px) {
    padding: 6px 30px;
  }

  &:hover {
    background-color: #000000;
    color: #fff;
  }
`;
