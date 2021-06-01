import { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Comfortaa', cursive;
        margin: 0;
        padding: 0;
        background-color: #222;
        color: #ddd;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }
`;
