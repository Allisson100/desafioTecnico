import styled from "styled-components";

const OverlayStyled = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 5;
    overflow: hidden;
`;

const ModalImageContainerStyled = styled.div`
    width: 80%;
    height: 70%;
    top: 15%;
    background-color: ${props => props.theme.bgColors.tertiary};
    position: absolute;
    z-index: 10;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        content: '';
        width: 100%;
        height: 3px;
        background-color: ${props => props.theme.bgColors.quarternary};
        position: absolute;
        top: 90px;
        left: 0;

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
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    position: absolute;
    right: 0;
    top: 0;

    svg {
        width: 50px;
        height: 50px;
        color: red;
        cursor: pointer;
        transition: 0.2s;

        &:hover{
            transform: scale(1.05);
        }

        &:active{
            transform: scale(0.95);
        }

        @media screen and (max-width: 600px) {
            width: 40px;
            height: 40px;
        }
    }
`;

const ImageContainerStyled = styled.div`
    width: 80%;
    height: 65%;
    background-image: url(${props => props.$image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 1rem;
    margin-top: 5rem;

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