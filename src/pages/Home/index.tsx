import Header from '../../components/Header';
import { useAuth } from '@clerk/clerk-react';
import {
  HeroBackgroundContainer,
  HeroCard,
  HeroSection,
  HeroCardTag,
  HeroCardTitle,
  HeroCardButton,
  HeroCardDescription,
} from './styled';

const Home = () => {
  const { userId } = useAuth();

  console.log('test', userId);

  return (
    <>
      <Header />
      <main>
        <HeroSection>
          <HeroBackgroundContainer>
            <HeroCard>
              <HeroCardTag>New Arrival</HeroCardTag>
              <HeroCardTitle>
                Discover Our <br />
                New Collection
              </HeroCardTitle>
              <HeroCardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </HeroCardDescription>
              <HeroCardButton>BUY NOW</HeroCardButton>
            </HeroCard>
          </HeroBackgroundContainer>
        </HeroSection>
      </main>
    </>
  );
};

export default Home;
