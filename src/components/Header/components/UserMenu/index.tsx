import {
  CartButton,
  CartIcon,
  StyledSignInButton,
  UserMenuContainer,
} from './styles';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import userIcon from '../../../../assets/User.svg';
import { UserMenuProps } from './types';

const UserMenu = ({ setIsCartOpen }: UserMenuProps) => {
  const handleClickCartButton = () => {
    setIsCartOpen(true);
  };
  return (
    <UserMenuContainer>
      <SignedOut>
        <StyledSignInButton>
          <img src={userIcon} alt="" />
        </StyledSignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <CartButton onClick={handleClickCartButton}>
        <CartIcon />
      </CartButton>
    </UserMenuContainer>
  );
};

export default UserMenu;
