import { useState } from "react";
import { ImageBlurContainerStyled, ImageStyled, ImagesContainerStyled, InfosCardContainerStyled, InfosContainerStyled } from "./styles";

const InfosCard = ({ userImage, username, numberPoints, phoneNumber }) => {

	const [ showPhoneNumber, setShowPhoneNumber ] = useState(false);

	const handlePhoneNumber = () => {
		setShowPhoneNumber((prevNumber) => !prevNumber);
	};

	return (
		<InfosCardContainerStyled>
			<ImagesContainerStyled>
				<ImageBlurContainerStyled $userImage={userImage}/>
				<ImageStyled $userImage={userImage}/>
			</ImagesContainerStyled>
			
			<InfosContainerStyled>
				<h2>{username}</h2>
				<span>{numberPoints} pontos</span>
				{showPhoneNumber ? 
					<span onClick={handlePhoneNumber}>esconder telefone</span> :
					<span onClick={handlePhoneNumber}>ver telefone</span>
				}
				{/* <span onClick={handlePhoneNumber}>ver telefone</span> */}
				{showPhoneNumber && <span>{phoneNumber}</span>}
			</InfosContainerStyled>
		</InfosCardContainerStyled>
	);
};

export default InfosCard;