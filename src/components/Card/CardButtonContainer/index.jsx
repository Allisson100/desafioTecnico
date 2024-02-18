import { CardButtonContainerStyled } from "./styles";

const CardButtonContainer = ({ children, projectNumber }) => {
	return (
		<CardButtonContainerStyled $projectNumber={projectNumber}>
			{children}
		</CardButtonContainerStyled>
	);
};

export default CardButtonContainer;