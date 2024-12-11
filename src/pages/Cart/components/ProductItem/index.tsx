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
import { ProductItemProps } from './types';
import formatCurrencyRp from '../../../../utils/formatCurrency';
import { useAppDispatch } from '../../../../hooks';
import { addItem, removeItem } from '../../CartSlice';

const ProductItem = ({
  productImage,
  productName,
  productSubtotal,
  productPrice,
  productId,
  productQuantity,
}: ProductItemProps) => {
  const dispatch = useAppDispatch();
  const handleAddItem = () => {
    dispatch(
      addItem({
        product: {
          id: productId,
          name: productImage,
          price: productPrice,
          image: productImage,
        },
        quantity: 1,
      })
    );
  };
  const handleRemoveItem = (isAll?: boolean) => {
    dispatch(removeItem({ id: productId, all: isAll }));
  };
  return (
    <Container>
      <ProductImagen src={productImage} alt="" />
      <ProductName>{productName}</ProductName>
      <ProductPrice>{formatCurrencyRp(productPrice)}</ProductPrice>
      <CartInputQuantity
        handleRemoveItem={handleRemoveItem}
        productQuantity={productQuantity}
        handleAddItem={handleAddItem}
      />
      <ProductSubtotal>{formatCurrencyRp(productSubtotal)}</ProductSubtotal>
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ProductTrashButton onClick={() => handleRemoveItem(true)}>
          <TbTrashFilled />
        </ProductTrashButton>
      </div>
    </Container>
  );
};

export default ProductItem;
