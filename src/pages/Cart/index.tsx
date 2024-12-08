import ProductItem from './components/ProductItem';
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

const Cart = () => {
  return (
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
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </ProductList>
      </CartDetails>
      <CartTotalsContainer>
        <CartTotalsTitle>Cart Totals</CartTotalsTitle>
        <CartTotalsSubContainer>
          <CartTotalsSubTitles>Subtotal</CartTotalsSubTitles>
          <CartTotalsSubtotalPrice>Rs. 250,000.00</CartTotalsSubtotalPrice>
        </CartTotalsSubContainer>
        <CartTotalsSubContainer>
          <CartTotalsSubTitles>Total</CartTotalsSubTitles>
          <CartTotalsTotalPrice>Rs. 250,000.00</CartTotalsTotalPrice>
        </CartTotalsSubContainer>
        <CartTotalsCheckOut>Check Out</CartTotalsCheckOut>
      </CartTotalsContainer>
    </Container>
  );
};

export default Cart;
