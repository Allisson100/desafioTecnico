import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        border: none;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Roboto", sans-serif;
    }

    #root {
        background-color: ${props => props.theme.bgColors.tertiary};
        min-height: 100vh;
        width: 100%;
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyles;