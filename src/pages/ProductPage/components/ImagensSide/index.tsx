import {
  Container,
  ProductImagen,
  ProductImagenContainer,
  ProductImagenPreview,
  ProductPreviewContainer,
} from './styles';
import { ImagensSideProps } from './types';

const ProductImage = ({ img, title }: ImagensSideProps) => {
  return (
    <Container>
      {/* div das imagens perquena */}
      <ProductPreviewContainer>
        <ProductImagenPreview src={img} alt={title} />
        <ProductImagenPreview src={img} alt={title} />
        <ProductImagenPreview src={img} alt={title} />
        <ProductImagenPreview src={img} alt={title} />
      </ProductPreviewContainer>
      {/* Div da imagem grande */}
      <ProductImagenContainer>
        <ProductImagen src={img} alt={title} />
      </ProductImagenContainer>
    </Container>
  );
};

export default ProductImage;
