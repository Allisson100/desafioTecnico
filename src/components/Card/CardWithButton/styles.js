import styled from "styled-components";

const CardWithButtonContainerStyled = styled.div`
    width: 420px;
    height: 500px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
`;

const CardContainerStyled = styled.div`
    width: 100%;
    height: 420px;
    padding: 1rem;
    border: 1px solid black;
    border-radius: 1rem;
    padding: 3rem;
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

const ButtonStyled = styled.button`
    width: ${props => props.$btWidth};
    padding: 0.8rem;
    background-color: ${props => props.theme.bgColors.main};
    text-align: center;
    text-transform: ${props => props.$textTransform};
    border-radius: 0.5rem;
    color: ${props => props.theme.fontColors.main};
    font-size: 1.2rem;
`;

export {
	CardWithButtonContainerStyled,
	CardContainerStyled,
	ButtonStyled
};