import { useNavigate } from 'react-router-dom';
import {
  HeroBackgroundContainer,
  HeroCard,
  HeroCardButton,
  HeroCardDescription,
  HeroCardTag,
  HeroCardTitle,
  Section,
} from './styles';

const HeroSection = () => {
  const navigate = useNavigate();
  const handleBuyNow = () => {
    navigate('shop');
  };
  return (
    <Section>
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
          <HeroCardButton onClick={handleBuyNow}>BUY NOW</HeroCardButton>
        </HeroCard>
      </HeroBackgroundContainer>
    </Section>
  );
};

export default HeroSection;
