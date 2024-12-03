import { styled } from 'styled-components';

export const OurProductsSections = styled.section`
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 102px;
  @media (max-width: 780px) {
    padding: 0;
  }
`;

export const OurProductsSectionsTitle = styled.h2`
  font-weight: bold;
  font-size: 40px;
  line-height: 120%;
  margin-bottom: 32px;
`;

export const RoomSection = styled.section`
  display: flex;
  flex-direction: row;
  background-color: #fcf8f3;
  padding-left: 102px;
  padding-top: 44px;
  gap: 42px;
`;
