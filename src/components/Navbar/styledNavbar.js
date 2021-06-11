import styled from "styled-components/macro";

export const Nav = styled.nav``;

export const Container = styled.section`
    /* border: 2px solid #f00; */
    display: flex;
    padding: 10px;
    align-items: center;
    max-height: 200px;

    &.menu-burger{
        height: 30px;
    }

    @media (max-width: 1100px) {
        justify-content: space-between;
        padding: 0px 30px;
    }
`;

export const LogoBox = styled.div`
    display: flex;
    height: 100%;
`;

export const Logo = styled.img`
    height: 100px;
`;

export const Menu = styled.ul`
    display: flex;
    margin: 0 auto;
    justify-content: center;

    @media (max-width: 1100px) {
        display: none;
        position: absolute;
        top: 105px;
        left: 0px;
        background-color: rgba(226, 266, 266, 0.5);
        border-bottom: 4px solid #950163;
        width: 100%;
        padding: 0px;
        margin: 0px;
    }
`;

export const MenuItem = styled.li`
    list-style: none;
    transition: all 0.3s ease-in-out;
    margin: 0 10px;
    color: #ddd;

    &:hover {
        transform: scale(1.2);
    }

    @media(max-width: 1100px) {
        width: 100%;
        height: 40px;
        justify-content: center;
        align-items: center;
        margin: 0px;
        padding: 25px;
        text-align: center;
    }
`;

export const MenuLink = styled.a`
    font-size: 1.2rem;
    font-weight: bold;
    color: #ddd;

    &:hover {
        color: #950163;
    }

    @media (max-width: 1100px) {
        color: #000;
    }
`;

export const BtnBox = styled.div`
    @media(max-width: 1100px) {
        display: none;
    }
`;

export const Btn = styled.button`
    padding: 8px 10px;
    width: 100px;
    background-color: #fff;
    color: #000;
    border: none;
    outline: none;
    border-radius: 3px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.9rem;
    transition: all 0.3s ease-in-out;

    &:hover {
        opacity: 0.9;
    }
`;

export const Burger = styled.div`
    display: none;

    @media(max-width: 1100px) {
        display: flex;
    }
`;

// Old Code!
// Responsive Menu

export const MenuIcon = styled.label`
    display: none;
    cursor: pointer;
    float: right;
    padding: 28px 20px;
    position: relative;
    user-select: none;

    @media(max-width: 1100px) {
        display: block;
    }
`;

export const NavIcon = styled.span`
    @media(max-width: 1100px) {
        background-color: #fff;
        display: block;
        height: 2px;
        position: relative;
        transition: background 0.2s ease-out;
        width: 24px;

        ::before,
        ::after {
            background: rgb(255, 255, 255);
            content: '';
            display: block;
            height: 100%;
            position: absolute;
            transition: all ease-out 0.2s;
            width: 100%;
        }

        ::before {
            top: 6px;
        }

        ::after {
            top: -6px;
        }
    }
`;

export const MenuBtn = styled.input`
    display: none;

    @media(max-width: 1100px) {
        display: none;

        :checked ~ ${Menu} {
            display: block;
        }

        :checked ~ ${MenuIcon} ${NavIcon} {
            background: transparent;
        }

        :checked ~ ${MenuIcon} ${NavIcon}::before {
            transform: rotate(-45deg);
            top: 0;
            background-color: #950163;
        }

        :checked ~ ${MenuIcon} ${NavIcon}::after {
            transform: rotate(45deg);
            top: 0;
            background-color: #950163;
        }
    }
`;