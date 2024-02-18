import { ButtonStyled, CardImageStyled } from "./styles";
import imageHouse from "../../../assets/house.jpg";
import ModalImage from "./ModalImage";
import { useState } from "react";
import CardButtonContainer from "../../Card/CardButtonContainer";
import CardContainer from "../../Card/CardContainer";

const Modal = () => {

	const [showModal, setShowModal] = useState(false);

	const handleModal = () => {
		setShowModal((prevShowModal) => !prevShowModal);
	};

	return (
		<>
			{showModal && <ModalImage image={imageHouse} handleShowModal={handleModal} />}
			<CardButtonContainer projectNumber="4">
				<CardContainer>
					<CardImageStyled $imageHouse={imageHouse} />
				</CardContainer>
				<ButtonStyled onClick={handleModal}>
				abrir imagem no modal
				</ButtonStyled>
			</CardButtonContainer>
		</>
        
	);
};

export default Modal;