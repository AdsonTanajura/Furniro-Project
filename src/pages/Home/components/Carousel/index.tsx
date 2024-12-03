import { useState } from 'react';
import {
  Button,
  CarouselContainer,
  ImageContainer,
  ImageWrapper,
} from './styles';

const images = [
  'https://desafiocompass03.s3.us-east-2.amazonaws.com/Carousel/cr1.jpg',
  'https://desafiocompass03.s3.us-east-2.amazonaws.com/Carousel/cr2.jpg',
  'https://desafiocompass03.s3.us-east-2.amazonaws.com/Carousel/cr3.jpg',
  'https://desafiocompass03.s3.us-east-2.amazonaws.com/Carousel/cr4.jpg',
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const sizes = [50, 40, 30, 20]; // Tamanhos das imagens
  const offsets = images.map(
    (_, i) => (i - currentIndex + images.length) % images.length
  );

  return (
    <CarouselContainer>
      <Button onClick={handlePrev} style={{ left: '10px' }}>
        ◀
      </Button>
      <ImageContainer offset={currentIndex}>
        {images.map((src, index) => (
          <ImageWrapper
            key={index}
            size={sizes[offsets[index]]}
            zIndex={images.length - offsets[index]}
          >
            <img src={src} alt={`Image ${index + 1}`} />
          </ImageWrapper>
        ))}
      </ImageContainer>
      <Button onClick={handleNext} style={{ right: '10px' }}>
        ▶
      </Button>
    </CarouselContainer>
  );
};

export default Carousel;
