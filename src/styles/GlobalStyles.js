import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: none;
    }

    #root {
        background-color: ${props => props.theme.colors.tertiary};
        min-height: 100vh;
        width: 100%;
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyles;