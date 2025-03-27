import HeaderBurgerMenuButtonProps from './Interfaces/HeaderBurgerMenuButtonProps';
import { BurgerMenuButton } from './styles';

const HeaderBurgerMenuButton = ({
  setIsMenuOpen,
  isMenuOpen,
}: HeaderBurgerMenuButtonProps) => {
  const toggleMenu = () => {
    !isMenuOpen ? setIsMenuOpen(true) : setIsMenuOpen(false);
  };

  return (
    <BurgerMenuButton onClick={toggleMenu}>
      <span />
      <span />
      <span />
    </BurgerMenuButton>
  );
};

export default HeaderBurgerMenuButton;
