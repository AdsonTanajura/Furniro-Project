import { css, styled } from 'styled-components';

type PageButtonProps = {
  isCurrenPage: boolean;
};

export const ProductList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 64px;
  gap: 32px;

  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const PageButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 38px;
`;

export const PageButton = styled.button<PageButtonProps>`
  text-align: center;
  border: none;
  margin-top: 70px;
  border-radius: 10px;
  min-width: 60px;
  min-height: 60px;
  transition: all 0.2s;

  ${(props) =>
    props.isCurrenPage
      ? css`
          background-color: #b88e2f;
          color: #ffffff;
        `
      : css`
          background-color: #f9f1e7;
          color: #000000;
        `}

  &:hover {
    background-color: #b88e2f;
    color: #ffffff;
  }
`;

export const NextPageButton = styled.button`
  text-align: center;
  border: none;
  background-color: #f9f1e7;
  color: #000000;
  margin-top: 70px;
  border-radius: 10px;
  min-width: 98px;
  min-height: 60px;
  transition: all 0.2s;

  &:hover {
    background-color: #b88e2f;
    color: #ffffff;
  }
`;
