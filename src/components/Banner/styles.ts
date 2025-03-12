import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 316px;
  background-image: url('https://res.cloudinary.com/dth7akzlq/image/upload/v1741822785/Rectangle_1_1_cqrffe.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const BannerTitle = styled.h1`
  color: #000000;
  font-size: 48px;
  font-weight: 500;
`;

export const BannerCurrentLocation = styled.span`
  color: #000000;
  font-size: 19px;
`;
