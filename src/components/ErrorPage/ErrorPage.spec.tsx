import { render } from '@testing-library/react';
import ErrorPage from '.';

describe('<ErrorPage />', () => {
  const { getByRole, getByText, container } = render(<ErrorPage />);

  it('should render the error container', () => {
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should be visible to users', () => {
    const title = getByRole('heading');
    const emoji = getByText('🙀');
    const errorMensagem = getByText('Sorry about what happened');

    expect(title).toBeVisible();
    expect(emoji).toBeVisible();
    expect(errorMensagem).toBeVisible();
    expect(container).toMatchSnapshot();
  });

  it('the error message passed in by parameter must be visible to users', () => {
    const message = 'my bed error';
    const { getByRole, getByText, container } = render(
      <ErrorPage errorMenssage={message} />
    );

    const title = getByRole('heading');
    const emoji = getByText('🙀');
    const errorMensagem = getByText(message);

    expect(title).toBeVisible();
    expect(emoji).toBeVisible();
    expect(errorMensagem).toBeVisible();
    expect(container).toMatchSnapshot();
  });
});
