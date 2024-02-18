import styled from "styled-components";

const OverlayStyled = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    bottom: 0;
    height: 100%;
    left: 0;
    overflow: hidden;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 5;
`;

const ModalImageContainerStyled = styled.div`
    align-items: center;
    background-color: ${props => props.theme.bgColors.tertiary};
    border-radius: 1rem;
    display: flex;
    height: 70%;
    justify-content: center;
    position: absolute;
    top: 15%;
    width: 80%;
    z-index: 10;

    &::before {
        background-color: ${props => props.theme.bgColors.quarternary};
        content: '';
        height: 3px;
        left: 0;
        position: absolute;
        top: 90px;
        width: 100%;

        @media screen and (max-width: 600px) {
            top: 50px;
        }
    }

    @media screen and (max-width: 600px) {
        height: 14%;
        top: 42%;
    }

    @media screen and (min-width: 600px) and (max-width: 935px)  {
        height: 20%;
        top: 40%;
    }

    @media screen and (min-width: 935px) and (max-width: 1387px)  {
        height: 40%;
        top: 30%;
    }
`;

const IconContainerStyled = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 0.5rem;
    position: absolute;
    right: 0;
    top: 0;

    svg {
        color: red;
        cursor: pointer;
        height: 50px;
        transition: 0.2s;
        width: 50px;

        &:hover{
            transform: scale(1.05);
        }

        &:active{
            transform: scale(0.95);
        }

        @media screen and (max-width: 600px) {
            height: 40px;
            width: 40px;
        }
    }
`;

const ImageContainerStyled = styled.div`
    background-image: url(${props => props.$image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 1rem;
    height: 65%;
    margin-top: 5rem;
    width: 80%;

    @media screen and (max-width: 600px) {
        margin-top: 3rem;
    }
`;

export {
	OverlayStyled,
	ModalImageContainerStyled,
	IconContainerStyled,
	ImageContainerStyled
};