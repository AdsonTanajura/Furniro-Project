import React from 'react';
import ErrorPageProps from './ErrorPageProps';
import { ErrorPageContainer } from './styles';

const ErrorPage = ({
  errorMenssage = 'Sorry about what happened',
}: ErrorPageProps) => {
  return (
    <ErrorPageContainer>
      <h2>We had an error</h2>
      <span>🙀</span>
      <p>{!errorMenssage ? 'Sorry about what happened' : errorMenssage}</p>
    </ErrorPageContainer>
  );
};

export default ErrorPage;
