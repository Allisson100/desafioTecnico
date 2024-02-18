import { ButtonStyled, CardContainerStyled, CardImageStyled, ModalContainerStyled } from "./styles";
import imageHouse from "../../../assets/house.jpg";
import ModalImage from "./ModalImage";
import { useState } from "react";

const Modal = () => {

	const [showModal, setShowModal] = useState(false);

	const handleModal = () => {
		setShowModal((prevShowModal) => !prevShowModal);
	};

	return (
		<>
			{showModal && <ModalImage image={imageHouse} handleShowModal={handleModal} />}
			<ModalContainerStyled $projectNumber="4">
				<CardContainerStyled>
					<CardImageStyled $imageHouse={imageHouse} />
				</CardContainerStyled>
				<ButtonStyled onClick={handleModal}>
				abrir imagem no modal
				</ButtonStyled>
			</ModalContainerStyled>
		</>
        
	);
};

export default Modal;