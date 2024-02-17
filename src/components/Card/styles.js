import styled from "styled-components";

const CardContainerStyled = styled.div`
    width: 420px;
    height: 420px;
    padding: 1rem;
    border: 1px solid black;
    border-radius: 1rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

    &::before {
        content: "${props => props.$projectNumber}";
        position: absolute;
        display: flex;
        color: ${props => props.theme.fontColors.secundary};
        font-size: 1.5rem;
        font-weight: bold;
        left: -25px;
        top: 5px;
    }
`;

export {
	CardContainerStyled,
};