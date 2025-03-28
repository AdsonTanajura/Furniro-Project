import {
  Button,
  ButtonContainer,
  CloseButton,
  CartModalContainer,
  ProductContainer,
  Title,
  TitleBorderContainer,
  TitleContainer,
} from './styles';
import CardProductItem from '../CardProductItem';
import {
  ProductList,
  Subtotal,
  SubtotalContainer,
  SubtotalPrice,
} from '../CardProductItem/styles';
import { FaWindowClose } from 'react-icons/fa';
import { useAppSelector } from '../../../../hooks';
import formatCurrencyRp from '../../../../utils/formatCurrencyRp';
import CartModalProps from './interfaces/CartModalProps';
import { useCartModalLogic } from './logic';

const CartModal = ({ setIsCartOpen }: CartModalProps) => {
  const { handleCartButton, handleCheckoutButton, handleClickCloseButton } =
    useCartModalLogic({ setIsCartOpen });

  const cart = useAppSelector((state) => state.cart);
  return (
    <CartModalContainer>
      <ProductContainer>
        <TitleContainer>
          <TitleBorderContainer>
            <Title>Shopping Cart</Title>
          </TitleBorderContainer>
          <div>
            <CloseButton
              data-testid="close-button"
              onClick={handleClickCloseButton}
            >
              <FaWindowClose />
            </CloseButton>
          </div>
        </TitleContainer>
        <ProductList>
          {cart.items.map((item) => (
            <CardProductItem
              productImage={item.image}
              productPrice={item.price}
              productQuantity={item.quantity}
              productTitle={item.name}
              productId={item.id}
              key={item.id}
            />
          ))}
        </ProductList>
        <SubtotalContainer>
          <Subtotal>Subtotal</Subtotal>
          <SubtotalPrice>{formatCurrencyRp(cart.subtotal)}</SubtotalPrice>
        </SubtotalContainer>
      </ProductContainer>
      <ButtonContainer>
        <Button onClick={handleCartButton}>Cart</Button>
        <Button onClick={handleCheckoutButton}>Checkout</Button>
        <Button>Comparison</Button>
      </ButtonContainer>
    </CartModalContainer>
  );
};

export default CartModal;
