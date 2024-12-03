import Header from '../../components/Header';
import { useAuth } from '@clerk/clerk-react';
import {
  OurProductsSections,
  OurProductsSectionsTitle,
  RoomSection,
} from './styled';
import ListProduct from './components/ListProduct';
import Carousel from './components/Carousel';
import HeroSection from './components/HeroSection';
import BrowseSection from './components/BrowseSection';

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

        <RoomSection>
          <div>
            <h2>50+ Beautiful rooms inspiration</h2>
            <p>
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </p>
            <button>Explore More</button>
          </div>
          <div>
            <Carousel />
          </div>
        </RoomSection>
      </main>
    </>
  );
};

export default Home;
