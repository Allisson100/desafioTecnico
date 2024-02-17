import styled from "styled-components";

const InfosCardContainerStyled = styled.div`
    align-items: center;
    display: flex;
    height: 50%;
    width: 100%;
`;

const ImagesContainerStyled = styled.div`
    border: 2px solid black;
    border-radius: 1rem;
    height: 100%;
    position: relative;
    width: 50%;
`;

const ImageBlurContainerStyled = styled.div`
    background-image: url(${props => props.$userImage});
    background-position: center;
    border-radius: 1rem;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(2px);
    height: 100%;
    width: 100%;
`;

const ImageStyled = styled.div`
    background-image: url(${props => props.$userImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 102%;
    left: calc((100% - 68%) / 2);
    position: absolute;
    top: -1%;
    width: 68%;
`;

const InfosContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    height: 50%;
    justify-content: center;
    padding: 0.5rem;
    width: 50%;

    h2 {
        color: ${props => props.theme.fontColors.tertiary};
        font-size: 1.2rem;
        font-weight: bold;
        text-transform: capitalize;
    }

    span:nth-of-type(1) {
        color: ${props => props.theme.fontColors.tertiary};
        font-size: 0.9rem;
        font-weight: bold;
    }

    span:nth-of-type(2) {
        color: ${props => props.theme.fontColors.quarternary};
        cursor: pointer;
        font-size: 0.8rem;
        font-weight: bold;
        text-decoration: underline;
    }

    span:nth-of-type(3) {
        color: ${props => props.theme.fontColors.tertiary};
        font-size: 1.1rem;
        font-weight: bold;
        margin-top: 0.5rem;
    }
`;

export {
	InfosCardContainerStyled,
	ImagesContainerStyled,
	ImageBlurContainerStyled,
	ImageStyled,
	InfosContainerStyled
};