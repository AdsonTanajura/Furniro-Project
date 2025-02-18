import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 316px;
  background-image: url('https://desafiocompass03.s3.us-east-2.amazonaws.com/ShopPageImgs/Rectangle+1.png');
  background-size: cover; /* Cobre todo o contêiner */
  background-position: center; /* Centraliza a imagem */
  background-repeat: no-repeat;
`;

export const BanerTitle = styled.h1`
  color: #000000;
  font-size: 48px;
  font-weight: 500;
`;

export const BanerCurrentLocation = styled.span`
  color: #000000;
  font-size: 19px;
`;
