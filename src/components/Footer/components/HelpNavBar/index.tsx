import {
  HelpNavBarContainer,
  HelpNavBarList,
  HelpNavBarTitle,
  StyledLink,
} from './styles';

const HelpNavBar = () => {
  return (
    <HelpNavBarContainer>
      <HelpNavBarTitle>Links</HelpNavBarTitle>
      <nav>
        <HelpNavBarList>
          <li>
            <StyledLink to={'/'}>Payment Options</StyledLink>
          </li>
          <li>
            <StyledLink to={'/'}>Returns</StyledLink>
          </li>
          <li>
            <StyledLink to={'/'}>Privacy Policies</StyledLink>
          </li>
        </HelpNavBarList>
      </nav>
    </HelpNavBarContainer>
  );
};

export default HelpNavBar;
