import { CardContainerStyled, CardStyled, NumberStyled } from "./styles";

const Card = ({ children, projectNumber, noPadding }) => {
	
	return (
		<CardContainerStyled>
			<NumberStyled>{projectNumber}</NumberStyled>
			<CardStyled
				$noPadding={noPadding}
			> 
				{children}
			</CardStyled>
		</CardContainerStyled>
		
	);
};

export default Card;