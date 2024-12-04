import {
  BrowseSectionTitle,
  BrowseSectionTitleContainer,
  Section,
  BrowseSectionDescription,
  BrowseCardList,
  BrowseCard,
  BrowseCardDescription,
} from './styles';

import { useNavigate } from 'react-router-dom';
const BrowseSection = () => {
  const navigate = useNavigate();
  return (
    <Section>
      <BrowseSectionTitleContainer>
        <BrowseSectionTitle>Browse The Range</BrowseSectionTitle>
        <BrowseSectionDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </BrowseSectionDescription>
      </BrowseSectionTitleContainer>

      <BrowseCardList>
        <BrowseCard onClick={() => navigate('/home/shop?category=dining')}>
          <img
            src="https://desafiocompass03.s3.us-east-2.amazonaws.com/sectiom3Img3.jpg"
            alt=""
          />
          <BrowseCardDescription>Dining</BrowseCardDescription>
        </BrowseCard>
        <BrowseCard onClick={() => navigate('/home/shop?category=living')}>
          <img
            src="https://desafiocompass03.s3.us-east-2.amazonaws.com/section2Img1.png"
            alt=""
          />
          <BrowseCardDescription>Living</BrowseCardDescription>
        </BrowseCard>
        <BrowseCard onClick={() => navigate('/home/shop?category=bedroom')}>
          <img
            src="https://desafiocompass03.s3.us-east-2.amazonaws.com/section2Img2.png"
            alt=""
          />
          <BrowseCardDescription>Bedroom</BrowseCardDescription>
        </BrowseCard>
      </BrowseCardList>
    </Section>
  );
};

export default BrowseSection;
