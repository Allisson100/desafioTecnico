import { useRef } from "react";
import { ButtonStyled, CardContainerStyled, DownloadChallengeContainerStyled, CardImageStyled, CardTextStyled } from "./styles";
import html2canvas from "html2canvas";
import { v4 as uuidv4 } from "uuid";
import imageHouse from "../../../assets/house.jpg";

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
		<DownloadChallengeContainerStyled $projectNumber="5">
			<CardContainerStyled>
				<CardImageStyled  ref={cardRef} $imageHouse={imageHouse}>
					<CardTextStyled>
						imovel guide
					</CardTextStyled>
				</CardImageStyled>
			</CardContainerStyled>
			<ButtonStyled onClick={handleDownload}>
				download
			</ButtonStyled>
		</DownloadChallengeContainerStyled>
	);
};

export default DownloadChallenge;