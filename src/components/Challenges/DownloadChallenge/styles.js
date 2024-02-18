import styled from "styled-components";

const DownloadChallengeContainerStyled = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 500px;
    justify-content: space-between;
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

const CardContainerStyled = styled.div`
    width: 100%;
    border: 2px solid black;
    border-radius: 1rem;
    height: 420px;
    overflow: hidden;
`;

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

const CardTextStyled = styled.div`
    width: 100%;
    padding: 1rem;
    text-transform: capitalize;
    text-align: center;
    background-color: ${props => props.theme.bgColors.main};
    color: ${props => props.theme.fontColors.main};
    border-radius: 0.5rem;
    filter: opacity(0.9);
`;

const ButtonStyled = styled.button`
    background-color: ${props => props.theme.bgColors.main};
    border-radius: 0.5rem;
    color: ${props => props.theme.fontColors.main};
    font-size: 1.2rem;
    padding: 0.8rem;
    text-align: center;
    text-transform: capitalize;
    transition: 0.2s;
    width: 60%;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }
`;

export {
	DownloadChallengeContainerStyled,
	CardContainerStyled,
	CardImageStyled,
	CardTextStyled,
	ButtonStyled,
};