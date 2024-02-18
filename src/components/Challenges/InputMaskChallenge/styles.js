import styled from "styled-components";
import MaskedInput from "react-text-mask";

const FomrContainerStyled = styled.form`
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

const MaskedInputStyled = styled(MaskedInput)`
    border: 2px solid #787878;
    border-radius: 0.5rem;
    font-size: 1rem;
    line-height: 2rem;
    padding: 0.5rem;
`;

const TextareaStyled = styled.textarea`
    border: 2px solid #787878;
    border-radius: 0.5rem;
    font-size: 1rem;
    padding: 0.5rem;
    resize: none;
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
    width: 50%;

    &:hover{
        transform: scale(1.05);
    }

    &:active{
        transform: scale(0.95);
    }
`;

export {
	FomrContainerStyled,
	TitleStyled,
	MaskedInputStyled,
	TextareaStyled,
	ButtonStyled
};