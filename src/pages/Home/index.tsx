import Header from '../../components/Header';
import { useAuth } from '@clerk/clerk-react';
import { OurProductsSections, OurProductsSectionsTitle } from './styled';
import ListProduct from './components/ListProduct';
import HeroSection from './components/HeroSection';
import BrowseSection from './components/BrowseSection';
import RoomSection from './components/RoomSection';
import FuniroFurnitureSection from './components/FuniroFurnitureSection';
import Footer from '../../components/Footer';

const Home = () => {
  const { userId } = useAuth();

  console.log('test', userId);

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BrowseSection />

        <OurProductsSections>
          <OurProductsSectionsTitle>Our Products</OurProductsSectionsTitle>
          <ListProduct />
        </OurProductsSections>

        <RoomSection />

        <FuniroFurnitureSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
