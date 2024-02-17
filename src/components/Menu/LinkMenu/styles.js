import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkContainerStyled = styled(Link)`
    color: ${props => props.theme.fontColors.main};
    font-size: 1.3rem;
    text-align: center;
    text-decoration: ${props => props.$underline ? "underline" : "none"};
    text-transform: capitalize;
`;

export default LinkContainerStyled;