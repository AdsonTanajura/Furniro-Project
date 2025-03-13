import { MenuLink, MenuList } from './styles';

const HeaderNavBar = () => {
  return (
    <nav>
      <MenuList>
        <li>
          <MenuLink to={'/home'}>Home</MenuLink>
        </li>
        <li>
          <MenuLink to={'/home/shop'}>Shop</MenuLink>
        </li>
        <li>
          <MenuLink to={'/a'}>About</MenuLink>
        </li>
        <li>
          <MenuLink to={'/home/contact'}>Contact</MenuLink>
        </li>
      </MenuList>
    </nav>
  );
};

export default HeaderNavBar;
