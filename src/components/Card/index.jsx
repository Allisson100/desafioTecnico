import { CardContainerStyled } from "./styles";

const Card = ({ children, projectNumber, noPadding }) => {
	return (
		<CardContainerStyled
			$projectNumber={projectNumber}
			$noPadding={noPadding}
		>   
			{children}
		</CardContainerStyled>
	);
};

export default Card;