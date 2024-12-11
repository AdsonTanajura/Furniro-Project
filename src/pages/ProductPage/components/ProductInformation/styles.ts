import { styled } from 'styled-components';
import { RiStarSFill } from 'react-icons/ri';
import { ProductOptionBollButtonProps } from './types';

export const ProductInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
  border-bottom: 2px solid #d9d9d9;
  width: 100%;
  max-width: 1440px;

  @media (min-width: 1240px) {
    width: 100%;
    max-width: 600px;
  }
`;

export const ProductTitle = styled.h1`
  font-size: 42px;
  font-weight: 400;
`;

export const ProductPrice = styled.span`
  color: #9f9f9f;
  font-size: 24px;
  font-weight: 500;
`;

export const RankContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 22px;
  margin-top: 15px;
  margin-bottom: 18px;
`;

export const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  padding-right: 28px;
  border-right: 2px solid #9f9f9f;
`;

export const Stars = styled(RiStarSFill)`
  color: #ffc700;
  width: 18px;
  height: 18px;
`;

export const CustomersReview = styled.span`
  color: #9f9f9f;
  font-size: 13px;
  font-weight: 400;
`;

export const ProductDescription = styled.p`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 424px;
  font-size: 13px;
`;

export const ProductSizeOption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 12px;
`;
export const ProductColorOption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;
`;

export const ProductOptionTitle = styled.h2`
  color: #9f9f9f;
  font-weight: 400;
  font-size: 14px;
`;

export const ProductOptionSelect = styled.div`
  display: flex;
  gap: 16px;
`;

export const ProductOptionSizeButton = styled.button`
  background-color: #b88e2f;
  background-color: #f9f1e7;
  color: #000000;
  border: none;
  border-radius: 5px;
  font-weight: 400;
  font-size: 13px;
  padding: 30px;
  transition: all 0.2s;

  &:hover {
    background-color: #b88e2f;
    color: #ffffff;
  }
`;

export const ProductOptionBollButton = styled.div<ProductOptionBollButtonProps>`
  background-color: ${(props) => props.color};
  width: 30px;
  height: 30px;
  border-radius: 50%; /* Torna a div redonda */
`;

export const ProductQuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
`;

export const ProductQuantityInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 100%;
  max-width: 123px;
  min-height: 64px;
  border: 1px solid #9f9f9f;
`;

export const ProductQuantityAddCardButton = styled.button`
  border-radius: 15px;
  padding: 17px 48px;
  border: 1px solid #000000;
  text-align: center;
  background-color: transparent;
  transition: all 0.2s;

  &:hover {
    background-color: #000000;
    color: #fff;
  }
`;

export const SkuInfo = styled.div`
  display: grid;
  color: #9f9f9f;
  gap: 12px;
  margin-top: 41px;
  margin-bottom: 62px;
  grid-template-columns: 1fr 8fr;
  font-size: 16px;
`;

export const SkuInfoItems = styled.span`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const SkuInfoSociaMediaLogos = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`;
