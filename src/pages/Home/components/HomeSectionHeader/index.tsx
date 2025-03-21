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
  isTextCenter = true,
}: HomeSectionHeaderProps) => {
  return (
    <SectionHeaderContainer $isTextCenter={isTextCenter}>
      {preTitle ? <SectionPreTitle>{preTitle}</SectionPreTitle> : null}
      {title ? <SectionTitle>{title}</SectionTitle> : null}
      {subTitle ? <SectionSubTitle>{subTitle}</SectionSubTitle> : null}
    </SectionHeaderContainer>
  );
};

export default HomeSectionHeader;
