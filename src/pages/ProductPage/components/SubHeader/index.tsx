import { SubHeaderContainer } from './styles';
import { SubHeaderProps } from './types';

const SubHeader = ({ title }: SubHeaderProps) => {
  return (
    <SubHeaderContainer>
      <div>{'Home > Shop'}</div>
      <div>{title}</div>
    </SubHeaderContainer>
  );
};

export default SubHeader;
