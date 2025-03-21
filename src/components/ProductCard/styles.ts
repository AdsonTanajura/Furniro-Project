import { css, styled } from 'styled-components';
import { ContainerProps, PriceProps } from './types';

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 285px;
  height: 446px;
  max-width: 285px;
  background-image: url(${(props) => props.$url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const AddCardHover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  gap: 24px;
  top: 0;
  left: 0;
  opacity: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 446px;
  max-width: 285px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
  &:focus {
    opacity: 1;
  }
`;

export const AddCardButton = styled.button`
  text-align: center;
  background-color: #ffffff;
  color: #b88e2f;
  border: none;
  max-width: 202px;
  padding: 12px 52px;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  transition: all 0.2s;

  &:hover {
    background-color: #b88e2f;
    color: #ffffff;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: end;
  margin: 24px;
`;

export const DiscountBoll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: #e97171; /* Cor de fundo para visualizar */
  line-height: 150%;
  font-size: 16px;
  width: 48px;
  height: 48px;
  border-radius: 50%; /* Torna a div redonda */
`;

export const NewBoll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: #2ec1ac; /* Cor de fundo para visualizar */

  line-height: 150%;
  font-size: 16px;
  width: 48px;
  height: 48px;
  border-radius: 50%; /* Torna a div redonda */
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f4f5f7;
  padding: 16px 16px 30px 16px;
  gap: 8px;
  height: 144px;
`;

export const Title = styled.h2`
  color: #3a3a3a;
  font-size: 24px;
  font-weight: 600;
  line-height: 120%;
`;

export const Description = styled.span`
  color: #898989;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 16px;
`;

export const Price = styled.p<PriceProps>`
  line-height: 150%;
  ${(props) =>
    props.$isDiscount
      ? css`
          color: #b0b0b0;
          font-size: 16px;
          text-decoration: line-through;
        `
      : css`
          color: #3a3a3a;
          font-weight: 600;
          font-size: 20px;
        `}
`;

export const PriceWithdiscount = styled.p`
  color: #3a3a3a;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
`;
