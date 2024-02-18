import styled from "styled-components";

const CardWithButtonContainerStyled = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 500px;
    justify-content: space-between;
    width: 420px;
`;

const CardContainerStyled = styled.div`
    align-items: center;
    border: 1px solid black;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    height: 420px;
    padding: 3rem;
    position: relative;
    width: 100%;

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

const ButtonStyled = styled.button`
    background-color: ${props => props.theme.bgColors.main};
    border-radius: 0.5rem;
    color: ${props => props.theme.fontColors.main};
    font-size: 1.2rem;
    padding: 0.8rem;
    text-align: center;
    text-transform: ${props => props.$textTransform};
    transition: 0.2s;
    width: ${props => props.$btWidth};

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }
`;

export {
	CardWithButtonContainerStyled,
	CardContainerStyled,
	ButtonStyled
};