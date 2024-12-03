import { useEffect, useState } from 'react';
import calcularDesconto from '../../utils/calcularDesconto';
import { ProductCardProps } from './types';
import {
  Container,
  Description,
  Details,
  DiscountBoll,
  NewBoll,
  Price,
  PriceContainer,
  PriceWithdiscount,
  TagContainer,
  Title,
} from './styles';
import formatCurrency from '../../utils/formatCurrency';

const ProductCard = ({
  img,
  description,
  price,
  title,
  discount,
  isNew,
}: ProductCardProps) => {
  const [priceWithdiscount, setPriceWithDiscount] = useState(0);
  useEffect(() => {
    if (discount) {
      setPriceWithDiscount(calcularDesconto(price, discount));
    }
  }, [price, discount]);

  return (
    <Container url={img}>
      <TagContainer>
        {discount && <DiscountBoll>-{discount}%</DiscountBoll>}
        {isNew && <NewBoll>New</NewBoll>}
      </TagContainer>
      <Details>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <PriceContainer>
          {discount ? (
            <PriceWithdiscount>
              {discount === 100 ? 'Free' : formatCurrency(priceWithdiscount)}
            </PriceWithdiscount>
          ) : null}
          <Price isDiscount={discount! > 0}>{formatCurrency(price)}</Price>
        </PriceContainer>
      </Details>
    </Container>
  );
};

export default ProductCard;
