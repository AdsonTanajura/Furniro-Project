import {
  CartButton,
  CartIcon,
  StyledSignInButton,
  UserMenuContainer,
} from './styles';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import userIcon from '../../../../assets/User.svg';
import UserMenuProps from './interfaces/UserMenuProps';

const UserMenu = ({ setIsCartOpen }: UserMenuProps) => {
  const handleClickCartButton = () => {
    setIsCartOpen(true);
  };
  return (
    <UserMenuContainer>
      <SignedOut>
        <StyledSignInButton>
          <img src={userIcon} alt="user avata" />
        </StyledSignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <CartButton aria-label="cart" onClick={handleClickCartButton}>
        <CartIcon data-testid="cart-icon" />
      </CartButton>
    </UserMenuContainer>
  );
};

export default UserMenu;
