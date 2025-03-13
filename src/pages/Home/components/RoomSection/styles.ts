import { styled } from 'styled-components';

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  background-color: #fcf8f3;
  margin-top: 69px;
  padding: 44px 0px;
  padding-left: 20px;
  gap: 42px;
  @media (min-width: 780px) {
    padding-left: 102px;
    grid-template-columns: 1fr 2fr;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: left;
`;

export const ExploreMoreButton = styled.button`
  font-size: 16px;
  padding: 12px 36px;
  max-width: 176px;
  font-weight: 600;
  border: 1px solid transparent;
  border: none;
  background-color: #b88e2f;
  color: #ffffff;
  transition: all 0.2s;

  &:hover {
    background-color: #ffffff;
    color: #b88e2f;
    border-radius: 4px;
    border-bottom: 2px solid #b88e2f;
  }

  @media (max-width: 780px) {
    padding: 18px 40px;
  }
`;
