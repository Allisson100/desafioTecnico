import styled from "styled-components";

const ListMobileContainerStyled = styled.ul`
    align-items: center;
    background-color: ${props => props.theme.bgColors.secondary};
    display: ${props => props.$isOpen ? "flex" : "none"};
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    padding: 1rem;
    position: absolute;
    right: 0;
    top: 70px;
    width: 50%;
    z-index: 10;

    @media screen and (min-width: 1025px) {
        display: none;
    }
`;

export {
	ListMobileContainerStyled,
};