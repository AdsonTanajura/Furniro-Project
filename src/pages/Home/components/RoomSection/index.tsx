import {
  Section,
  TitleContainer,
  Title,
  ExploreMoreButton,
  Descritpion,
} from './styles';
import Carousel from '../Carousel';

const RoomSection = () => {
  return (
    <Section>
      <TitleContainer>
        <Title>50+ Beautiful rooms inspiration</Title>
        <Descritpion>
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </Descritpion>
        <ExploreMoreButton>Explore More</ExploreMoreButton>
      </TitleContainer>
      <div>
        <Carousel />
      </div>
    </Section>
  );
};

export default RoomSection;
