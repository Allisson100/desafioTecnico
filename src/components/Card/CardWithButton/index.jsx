import { ButtonStyled, CardContainerStyled, CardWithButtonContainerStyled } from "./styles";

const CardWithButton = ({ 
	children, 
	projectNumber, 
	buttonText, 
	handleFunction, 
	btWidth = "100%", 
	textTransform = "uppercase" 
}) => {
	return (
		<CardWithButtonContainerStyled>
			<CardContainerStyled $projectNumber={projectNumber}>
				{children}
			</CardContainerStyled>
			<ButtonStyled 
				onClick={handleFunction} 
				$btWidth={btWidth} 
				$textTransform={textTransform}
			>
				{buttonText}
			</ButtonStyled>
		</CardWithButtonContainerStyled>
		
	);
};

export default CardWithButton;