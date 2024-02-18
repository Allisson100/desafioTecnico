import styled from "styled-components";

const CardPositionStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    width: 100%;
`;

const TitleStyled = styled.h2`
    color: ${props => props.theme.fontColors.tertiary};
    font-size: 1.5rem;
`;

const ProportionContainerStyled = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 100%;
    justify-content: center;
    width: 100%;
`;

const InputContainerStyled = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;

    span {
        background-color: black;
        border-radius: 9999999px;
        height: 3px;
        width: 10%;
    }
`;

const InputStyled = styled.input`
    border: 2px solid #787878;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    line-height: 2rem;
    padding: 0.5rem;
    width: 40%;

    &:focus {
        outline: 2px solid black;
    }
`;

const ButtonStyled = styled.button`
    background-color: ${props => props.theme.bgColors.main};
    border-radius: 0.5rem;
    color: ${props => props.theme.fontColors.main};
    font-size: 1.2rem;
    padding: 0.5rem;
    text-align: center;
    text-transform: capitalize;
    transition: 0.2s;
    width: 30%;

    &:hover{
        transform: scale(1.05);
    }

    &:active{
        transform: scale(0.95);
    }
`;

export {
	CardPositionStyled,
	TitleStyled,
	ProportionContainerStyled,
	InputContainerStyled,
	InputStyled,
	ButtonStyled
};