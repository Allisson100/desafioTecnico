import { CardContainerStyled } from "./styles";

const Card = ({ children, projectNumber }) => {
	return (
		<CardContainerStyled
			$projectNumber={projectNumber}
		>   
			{children}
		</CardContainerStyled>
	);
};

export default Card;