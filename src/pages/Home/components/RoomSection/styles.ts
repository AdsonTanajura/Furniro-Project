import { styled } from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  background-color: #fcf8f3;
  margin-top: 69px;
  padding: 44px 0px;
  padding-left: 102px;
  gap: 42px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-weight: bold;
  color: #3a3a3a;
  line-height: 120%;
  font-size: 40px;
`;

export const Descritpion = styled.p`
  color: #616161;
  font-weight: 500;
  line-height: 150%;
  font-size: 16px;
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
