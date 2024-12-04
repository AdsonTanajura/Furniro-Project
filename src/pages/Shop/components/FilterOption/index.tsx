import { FilterOptionPros } from './types';

const FilterOption = ({ filters, setFilters, text }: FilterOptionPros) => {
  const isActive = filters?.includes(text!);

  const handleClickFilter = () => {
    if (isActive) {
      const cleanedFilters = filters.filter((item) => item !== text);
      setFilters(cleanedFilters);
      return;
    }
    setFilters([...filters, text!]);
  };

  return (
    <button
      onClick={handleClickFilter}
      style={{
        backgroundColor: isActive ? 'red' : 'blue',
      }}
    >
      {text}
    </button>
  );
};

export default FilterOption;
