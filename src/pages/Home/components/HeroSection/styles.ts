import { styled } from 'styled-components';
export const Section = styled.section`
  max-width: 1440px;
  margin-bottom: 56px;
  @media (max-width: 780px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const HeroBackgroundContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  align-items: center;
  height: 716px;
  width: 100vw;
  max-width: 1440px;
  position: relative;
  background-image: url('https://res.cloudinary.com/dth7akzlq/image/upload/v1741821433/scandinavian-interior-mockup-wall-decal-background_1_riqie9.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 780px) {
    justify-content: center;
    align-items: center;
  }
`;

export const HeroCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: #fff3e3;
  border-radius: 10px;
  margin-right: 58px;
  padding: 62px 43px 37px 39px;
  max-width: 643px;
  max-height: 443px;

  @media (max-width: 780px) {
    width: 400px;
    margin-right: 0px;
  }
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

  @media (max-width: 780px) {
    font-size: 24px;
    line-height: normal; /* Define a altura da linha */
  }
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
  border: 1px solid transparent;
  border: none;
  background-color: #b88e2f;
  color: #ffffff;
  transition: all 0.2s;

  &:hover {
    background-color: #ffffff;
    color: #b88e2f;
    border-radius: 4px;
    border-bottom: 2px solid #b88e2f;
  }

  @media (max-width: 780px) {
    padding: 18px 40px;
  }
`;
