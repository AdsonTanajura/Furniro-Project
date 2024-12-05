import {
  Container,
  ProductImagen,
  ProductImagenContainer,
  ProductImagenPreview,
  ProductPreviewContainer,
} from './styles';

const ProductImage = () => {
  return (
    <Container>
      {/* div das imagens perquena */}
      <ProductPreviewContainer>
        <ProductImagenPreview
          src="https://desafiocompass03.s3.us-east-2.amazonaws.com/CardImg/pdCard7.jpg"
          alt="https://desafiocompass03.s3.us-east-2.amazonaws.com/CardImg/pdCard7.jpg"
        />
        <ProductImagenPreview
          src="https://desafiocompass03.s3.us-east-2.amazonaws.com/CardImg/pdCard7.jpg"
          alt="https://desafiocompass03.s3.us-east-2.amazonaws.com/CardImg/pdCard7.jpg"
        />
        <ProductImagenPreview
          src="https://desafiocompass03.s3.us-east-2.amazonaws.com/CardImg/pdCard7.jpg"
          alt="https://desafiocompass03.s3.us-east-2.amazonaws.com/CardImg/pdCard7.jpg"
        />
        <ProductImagenPreview
          src="https://desafiocompass03.s3.us-east-2.amazonaws.com/CardImg/pdCard7.jpg"
          alt=""
        />
      </ProductPreviewContainer>
      {/* Div da imagem grande */}
      <ProductImagenContainer>
        <ProductImagen
          src="https://desafiocompass03.s3.us-east-2.amazonaws.com/CardImg/pdCard7.jpg"
          alt=""
        />
      </ProductImagenContainer>
    </Container>
  );
};

export default ProductImage;
