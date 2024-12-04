import formatPath from '../../../../utils/formatPath';
import { ShopBanerTitle, ShopBanerCurrentLocation, Container } from './styles';
import { useLocation } from 'react-router-dom';

const ShopBaner = () => {
  const location = useLocation();
  const currentLocation = formatPath(location.pathname);
  return (
    <Container>
      <ShopBanerTitle>Shop</ShopBanerTitle>
      <ShopBanerCurrentLocation>{currentLocation}</ShopBanerCurrentLocation>
    </Container>
  );
};

export default ShopBaner;
