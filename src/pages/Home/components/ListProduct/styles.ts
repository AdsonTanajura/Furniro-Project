import { styled } from 'styled-components';

export const ListCotainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 32px;

  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
