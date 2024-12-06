import {
  CurrentPath,
  CurrentProduct,
  PageHistory,
  SeparationBar,
  SubHeaderContainer,
} from './styles';
import { SubHeaderProps } from './types';
import { FaChevronRight } from 'react-icons/fa';

const SubHeader = ({ title }: SubHeaderProps) => {
  return (
    <SubHeaderContainer>
      <CurrentPath>
        <PageHistory>Home</PageHistory>
        <SeparationBar>
          <FaChevronRight />
        </SeparationBar>
        <PageHistory>Shop</PageHistory>
        <SeparationBar>
          <FaChevronRight />
        </SeparationBar>
      </CurrentPath>
      <CurrentProduct>{title}</CurrentProduct>
    </SubHeaderContainer>
  );
};

export default SubHeader;
