import { styled } from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  background-color: #f9f1e7;
  padding: 22px 0px;

  @media (min-width: 780px) {
    padding: 22px 100px;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;

export const FilterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const FilterInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  min-width: 184px;
  padding-right: 30px;
  border-right: 2px solid #9f9f9f;
`;

export const FilterShowingResultsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 34p;
`;

export const FilterResult = styled.span`
  padding-left: 32px;
`;

export const FilterButtomContainer = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.2s;
  gap: 12px;

  &:hover {
    border-bottom: 2px solid #000000;
  }
`;

export const FilterInputContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  align-items: center;
  gap: 28px;
`;

export const InputsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 17px;
`;

export const FilterLabel = styled.label`
  font-size: 16px;
  @media (min-width: 780px) {
    font-size: 20px;
  }
`;

export const FilterShowInput = styled.input`
  text-align: center;
  color: #9f9f9f;
  border: none;
  font-size: 20px;
  width: 24px;
  height: 24px;
  @media (min-width: 780px) {
    width: 55px;
    height: 55px;
  }
`;

export const FilterShortByInput = styled.input`
  text-align: center;
  color: #9f9f9f;
  border: none;
  font-size: 20px;
  width: 88px;

  height: 24px;

  @media (min-width: 780px) {
    width: 188px;
    height: 55px;
  }
`;
