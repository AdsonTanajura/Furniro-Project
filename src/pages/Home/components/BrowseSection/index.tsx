import {
  BrowseSectionTitle,
  BrowseSectionTitleContainer,
  Section,
  BrowseSectionDescription,
  BrowseCardList,
  BrowseCard,
  BrowseCardDescription,
} from './styles';

const BrowseSection = () => {
  return (
    <Section>
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
          <BrowseCardDescription>Dining</BrowseCardDescription>
        </BrowseCard>
        <BrowseCard>
          <img
            src="https://desafiocompass03.s3.us-east-2.amazonaws.com/section2Img1.png"
            alt=""
          />
          <BrowseCardDescription>BrowseCardving</BrowseCardDescription>
        </BrowseCard>
        <BrowseCard>
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
