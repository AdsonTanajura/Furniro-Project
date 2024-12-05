import { DataObjectProps } from '../../types';

export type FilterBarProps = {
  filters: Array<string>;
  setFilters: (filters: Array<string>) => void;
  showManyCards: string;
  setShowManyCards: (manyCards: string) => void;
  dataObject: DataObjectProps | undefined;
  currentPage: number;
};
