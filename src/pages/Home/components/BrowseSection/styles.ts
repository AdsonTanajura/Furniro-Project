import { styled } from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 0px 102px;
  gap: 62px;

  @media (max-width: 780px) {
    padding: 0px;
  }
`;

export const BrowseCardList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 20px;

  @media (max-width: 780px) {
    justify-content: center;
  }
`;

export const BrowseCard = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  img {
    max-width: 100vw;
  }
`;
export const BrowseCardDescription = styled.samp`
  font-size: 24px;
  font-weight: 600;
  color: #333333;
`;
