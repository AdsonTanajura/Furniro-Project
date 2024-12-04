import { styled } from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f1e7;
  padding: 22px 100px;
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

export const FilterButtomContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 12px;
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
  font-size: 20px;
`;

export const FilterShowInput = styled.input`
  text-align: center;
  color: #9f9f9f;
  border: none;
  font-size: 20px;
  width: 55px;
  height: 55px;
`;

export const FilterShortByInput = styled.input`
  text-align: center;
  color: #9f9f9f;
  border: none;
  font-size: 20px;
  width: 188px;
  height: 55px;
`;
