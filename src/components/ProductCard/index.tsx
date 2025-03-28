import { useEffect, useState } from 'react';
import calcularDesconto from '../../utils/calcularDesconto';
import { ProductCardProps } from './types';
import {
  AddCardButton,
  AddCardHover,
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
import formatCurrency from '../../utils/formatCurrencyRp';
import SocialMedia from './Components/SocialMedia';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { addItem } from '../../pages/Cart/CartSlice';
import { toast } from 'react-toastify';

const ProductCard = ({
  img,
  description,
  price,
  title,
  discount,
  isNew,
  id,
}: ProductCardProps) => {
  const [priceWithdiscount, setPriceWithDiscount] = useState(0);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClickView = () => {
    navigate(`/home/shop/${id}`);
  };

  const handleAddItem = () => {
    dispatch(
      addItem({
        product: {
          id: id,
          name: title,
          price: price,
          image: img,
        },
        quantity: 1,
      })
    );
    toast.success('Product added successfully', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  useEffect(() => {
    if (discount) {
      setPriceWithDiscount(calcularDesconto(price, discount));
    }
  }, [price, discount]);

  return (
    <Container $url={img}>
      <AddCardHover>
        <AddCardButton onClick={handleAddItem}>Add to cart</AddCardButton>
        <AddCardButton onClick={handleClickView}>View</AddCardButton>
        <SocialMedia />
      </AddCardHover>
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
          <Price $isDiscount={discount! > 0}>{formatCurrency(price)}</Price>
        </PriceContainer>
      </Details>
    </Container>
  );
};

export default ProductCard;
