import { VscSettings } from 'react-icons/vsc';
import { BsViewList } from 'react-icons/bs';
import { HiViewGrid } from 'react-icons/hi';
import {
  FilterButtomContainer,
  FilterContainer,
  FilterContent,
  FilterInformation,
  FilterInputContainer,
  FilterLabel,
  FilterResult,
  FilterShortByInput,
  FilterShowInput,
  InputsContainer,
} from './srtyles';

const FilterBar = () => {
  return (
    <FilterContainer>
      <FilterContent>
        <FilterInformation>
          <FilterButtomContainer>
            <VscSettings />
            Filter
          </FilterButtomContainer>
          <HiViewGrid />
          <BsViewList />
        </FilterInformation>
        <FilterResult>Showing 1–16 of 32 results</FilterResult>
      </FilterContent>
      <FilterInputContainer>
        <InputsContainer>
          <FilterLabel htmlFor="">Show</FilterLabel>
          <FilterShowInput type="number" placeholder="16" />
        </InputsContainer>
        <InputsContainer>
          <FilterLabel htmlFor="">Short by</FilterLabel>
          <FilterShortByInput type="text" placeholder="Default" />
        </InputsContainer>
      </FilterInputContainer>
    </FilterContainer>
  );
};

export default FilterBar;
