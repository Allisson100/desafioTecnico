import { IconContainerStyled, ImageContainerStyled, ModalImageContainerStyled, OverlayStyled } from "./styles";
import { IoMdClose } from "react-icons/io";

const ModalImage = ({ image, handleShowModal }) => {
	return (
		<>
			<OverlayStyled />
			<ModalImageContainerStyled>
				<IconContainerStyled><IoMdClose onClick={handleShowModal}/></IconContainerStyled>
				<ImageContainerStyled $image={image} />
			</ModalImageContainerStyled>
		</>
	);
};

export default ModalImage;