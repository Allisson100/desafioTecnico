import styled from "styled-components";

const MenuContainerStyled = styled.header`
    background-color: ${props => props.theme.bgColors.secondary};
    position: relative;
    width: 100%;
`;

const NavContainerStyled = styled.nav`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2.5rem;
    width: 100%;

    svg {
        color: white;
        display: none;
        height: 50px;
        width: 50px;
    }

    @media screen and (max-width: 1024px) {

        padding: 1rem;

        svg {
            display: flex;
        }

        button {
            display: none;
        }

        div{
            display: none;
        }
    }
`;

const AllListsContainerStyled = styled.div`
    align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    padding: 0 3rem;
    width: 50%;

    @media screen and (min-width: 1024px) and (max-width: 1312px) {
        flex-direction: column;
        gap: 1rem;
    }
`;

const ListContainerStyled = styled.ul`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
`;

const ButtonMenuStyled = styled.button`
    background-color: ${props => props.theme.bgColors.secondary};
    border: 3px solid white;
    border-radius: 999999px;
    color: ${props => props.theme.fontColors.main};
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    text-align: center;
    text-transform: uppercase;
`;

export {
	MenuContainerStyled,
	NavContainerStyled,
	AllListsContainerStyled,
	ListContainerStyled,
	ButtonMenuStyled,
};