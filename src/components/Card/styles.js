import styled from "styled-components";

const CardContainerStyled = styled.div`
    width: 420px;
    height: 420px;
    min-height: 420px;
    position: relative;
`;

const NumberStyled = styled.span`
    color: ${props => props.theme.fontColors.secundary};
    display: flex;
    font-size: 1.5rem;
    font-weight: bold;
    left: -25px;
    position: absolute;
    top: 5px;
`;

const CardStyled = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    min-height: 420px;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
    padding: ${props => props.$noPadding ? "0rem" : "1rem"};
    border-radius: 1rem;
    border: 2px solid black;
`;

export {
	CardContainerStyled,
	NumberStyled,
	CardStyled,
};