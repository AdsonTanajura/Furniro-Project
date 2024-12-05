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
import { FilterBarProps } from './types';

const FilterBar = ({
  currentPage,
  dataObject,
  filters,
  setFilters,
  showManyCards,
  setShowManyCards,
}: FilterBarProps) => {
  const [filterIsOpen, setFilterIsOpen] = useState(false);

  const startToEnd = () => {
    if (currentPage && dataObject) {
      const itemsPerPage = Number(showManyCards) || dataObject.data.length; // Itens por página
      const totalItems = dataObject.items; // Total de itens disponíveis
      const firstItem = (currentPage - 1) * itemsPerPage + 1; // Primeiro item da página atual
      const lastItem = Math.min(currentPage * itemsPerPage, totalItems); // Último item da página atual

      console.log({
        currentPage,
        itemsPerPage,
        firstItem,
        lastItem,
        totalItems,
      });

      return { firstItem, lastItem, totalItems };
    }

    return { firstItem: 0, lastItem: 0, totalItems: 0 }; // Valores padrão para evitar erros
  };

  const { firstItem, lastItem, totalItems } = startToEnd();

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
          <FilterResult>
            Showing {firstItem}–{lastItem} of {totalItems} results
          </FilterResult>
        </FilterContent>
        <FilterInputContainer>
          <InputsContainer>
            <FilterLabel htmlFor="">Show</FilterLabel>
            <FilterShowInput
              type="number"
              value={showManyCards}
              onChange={(e) => setShowManyCards(e.target.value)}
            />
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
