import {
  ProductQuantityAddButtonInput,
  ProductQuantityInput,
  ProductQuantityInputContainer,
  ProductQuantityLessButtonInput,
} from './styles';
import { CartInputQuantityProps } from './types';

const CartInputQuantity = ({
  handleAddItem,
  productQuantity,
  handleRemoveItem,
}: CartInputQuantityProps) => {
  return (
    <ProductQuantityInputContainer>
      <ProductQuantityLessButtonInput onClick={handleRemoveItem}>
        -
      </ProductQuantityLessButtonInput>
      <ProductQuantityInput
        type="number"
        placeholder="1"
        value={productQuantity}
      />
      <ProductQuantityAddButtonInput onClick={handleAddItem}>
        +
      </ProductQuantityAddButtonInput>
    </ProductQuantityInputContainer>
  );
};

export default CartInputQuantity;
