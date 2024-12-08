import formatPath from '../../utils/formatPath';
import { BanerTitle, BanerCurrentLocation, Container } from './styles';
import { useLocation } from 'react-router-dom';
import { BanerProps } from './types';

const Baner = ({ name }: BanerProps) => {
  const location = useLocation();
  const currentLocation = formatPath(location.pathname);
  return (
    <Container>
      <BanerTitle>{name}</BanerTitle>
      <BanerCurrentLocation>{currentLocation}</BanerCurrentLocation>
    </Container>
  );
};

export default Baner;
