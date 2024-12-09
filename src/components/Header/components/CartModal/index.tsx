import {
  Button,
  ButtonContainer,
  CloseButton,
  Container,
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
import { CartModalProps } from './types';
import { useNavigate } from 'react-router-dom';

const CartModal = ({ setIsCartOpen }: CartModalProps) => {
  const navigate = useNavigate();

  const handleClickCloseButton = () => {
    setIsCartOpen(false);
  };
  const handleCheckoutButton = () => {
    navigate('home/checkout');
  };

  const handleCartButton = () => {
    navigate('home/cart');
  };
  return (
    <Container>
      <ProductContainer>
        <TitleContainer>
          <TitleBorderContainer>
            <Title>Shopping Cart</Title>
          </TitleBorderContainer>
          <div>
            <CloseButton onClick={handleClickCloseButton}>
              <FaWindowClose />
            </CloseButton>
          </div>
        </TitleContainer>
        <ProductList>
          <CardProductItem />
          <CardProductItem />
        </ProductList>
        <SubtotalContainer>
          <Subtotal>Subtotal</Subtotal>
          <SubtotalPrice>Rs. 520,000.00</SubtotalPrice>
        </SubtotalContainer>
      </ProductContainer>
      <ButtonContainer>
        <Button onClick={handleCartButton}>Cart</Button>
        <Button onClick={handleCheckoutButton}>Checkout</Button>
        <Button>Comparison</Button>
      </ButtonContainer>
    </Container>
  );
};

export default CartModal;
