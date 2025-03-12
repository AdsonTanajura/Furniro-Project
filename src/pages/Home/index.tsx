import { OurProductsSections, OurProductsSectionsTitle } from './styled';
import HeroSection from './components/HeroSection';
import BrowseSection from './components/BrowseSection';
import RoomSection from './components/RoomSection';
import FuniroFurnitureSection from './components/FuniroFurnitureSection';
import ListProduct from '../../components/ListProduct';

const Home = () => {
  return (
    <>
      <HeroSection />
      <BrowseSection />

      <OurProductsSections>
        <OurProductsSectionsTitle>Our Products</OurProductsSectionsTitle>
        <ListProduct />
      </OurProductsSections>

      <RoomSection />

      <FuniroFurnitureSection />
    </>
  );
};

export default Home;
