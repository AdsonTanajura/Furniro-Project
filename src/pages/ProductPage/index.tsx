import ProductImage from './components/ImagensSide';
import ProductInformation from './components/ProductInformation';
import SubHeader from './components/SubHeader';
import { ProductContainer } from './styles';

const ProductPage = () => {
  return (
    <>
      <section>
        <SubHeader />
        <ProductContainer>
          <ProductImage />
          <ProductInformation />
        </ProductContainer>
      </section>
    </>
  );
};

export default ProductPage;
