import styled from "styled-components";

const CardImageStyled = styled.div`
    align-items: flex-end;
    background-image: url(${props => props.$imageHouse});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    height: 100%;
    justify-content: center;
    padding: 3rem;
    position: relative;
    width: 100%;
`;

const ButtonStyled = styled.button`
    background-color: ${props => props.theme.bgColors.main};
    border-radius: 0.5rem;
    color: ${props => props.theme.fontColors.main};
    font-size: 1.2rem;
    padding: 0.8rem;
    text-align: center;
    text-transform: uppercase;
    transition: 0.2s;
    width: 100%;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }
`;


export {
	CardImageStyled,
	ButtonStyled
};