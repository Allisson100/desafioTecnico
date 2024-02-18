import styled, { keyframes } from "styled-components";

const zoomAnimation = keyframes`
    0% {
        transform: scale(2.0);
    }
    100% {
        transform: scale(1);
    }
`;

const ZoomContainerStyled = styled.div`
    animation: ${zoomAnimation} 10s infinite;
    background-image: url(${props => props.$imageHouse});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 1rem;
    height: 100%;
    overflow: hidden;
    transform-origin: center;
    width: 100%;
`;


export {
	ZoomContainerStyled,
};