import { CardContainerStyledStyled } from "./styles";

const CardContainer = ({ children }) => {
	return (
		<CardContainerStyledStyled>
			{children}
		</CardContainerStyledStyled>
	);
};

export default CardContainer;