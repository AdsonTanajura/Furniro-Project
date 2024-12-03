import { styled } from 'styled-components';
export const HeroSection = styled.section`
  max-width: 1440px;
`;

export const HeroBackgroundContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 716px;
  width: 100vw;
  max-width: 1440px;
  position: relative;
  background-image: url('https://desafiocompass03.s3.us-east-2.amazonaws.com/sessao1Img.jpg'); /* Caminho da sua imagem */
  background-size: cover; /* Cobre todo o contêiner */
  background-position: center; /* Centraliza a imagem */
  background-repeat: no-repeat;
`;

export const HeroCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff3e3;
  border-radius: 10px;
  margin-right: 58px;
  padding: 62px 43px 37px 39px;
  max-width: 643px;
  max-height: 443px;
`;

export const HeroCardTag = styled.span`
  font-size: 16px;
  color: #333333;
  font-weight: 600;
  margin-top: 4px;
`;

export const HeroCardTitle = styled.h2`
  font-size: 52px;
  line-height: 65px; /* Define a altura da linha */
  letter-spacing: 0px;
  font-weight: bold;
  color: #b88e2f;
  margin-bottom: 17px;
`;

export const HeroCardDescription = styled.p`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0px;
  font-weight: 500;
  margin-bottom: 44px;
  color: #333333;
`;

export const HeroCardButton = styled.button`
  font-size: 16px;
  padding: 25px 75px;
  max-width: 228px;
  font-weight: bold;
  border: none;
  background-color: #b88e2f;
  color: #ffffff;
`;
