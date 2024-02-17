import styled from "styled-components";

const CardContainerStyled = styled.div`
    align-items: center;
    border: 1px solid black;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    height: 420px;
    min-height: 420px;
    padding: 1rem;
    position: relative;
    width: 420px;

    &::before {
        color: ${props => props.theme.fontColors.secundary};
        content: "${props => props.$projectNumber}";
        display: flex;
        font-size: 1.5rem;
        font-weight: bold;
        left: -25px;
        position: absolute;
        top: 5px;
    }
`;

export {
	CardContainerStyled,
};