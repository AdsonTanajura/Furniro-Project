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
            <StyledLink to={'/home'}>Home</StyledLink>
          </li>
          <li>
            <StyledLink to={'/home/shop'}>Shop</StyledLink>
          </li>
          <li>
            <StyledLink to={'/'}>About</StyledLink>
          </li>
          <li>
            <StyledLink to={'/home/contact'}>Contact</StyledLink>
          </li>
        </LinkNavBarList>
      </nav>
    </LinkNavBarContainer>
  );
};

export default LinkNavBar;
