import { useLocation } from 'react-router-dom';
import { ShopBaner, ShopBanerCurrentLocation, ShopBanerTitle } from './styles';
import formatPath from '../../utils/formatPath';
import FilterBar from './components/FilterBar';

const Shop = () => {
  const location = useLocation();
  const currentLocation = formatPath(location.pathname);
  return (
    <>
      <ShopBaner>
        <ShopBanerTitle>Shop</ShopBanerTitle>
        <ShopBanerCurrentLocation>{currentLocation}</ShopBanerCurrentLocation>
      </ShopBaner>
      <FilterBar />
    </>
  );
};

export default Shop;
