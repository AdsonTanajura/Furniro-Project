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
import { useState } from 'react';
import FilterModal from '../FilterModal';
type FilterBarProps = {
  filters: Array<string>;
  setFilters: (filters: Array<string>) => void;
};

const FilterBar = ({ filters, setFilters }: FilterBarProps) => {
  const [filterIsOpen, setFilterIsOpen] = useState(false);

  return (
    <>
      <FilterContainer>
        <FilterContent>
          <FilterInformation>
            <FilterButtomContainer onClick={() => setFilterIsOpen(true)}>
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
      {filterIsOpen && (
        <FilterModal
          setFilterIsOpen={setFilterIsOpen}
          filters={filters}
          setFilters={setFilters}
        />
      )}
    </>
  );
};

export default FilterBar;
