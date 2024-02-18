import imageHouse from "../../../assets/house.jpg";
import ModalImage from "./ModalImage";
import CardButtonContainer from "../../Card/CardButtonContainer";
import CardContainer from "../../Card/CardContainer";
import { ButtonStyled, CardImageStyled } from "./styles";
import { useState } from "react";

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