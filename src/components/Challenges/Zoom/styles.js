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
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    overflow: hidden;
    background-image: url(${props => props.$imageHouse});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transform-origin: center;
    animation: ${zoomAnimation} 10s infinite;
`;


export {
	ZoomContainerStyled,
};