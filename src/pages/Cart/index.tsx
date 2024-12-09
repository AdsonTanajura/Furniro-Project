import Baner from '../../components/Baner';
import ProductItem from './components/ProductItem';
import { useAppSelector } from '../../hooks';

import { RootState } from '../../store';
import {
  CartDetails,
  CartTotalsContainer,
  CartTotalsSubTitles,
  CartTotalsSubContainer,
  CartTotalsSubtotalPrice,
  CartTotalsTitle,
  Container,
  HeaderTags,
  ProductList,
  Tags,
  CartTotalsTotalPrice,
  CartTotalsCheckOut,
} from './styles';
import { useSelector } from 'react-redux';
import formatCurrencyRp from '../../utils/formatCurrency';

const Cart = () => {
  const cart = useAppSelector((state) => state.cart);
  const subtotal = useSelector((state: RootState) => state.cart.subtotal);
  const total = useSelector((state: RootState) => state.cart.total);

  return (
    <>
      <Baner name="Cart" />
      <Container>
        <CartDetails>
          <HeaderTags>
            <Tags>Product</Tags>
            <Tags>Price</Tags>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '36px' }}>
              <Tags>Quantity</Tags>
              <Tags>Subtotal</Tags>
            </div>
          </HeaderTags>

          <ProductList>
            {cart.items.map((item) => (
              <ProductItem
                productImage={item.image}
                productName={item.name}
                productSubtotal={item.subtotal}
                key={item.id}
                productPrice={item.price}
                productId={item.id}
                productQuantity={item.quantity}
              />
            ))}
          </ProductList>
        </CartDetails>
        <CartTotalsContainer>
          <CartTotalsTitle>Cart Totals</CartTotalsTitle>
          <CartTotalsSubContainer>
            <CartTotalsSubTitles>Subtotal</CartTotalsSubTitles>
            <CartTotalsSubtotalPrice>
              {formatCurrencyRp(subtotal)}
            </CartTotalsSubtotalPrice>
          </CartTotalsSubContainer>
          <CartTotalsSubContainer>
            <CartTotalsSubTitles>Total</CartTotalsSubTitles>
            <CartTotalsTotalPrice>
              {formatCurrencyRp(total)}
            </CartTotalsTotalPrice>
          </CartTotalsSubContainer>
          <CartTotalsCheckOut>Check Out</CartTotalsCheckOut>
        </CartTotalsContainer>
      </Container>
    </>
  );
};

export default Cart;
