import DescriptionSection from './components/DescriptionSection';
import ProductImage from './components/ImagensSide';
import ProductInformation from './components/ProductInformation';
import RelatedProductsSection from './components/RelatedProductsSection';
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
      <DescriptionSection />
      <RelatedProductsSection />
    </>
  );
};

export default ProductPage;
