import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        border: none;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        margin: 0;
        padding: 0;
    }

    #root {
        background-color: ${props => props.theme.bgColors.tertiary};
        min-height: 100vh;
        position: relative;
        width: 100%;
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyles;