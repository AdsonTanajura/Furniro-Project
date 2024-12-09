import {
  ProductQuantityAddButtonInput,
  ProductQuantityInput,
  ProductQuantityInputContainer,
  ProductQuantityLessButtonInput,
} from './styles';
import { ProductPageInputQuantityProps } from './type';

const ProductPageInputQuantity = ({
  inputQuantity,
  setInputQuantity,
}: ProductPageInputQuantityProps) => {
  const handleAddClick = () => {
    setInputQuantity((v: number) => v + 1);
  };
  const handleLessClick = () => {
    if (inputQuantity <= 1) {
      return;
    }
    setInputQuantity((v: number) => v - 1);
  };
  return (
    <ProductQuantityInputContainer>
      <ProductQuantityLessButtonInput onClick={handleLessClick}>
        -
      </ProductQuantityLessButtonInput>
      <ProductQuantityInput
        type="number"
        placeholder="1"
        value={inputQuantity}
      />
      <ProductQuantityAddButtonInput onClick={handleAddClick}>
        +
      </ProductQuantityAddButtonInput>
    </ProductQuantityInputContainer>
  );
};

export default ProductPageInputQuantity;
