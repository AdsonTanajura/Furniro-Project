import { Section, ExploreMoreButton, ContentContainer } from './styles';
import Carousel from '../Carousel';
import HomeSectionHeader from '../HomeSectionHeader';

const RoomSection = () => {
  return (
    <Section>
      <ContentContainer>
        <HomeSectionHeader
          title="50+ Beautiful rooms inspiration"
          subTitle="Our designer already made a lot of beautiful prototipe of rooms that
          inspire you"
          isTextCentet={false}
        />
        <ExploreMoreButton>Explore More</ExploreMoreButton>
      </ContentContainer>
      <Carousel />
    </Section>
  );
};

export default RoomSection;
