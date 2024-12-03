import ProductCard from '../../../../components/Product Card';
import { ListCotainer } from './styles';

const ListProduct = () => {
  return (
    <ListCotainer>
      <ProductCard
        description="awdadwadawdwa"
        img="https://desafiocompass03.s3.us-east-2.amazonaws.com/sectiom3Img3.jpg"
        price={4000000}
        title="Teste"
        isNew
      />
    </ListCotainer>
  );
};

export default ListProduct;
