import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import HeaderNavBar from '.';

describe('<HeaderNavBar />', () => {
  it('should render all the elements of the component', () => {
    const { getAllByRole, container } = render(
      <MemoryRouter>
        <HeaderNavBar />
      </MemoryRouter>
    );

    const ulElements = getAllByRole('list');
    const liElements = getAllByRole('listitem');
    const navElement = container.firstChild;
    const linkElements = getAllByRole('link');

    expect(linkElements.length).toBeGreaterThanOrEqual(4);
    expect(linkElements.length).toBeLessThanOrEqual(4);
    linkElements.forEach((linkElement) =>
      expect(linkElement).toBeInTheDocument()
    );
    linkElements.forEach((linkElement) => expect(linkElement).toBeVisible());

    expect(liElements.length).toBeGreaterThanOrEqual(4);
    expect(liElements.length).toBeLessThanOrEqual(4);
    liElements.forEach((liElement) => expect(liElement).toBeInTheDocument());
    liElements.forEach((liElement) => expect(liElement).toBeVisible());

    expect(ulElements.length).toBeGreaterThanOrEqual(1);
    ulElements.forEach((ulElement) => expect(ulElement).toBeInTheDocument());
    ulElements.forEach((ulElement) => expect(ulElement).toBeVisible());

    expect(navElement).toBeInTheDocument();
    expect(navElement).toBeVisible();
  });

  it('should render the correct links', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <HeaderNavBar />
      </MemoryRouter>
    );

    expect(getByRole('link', { name: /home/i })).toHaveAttribute(
      'href',
      '/home'
    );
    expect(getByRole('link', { name: /shop/i })).toHaveAttribute(
      'href',
      '/home/shop'
    );
    expect(getByRole('link', { name: /about/i })).toHaveAttribute('href', '/a');
    expect(getByRole('link', { name: /contact/i })).toHaveAttribute(
      'href',
      '/home/contact'
    );
  });

  it('should navigate to the correct page by clicking on the links', async () => {
    const { getByRole, findByTestId } = render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<HeaderNavBar />} />
          <Route
            path="/home"
            element={<div data-testid="home-page">home Page</div>}
          />
        </Routes>
      </MemoryRouter>
    );

    const user = userEvent.setup();
    const homeLink = getByRole('link', { name: /home/i });

    await user.click(homeLink);

    expect(await findByTestId('home-page')).toBeInTheDocument();
  });
});
