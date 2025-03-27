import { useNavigate } from 'react-router-dom';
import CartModalProps from './interfaces/CartModalProps';

export const useCartModalLogic = ({ setIsCartOpen }: CartModalProps) => {
  const navigate = useNavigate();

  const handleClickCloseButton = () => {
    setIsCartOpen(false);
  };
  const handleCheckoutButton = () => {
    navigate('home/checkout');
    setIsCartOpen(false);
  };

  const handleCartButton = () => {
    navigate('home/cart');
    setIsCartOpen(false);
  };

  return {
    handleCartButton,
    handleCheckoutButton,
    handleClickCloseButton,
  };
};
