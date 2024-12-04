import {
  LinkNavBarContainer,
  LinkNavBarList,
  LinkNavBarTitle,
  StyledLink,
} from './styles';

const LinkNavBar = () => {
  return (
    <LinkNavBarContainer>
      <LinkNavBarTitle>Links</LinkNavBarTitle>
      <nav>
        <LinkNavBarList>
          <li>
            <StyledLink to={'/'}>Home</StyledLink>
          </li>
          <li>
            <StyledLink to={'/'}>Shop</StyledLink>
          </li>
          <li>
            <StyledLink to={'/'}>About</StyledLink>
          </li>
          <li>
            <StyledLink to={'/'}>Contact</StyledLink>
          </li>
        </LinkNavBarList>
      </nav>
    </LinkNavBarContainer>
  );
};

export default LinkNavBar;
