import {
  CloseButton,
  CloseButtonContainer,
  Conatiner,
  DetailsContainer,
  Imagen,
  Quantity,
  QuantityContainer,
  Title,
  Value,
  X,
} from './styles';

import { RiCloseCircleFill } from 'react-icons/ri';
import { CardProductItemProps } from './types';
import formatCurrencyRp from '../../../../utils/formatCurrency';
import { useAppDispatch } from '../../../../hooks';
import { removeItem } from '../../../../pages/Cart/CartSlice';

const CardProductItem = ({
  productImage,
  productQuantity,
  productTitle,
  productPrice,
  productId,
}: CardProductItemProps) => {
  const dispatch = useAppDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem({ id: productId, all: true }));
  };
  return (
    <Conatiner>
      <Imagen src={productImage} alt="" />
      <DetailsContainer>
        <Title>{productTitle}</Title>
        <QuantityContainer>
          <Quantity>{productQuantity}</Quantity>
          <X>X</X>
          <Value>{formatCurrencyRp(productPrice)}</Value>
        </QuantityContainer>
      </DetailsContainer>
      <CloseButtonContainer>
        <CloseButton onClick={handleRemoveItem}>
          <RiCloseCircleFill />
        </CloseButton>
      </CloseButtonContainer>
    </Conatiner>
  );
};

export default CardProductItem;
