import { useRef } from "react";
import { ButtonStyled, CardImageStyled, CardTextStyled } from "./styles";
import { v4 as uuidv4 } from "uuid";
import html2canvas from "html2canvas";
import imageHouse from "../../../assets/house.jpg";
import CardButtonContainer from "../../Card/CardButtonContainer";
import CardContainer from "../../Card/CardContainer";

const DownloadChallenge = () => {

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
		<CardButtonContainer projectNumber="5">
			<CardContainer>
				<CardImageStyled  ref={cardRef} $imageHouse={imageHouse}>
					<CardTextStyled>
						imovel guide
					</CardTextStyled>
				</CardImageStyled>
			</CardContainer>
			<ButtonStyled onClick={handleDownload}>
				download
			</ButtonStyled>
		</CardButtonContainer>
	);
};

export default DownloadChallenge;