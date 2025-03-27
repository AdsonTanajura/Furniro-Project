import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HeaderBurgerMenuButton from '.';

describe('<HeaderBurgerMenuButton />', () => {
  const mockSetIsMenuOpen = jest.fn();
  const mockIsMenuOpen = false;
  it('should render all elements correctly', () => {
    const { getAllByRole, container } = render(
      <HeaderBurgerMenuButton
        setIsMenuOpen={mockSetIsMenuOpen}
        isMenuOpen={mockIsMenuOpen}
      />
    );
    const buttons = getAllByRole('button');

    expect(buttons.length).toBeGreaterThan(0);
    expect(buttons.length).toBeLessThanOrEqual(1);
    buttons.forEach((button) => expect(button).toBeInTheDocument());
    buttons.forEach((button) => expect(button).toBeVisible());

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should return true when the button is clicked', async () => {
    const { getByRole, container } = render(
      <HeaderBurgerMenuButton
        setIsMenuOpen={mockSetIsMenuOpen}
        isMenuOpen={mockIsMenuOpen}
      />
    );
    const button = getByRole('button');

    expect(mockSetIsMenuOpen).not.toHaveBeenCalled();

    await userEvent.click(button);
    await waitFor(() => expect(mockSetIsMenuOpen).toHaveBeenCalled());
    await waitFor(() => expect(mockSetIsMenuOpen).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(mockSetIsMenuOpen).toHaveBeenCalledWith(true));

    expect(container.firstChild).toMatchSnapshot();
  });
});
