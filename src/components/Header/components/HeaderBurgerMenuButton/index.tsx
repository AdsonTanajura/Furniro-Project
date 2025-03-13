import HeaderBurgerMenuButtonProps from './Interfaces/HeaderBurgerMenuButtonProps';
import { BurgerMenuButton } from './styles';

const HeaderBurgerMenuButton = ({
  toggleMenu,
}: HeaderBurgerMenuButtonProps) => {
  return (
    <BurgerMenuButton onClick={toggleMenu}>
      <span />
      <span />
      <span />
    </BurgerMenuButton>
  );
};

export default HeaderBurgerMenuButton;
