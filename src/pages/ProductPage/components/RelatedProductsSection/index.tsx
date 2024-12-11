import ListProduct from '../../../../components/ListProduct';
import { Container } from './styles';

const RelatedProductsSection = () => {
  return (
    <section>
      <Container>
        <h2>Related Products</h2>
        <ListProduct per={4} />
      </Container>
    </section>
  );
};

export default RelatedProductsSection;
