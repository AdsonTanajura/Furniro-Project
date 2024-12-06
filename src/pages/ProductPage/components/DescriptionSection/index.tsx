import React, { useState } from 'react';
import {
  DescriptionTabs,
  DetailsContainer,
  ImagemContainer,
  SectionContainer,
  Title,
  TitleContainer,
} from './styles';

const DescriptionSection = () => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
  const [isAddInfoOpen, setIsAddInfoOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const text = e.currentTarget.textContent;
    if (text === 'Description') {
      setIsDescriptionOpen(true);
      setIsAddInfoOpen(false);
      return;
    }
    if (text === 'Additional Information') {
      setIsDescriptionOpen(false);
      setIsAddInfoOpen(true);
      return;
    }
  };
  return (
    <SectionContainer>
      <TitleContainer>
        <Title isOpen={isDescriptionOpen} onClick={handleClick}>
          Description
        </Title>
        <Title isOpen={isAddInfoOpen} onClick={handleClick}>
          Additional Information
        </Title>
      </TitleContainer>
      <DetailsContainer>
        {isAddInfoOpen && (
          <>
            <DescriptionTabs>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              ducimus assumenda, aperiam similique id laborum culpa veniam animi
              dicta ex libero quod temporibus eligendi sequi molestiae totam
              qui, quisquam impedit!
            </DescriptionTabs>
            <DescriptionTabs>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur et cupiditate vel aliquam, dicta, qui in, eligendi
              accusantium culpa enim dolore debitis? Quibusdam molestiae
              consequatur facilis impedit unde, iure voluptates.
            </DescriptionTabs>
          </>
        )}
        {isDescriptionOpen && (
          <>
            <DescriptionTabs>
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </DescriptionTabs>
            <DescriptionTabs>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </DescriptionTabs>
          </>
        )}

        <ImagemContainer>
          <img
            src="https://desafiocompass03.s3.us-east-2.amazonaws.com/ShopPageImgs/Group+106.png"
            alt=""
          />
          <img
            src="https://desafiocompass03.s3.us-east-2.amazonaws.com/ShopPageImgs/Group+107.png"
            alt=""
          />
        </ImagemContainer>
      </DetailsContainer>
    </SectionContainer>
  );
};

export default DescriptionSection;
