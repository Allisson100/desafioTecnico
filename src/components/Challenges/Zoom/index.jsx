import Card from "../../Card";
import imageHouse from "../../../assets/house.jpg";
import { ZoomContainerStyled } from "./styles";

const Zoom = () => {
	return (
		<Card projectNumber="6" noPadding>
			<ZoomContainerStyled $imageHouse={imageHouse}/>
		</Card>
	);
};

export default Zoom;