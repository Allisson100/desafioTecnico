import styled from "styled-components";

const CardContainerStyled = styled.section`
    height: 420px;
    min-height: 420px;
    position: relative;
    width: 380px;
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
    border-radius: 1rem;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 420px;
    overflow: hidden;
    padding: ${props => props.$noPadding ? "0rem" : "1rem"};
    position: relative;
    width: 100%;
`;

export {
	CardContainerStyled,
	NumberStyled,
	CardStyled,
};