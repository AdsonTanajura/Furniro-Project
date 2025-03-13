import { OurProductsSections } from './styled';
import HeroSection from './components/HeroSection';
import BrowseSection from './components/BrowseSection';
import RoomSection from './components/RoomSection';
import FuniroFurnitureSection from './components/FuniroFurnitureSection';
import ListProduct from '../../components/ListProduct';
import HomeSectionHeader from './components/HomeSectionHeader';

const Home = () => {
  return (
    <>
      <HeroSection />
      <BrowseSection />

      <OurProductsSections>
        <HomeSectionHeader title="Our Products" />
        <ListProduct />
      </OurProductsSections>

      <RoomSection />

      <FuniroFurnitureSection />
    </>
  );
};

export default Home;
