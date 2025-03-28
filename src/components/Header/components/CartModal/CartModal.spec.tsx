import { render } from '@testing-library/react';
import CartModal from '.';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../../store';
import userEvent from '@testing-library/user-event';

const mockSetIsCartOpen = jest.fn();

jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
    useNavigate: jest.fn(),
  };
});

const mockNavigate = jest.fn();
(useNavigate as jest.Mock).mockReturnValue(mockNavigate);

describe('<CartModal />', () => {
  it('should take you to the cart page when you click on the cart button', async () => {
    const { container, getByRole } = render(
      <Provider store={store}>
        <MemoryRouter>
          <CartModal setIsCartOpen={mockSetIsCartOpen} />
        </MemoryRouter>
      </Provider>
    );

    const cartButton = getByRole('button', { name: /cart/i });

    expect(cartButton).toBeInTheDocument();
    await userEvent.click(cartButton);

    expect(mockNavigate).toHaveBeenCalledWith('home/cart');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should take you to the Checkout page when you click on the Checkout button', async () => {
    const { container, getByRole } = render(
      <Provider store={store}>
        <MemoryRouter>
          <CartModal setIsCartOpen={mockSetIsCartOpen} />
        </MemoryRouter>
      </Provider>
    );

    const cartButton = getByRole('button', { name: /checkout/i });

    expect(cartButton).toBeInTheDocument();
    await userEvent.click(cartButton);

    expect(mockNavigate).toHaveBeenCalledWith('home/checkout');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should return false in the mockSetIsCartOpen when clicking the close button', async () => {
    const { container, getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <CartModal setIsCartOpen={mockSetIsCartOpen} />
        </MemoryRouter>
      </Provider>
    );

    const closeButton = getByTestId('close-button');

    expect(closeButton).toBeInTheDocument();
    expect(mockSetIsCartOpen).not.toHaveBeenCalled();
    await userEvent.click(closeButton);
    expect(mockSetIsCartOpen).toHaveBeenCalled();
    expect(mockSetIsCartOpen).toHaveBeenCalledWith(false);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the main elements', () => {
    const { container, getAllByRole } = render(
      <Provider store={store}>
        <MemoryRouter>
          <CartModal setIsCartOpen={mockSetIsCartOpen} />
        </MemoryRouter>
      </Provider>
    );
    const buttons = getAllByRole('button');
    const titles = getAllByRole('heading', { level: 2 });

    expect(titles.length).toBeGreaterThan(0);
    titles.forEach((title) => expect(title).toBeInTheDocument());
    titles.forEach((title) => expect(title).toBeVisible());

    expect(buttons.length).toBeGreaterThan(0);
    buttons.forEach((button) => expect(button).toBeInTheDocument());
    buttons.forEach((button) => expect(button).toBeVisible());

    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toBeVisible();
    expect(container.firstChild).toMatchSnapshot();
  });
});
