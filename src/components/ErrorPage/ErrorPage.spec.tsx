import { render } from '@testing-library/react';
import ErrorPage from '.';

describe('<ErrorPage />', () => {
  const defultMenssage = 'Sorry about what happened';
  it('should render the error container', () => {
    const { container } = render(<ErrorPage />);

    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should display a default message when no errorMenssage is provided', () => {
    const { getAllByRole, getAllByText, container } = render(<ErrorPage />);

    const titles = getAllByRole('heading', { level: 2 });
    const emojis = getAllByText('🙀');
    const errorMensages = getAllByText(defultMenssage);

    expect(titles.length).toBeGreaterThan(0);
    titles.forEach((title) => expect(title).toBeInTheDocument());
    titles.forEach((title) => expect(title).toBeVisible());

    expect(errorMensages.length).toBeGreaterThan(0);
    errorMensages.forEach((errorMensage) => expect(errorMensage).toBeVisible());
    errorMensages.forEach((errorMensage) =>
      expect(errorMensage).toBeInTheDocument()
    );

    expect(emojis.length).toBeGreaterThan(0);
    emojis.forEach((emoji) => expect(emoji).toBeVisible());
    emojis.forEach((emoji) => expect(emoji).toBeInTheDocument());

    expect(container.firstChild).toMatchSnapshot();
  });

  it('the error message passed in by parameter must be visible to users', () => {
    const message = 'my bed error';
    const { getAllByText, getAllByRole, container } = render(
      <ErrorPage errorMenssage={message} />
    );

    const emojis = getAllByText('🙀');
    const titles = getAllByRole('heading', { level: 2 });
    const errorMensages = getAllByText(message);

    expect(titles.length).toBeGreaterThan(0);
    titles.forEach((title) => expect(title).toBeVisible());
    titles.forEach((title) => expect(title).toBeInTheDocument());

    expect(emojis.length).toBeGreaterThan(0);
    emojis.forEach((emoji) => expect(emoji).toBeVisible());
    emojis.forEach((emoji) => expect(emoji).toBeInTheDocument());

    expect(errorMensages.length).toBeGreaterThan(0);
    errorMensages.forEach((errorMensage) => expect(errorMensage).toBeVisible());
    errorMensages.forEach((errorMensage) =>
      expect(errorMensage).toBeInTheDocument()
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should handle an empty or undefined errorMenssage', () => {
    const { getAllByAltText } = render(<ErrorPage errorMenssage={''} />);
    const emojis = getAllByAltText('🙀');
    const errorMensages = getAllByAltText(defultMenssage);

    expect(emojis.length).toBeGreaterThan(0);
    emojis.forEach((emoji) => expect(emoji).toBeVisible());
    emojis.forEach((emoji) => expect(emoji).toBeInTheDocument());

    expect(errorMensages.length).toBeGreaterThan(0);
    errorMensages.forEach((errorMenssage) =>
      expect(errorMenssage).toBeVisible()
    );
    errorMensages.forEach((errorMenssage) =>
      expect(errorMenssage).toBeInTheDocument()
    );
  });
});
