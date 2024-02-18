import styled from "styled-components";

const FooterContainerStyled = styled.footer`
    align-items: center;
    background-color: ${props => props.theme.bgColors.secondary};
    color: ${props => props.theme.fontColors.main};
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    width: 100%;
`;

const PositionContainerStyled = styled.nav`
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 80%;

    svg {
        text-align: center;
        vertical-align: middle;
    }

    @media screen and (max-width: 1024px) {

        nav {
            display: none;
        }
    }

    @media screen and (max-width: 700px) {

    p {
        font-size: 0.8rem;
        text-align: center;
    }
}
`;

const ListContainerStyled = styled.ul`
    align-items: center;
    display: flex;
    gap: 1.5rem;
    justify-content: center;
`;

export {
	FooterContainerStyled,
	PositionContainerStyled,
	ListContainerStyled,
};