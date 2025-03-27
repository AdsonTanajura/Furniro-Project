import { render } from '@testing-library/react';
import HeaderMobileMenu from '.';
import { MemoryRouter } from 'react-router-dom';
describe('<HeaderMobileMenu />', () => {
  const headerHeight = 150;
  const defaultHeaderHeight = 147;

  it('should render all the elements of the component', () => {
    const { container } = render(
      <MemoryRouter>
        <HeaderMobileMenu headerHeight={headerHeight} />
      </MemoryRouter>
    );

    const mobileMenuContainer = container.firstChild;
    const navContainerMobile = mobileMenuContainer?.firstChild;

    expect(navContainerMobile).toBeInTheDocument();
    expect(navContainerMobile).toBeVisible();
    expect(mobileMenuContainer).toBeInTheDocument();
    expect(mobileMenuContainer).toBeVisible();
  });

  it('should change the top syles based on the headerHeight prop', () => {
    const { container } = render(
      <MemoryRouter>
        <HeaderMobileMenu headerHeight={headerHeight} />
      </MemoryRouter>
    );

    const mobileMenuContainer = container.firstChild;
    expect(mobileMenuContainer).toHaveStyle({ top: `${headerHeight}px` });
  });

  it('should have a top style of 147px if the headerHeight property is not sent', () => {
    const { container } = render(
      <MemoryRouter>
        <HeaderMobileMenu />
      </MemoryRouter>
    );
    const mobileMenuContainer = container.firstChild;

    expect(mobileMenuContainer).toHaveStyle({
      top: `${defaultHeaderHeight}px`,
    });
  });
});
