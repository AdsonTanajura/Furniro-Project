import {
  FilterModalContainer,
  LeftSideModal,
  RightSideModalButton,
} from './styles';
import { GrClose } from 'react-icons/gr';
import { FilterModalProps } from './types';
import FilterOption from '../FilterOption';

const FilterModal = ({
  setFilterIsOpen,
  setFilters,

  filters,
}: FilterModalProps) => {
  return (
    <FilterModalContainer>
      <LeftSideModal>
        <FilterOption filters={filters} setFilters={setFilters} text="dining" />
        <FilterOption filters={filters} setFilters={setFilters} text="living" />
        <FilterOption
          filters={filters}
          setFilters={setFilters}
          text="bedroom"
        />
        <FilterOption
          filters={filters}
          setFilters={setFilters}
          text="bathroom"
        />
      </LeftSideModal>
      <RightSideModalButton onClick={() => setFilterIsOpen(false)}>
        <GrClose />
      </RightSideModalButton>
    </FilterModalContainer>
  );
};

export default FilterModal;
