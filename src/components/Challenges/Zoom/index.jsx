import Card from "../../Card";
import { ZoomContainerStyled } from "./styles";
import imageHouse from "../../../assets/house.jpg";

const Zoom = () => {
	return (
		<Card projectNumber="6" noPadding>
			<ZoomContainerStyled $imageHouse={imageHouse}/>
		</Card>
	);
};

export default Zoom;