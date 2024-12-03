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
  BrowseSection,
  BrowseCardList,
  BrowseCard,
  BrowseSectionTitleContainer,
  BrowseSectionTitle,
  BrowseSectionDescription,
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

        <BrowseSection>
          <BrowseSectionTitleContainer>
            <BrowseSectionTitle>Browse The Range</BrowseSectionTitle>
            <BrowseSectionDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BrowseSectionDescription>
          </BrowseSectionTitleContainer>

          <BrowseCardList>
            <BrowseCard>
              <img
                src="https://desafiocompass03.s3.us-east-2.amazonaws.com/sectiom3Img3.jpg"
                alt=""
              />
              <span>Dining</span>
            </BrowseCard>
            <BrowseCard>
              <img
                src="https://desafiocompass03.s3.us-east-2.amazonaws.com/section2Img1.png"
                alt=""
              />
              <span>BrowseCardving</span>
            </BrowseCard>
            <BrowseCard>
              <img
                src="https://desafiocompass03.s3.us-east-2.amazonaws.com/section2Img2.png"
                alt=""
              />
              <span>Bedroom</span>
            </BrowseCard>
          </BrowseCardList>
        </BrowseSection>
      </main>
    </>
  );
};

export default Home;
