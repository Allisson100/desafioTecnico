import LinkContainerStyled from "./styles";

const LinkMenu = ({ children, to }) => {

	return (
		<LinkContainerStyled
			to={to}
		>
			{children}
		</LinkContainerStyled>
	);
};

export default LinkMenu;