import {
    Nav,
    Container,
    LogoBox,
    Logo,
    MenuIcon,
    NavIcon,
    MenuBtn,
    Menu,
    MenuItem,
    MenuLink,
    BtnBox,
    Btn,
} from "./styledNavbar";

const Navbar = () => {
    return (
        <Nav>
            <Container>
                <LogoBox>
                    <Logo src="/Images/logo.png" alt="logo" />
                </LogoBox>
                <MenuBtn id="menu-btn" className="menu-btn" type="checkbox" />
                <MenuIcon htmlFor="menu-btn" for="menu-btn" className="menu-icon">
                    <NavIcon className="nav-icon"></NavIcon>
                </MenuIcon>
                <Menu>
                    <MenuItem>
                        <MenuLink href="https://www.music.youtube.com">Home</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href="https://www.music.youtube.com">Explore</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href="https://www.music.youtube.com">Library</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink href="https://www.music.youtube.com">Search</MenuLink>
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
