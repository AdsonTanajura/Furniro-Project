import CartInputQuantity from '../CartInputQuantity';
import {
  Container,
  ProductImagen,
  ProductName,
  ProductPrice,
  ProductSubtotal,
  ProductTrashButton,
} from './styles';

import { TbTrashFilled } from 'react-icons/tb';

const ProductItem = () => {
  return (
    <Container>
      <ProductImagen
        src="https://desafiocompass03.s3.us-east-2.amazonaws.com/CardImg/pdCard7.jpg"
        alt=""
      />
      <ProductName>Asgaard sofa</ProductName>
      <ProductPrice>Rs. 250,000.00</ProductPrice>
      <CartInputQuantity />
      <ProductSubtotal>Rs. 250,000.00</ProductSubtotal>
      <ProductTrashButton>
        <TbTrashFilled />
      </ProductTrashButton>
    </Container>
  );
};

export default ProductItem;
