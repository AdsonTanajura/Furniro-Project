import React from 'react';
import { render } from '@testing-library/react';
import HeaderLogo from '.';

describe('<HeaderLogo />', () => {
  it('should render Logo', () => {
    const { getByRole } = render(<HeaderLogo />);

    const logo = getByRole('img');

    expect(logo).toBeInTheDocument();
  });
});
