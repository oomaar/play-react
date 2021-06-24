import {
    Nav,
    Container,
    LogoBox,
    Logo,
    // MenuIcon,
    // NavIcon,
    // MenuBtn,
    Menu,
    MenuItem,
    MenuLink,
    BtnBox,
    Btn,
    // Burger
} from "./styledNavbar";

const Navbar = () => {
    return (
        <Nav>
            <Container>
                <LogoBox>
                    <Logo src="/Images/logo.png" alt="logo" />
                </LogoBox>
                {/* <MenuBtn id="menu-btn" className="menu-btn" type="checkbox" />
                <MenuIcon htmlFor="menu-btn" for="menu-btn" className="menu-icon">
                    <NavIcon className="nav-icon"></NavIcon>
                </MenuIcon> */}
                <Menu>
                    <MenuItem>
                        <MenuLink>Home</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink>Explore</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink>Library</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink>Search</MenuLink>
                    </MenuItem>
                </Menu>

                <BtnBox>
                    <Btn>Sign In</Btn>
                </BtnBox>
            </Container>
        </Nav>
    );
};

export default Navbar;
