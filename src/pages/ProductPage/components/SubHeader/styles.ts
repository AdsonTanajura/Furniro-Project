import { styled } from 'styled-components';

export const SubHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f9f1e7;
  padding: 38px 12px;
  gap: 34px;

  @media (min-width: 824px) {
    padding: 38px 100px;
  }
`;

export const CurrentPath = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-right: 25px;
  border-right: 2px solid #9f9f9f;
  min-height: 37px;
  gap: 14px;
`;

export const PageHistory = styled.span`
  color: #9f9f9f;
  font-size: 16px;
  font-weight: 400;
`;

export const SeparationBar = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
`;

export const CurrentProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 400;
`;
