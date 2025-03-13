import HomeSectionHeaderProps from './Interfaces/HomeSectionHeaderProps';
import {
  SectionHeaderContainer,
  SectionPreTitle,
  SectionSubTitle,
  SectionTitle,
} from './styles';

const HomeSectionHeader = ({
  preTitle,
  subTitle,
  title,
  isTextCentet = true,
}: HomeSectionHeaderProps) => {
  return (
    <SectionHeaderContainer isTextCentet={isTextCentet}>
      {preTitle ? <SectionPreTitle>{preTitle}</SectionPreTitle> : null}
      {title ? <SectionTitle>{title}</SectionTitle> : null}
      {subTitle ? <SectionSubTitle>{subTitle}</SectionSubTitle> : null}
    </SectionHeaderContainer>
  );
};

export default HomeSectionHeader;
