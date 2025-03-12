import formatPath from '../../utils/formatPath';
import { BannerTitle, BannerCurrentLocation, Container } from './styles';
import { useLocation } from 'react-router-dom';
import { BannerProps } from './types';

const Banner = ({ name }: BannerProps) => {
  const location = useLocation();
  const currentLocation = formatPath(location.pathname);
  return (
    <Container>
      <BannerTitle>{name}</BannerTitle>
      <BannerCurrentLocation>{currentLocation}</BannerCurrentLocation>
    </Container>
  );
};

export default Banner;
