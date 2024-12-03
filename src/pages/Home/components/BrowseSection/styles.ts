import { styled } from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 0px 102px;

  @media (max-width: 780px) {
    padding: 0px;
  }
`;

export const BrowseSectionTitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 62px;
`;

export const BrowseSectionTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #333333;
`;

export const BrowseSectionDescription = styled.h2`
  font-size: 20px;
  font-weight: 400;
  color: #666666;
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
`;
export const BrowseCardDescription = styled.samp`
  font-size: 24px;
  font-weight: 600;
  color: #333333;
`;
