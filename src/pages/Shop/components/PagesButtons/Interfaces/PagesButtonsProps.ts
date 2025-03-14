import { DataObjectProps } from '../../../types';

interface PagesButtonsProps {
  dataObject: DataObjectProps;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  firstButton: number;
  setFirstButton: React.Dispatch<React.SetStateAction<number>>;
  secondButton: number;
  setSecondButton: React.Dispatch<React.SetStateAction<number>>;
  thirdButton: number;
  setThirdButton: React.Dispatch<React.SetStateAction<number>>;
}

export default PagesButtonsProps;
