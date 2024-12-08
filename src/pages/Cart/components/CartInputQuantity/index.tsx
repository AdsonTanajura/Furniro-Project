import {
  ProductQuantityAddButtonInput,
  ProductQuantityInput,
  ProductQuantityInputContainer,
  ProductQuantityLessButtonInput,
} from './styles';

const CartInputQuantity = () => {
  return (
    <ProductQuantityInputContainer>
      <ProductQuantityLessButtonInput>-</ProductQuantityLessButtonInput>
      <ProductQuantityInput type="number" placeholder="1" />
      <ProductQuantityAddButtonInput>+</ProductQuantityAddButtonInput>
    </ProductQuantityInputContainer>
  );
};

export default CartInputQuantity;
