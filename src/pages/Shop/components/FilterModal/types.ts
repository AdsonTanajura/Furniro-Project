export type FilterModalProps = {
  setFilterIsOpen: (value: boolean) => void;
  setFilters: (filters: Array<string>) => void;
  filters: Array<string>;
};
