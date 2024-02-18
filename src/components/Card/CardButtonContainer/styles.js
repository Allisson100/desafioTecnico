import styled from "styled-components";

const CardButtonContainerStyled = styled.div`
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

export {
	CardButtonContainerStyled
};