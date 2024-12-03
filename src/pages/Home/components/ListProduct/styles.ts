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

export const ShowMoreButton = styled.button`
  background-color: #ffffff;
  color: #b88e2f;
  border: 1px solid #b88e2f;
  font-weight: 600;
  font-size: 16px;
  width: 245px;
  padding: 12px 74px;
  transition: all 0.2s;

  &:hover {
    background-color: #b88e2f;
    color: #ffffff;
  }
`;
