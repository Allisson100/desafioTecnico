import { ButtonStyled, CardContainerStyled, CardWithButtonContainerStyled } from "./styles";
import { v4 as uuidv4 } from "uuid";
import html2canvas from "html2canvas";
import { useRef } from "react";

const CardWithButton = ({ 
	projectNumber, 
	buttonText = "download", 
	btWidth = "100%", 
	textTransform = "uppercase",
}) => {

	const cardRef = useRef(null);

	const handleDownload = () => {
		html2canvas(cardRef.current).then(canvas => {
			const imgData = canvas.toDataURL("image/png");
			const link = document.createElement("a");
			link.download = `screenshot-${uuidv4()}.png`;
			link.href = imgData;
			link.click();
		});
	};

	return (
		<CardWithButtonContainerStyled ref={cardRef}>
			<CardContainerStyled $projectNumber={projectNumber}>
				TESTE
			</CardContainerStyled>
			<ButtonStyled 
				onClick={handleDownload} 
				$btWidth={btWidth} 
				$textTransform={textTransform}
			>
				{buttonText}
			</ButtonStyled>
		</CardWithButtonContainerStyled>
		
	);
};

export default CardWithButton;