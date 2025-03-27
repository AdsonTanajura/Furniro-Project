import { render, waitFor } from '@testing-library/react';
import { ClerkProvider } from '@clerk/clerk-react';
import userEvent from '@testing-library/user-event';
import UserMenu from '.';

jest.mock('@clerk/clerk-react');

const mockSetIsCartOpen = jest.fn();

describe('<UserMenu />', () => {
  it('should render the UserMenuContainer', () => {
    const { container } = render(
      <ClerkProvider publishableKey="test-clerk-key">
        <UserMenu setIsCartOpen={mockSetIsCartOpen} />
      </ClerkProvider>
    );
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toBeVisible();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('function should return SetIsCartOpen when the cart button is clicked', async () => {
    const { getByTestId, getByRole, getAllByAltText, getAllByRole, container } =
      render(
        <ClerkProvider publishableKey="test-clerk-key">
          <UserMenu setIsCartOpen={mockSetIsCartOpen} />
        </ClerkProvider>
      );
    const buttons = getAllByRole('button');
    const userAvatars = getAllByAltText('user avata');
    const cartButton = getByRole('button', { name: /cart/i });
    const cartIcon = getByTestId('cart-icon');

    expect(mockSetIsCartOpen).not.toHaveBeenCalled();
    expect(buttons.length).toBeLessThanOrEqual(3);
    expect(buttons.length).toBeGreaterThan(0);

    expect(userAvatars.length).toBeLessThanOrEqual(1);

    expect(cartButton).toBeInTheDocument();
    expect(cartButton).not.toBeDisabled();

    expect(cartIcon).toBeInTheDocument();

    await userEvent.click(cartButton);
    await waitFor(() => expect(mockSetIsCartOpen).toHaveBeenCalled());
    await waitFor(() => expect(mockSetIsCartOpen).toHaveBeenCalledWith(true));

    expect(container.firstChild).toMatchSnapshot();
  });
});
