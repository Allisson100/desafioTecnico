import Card from "../../Card";
import InfosCard from "./InfosCard";
import { ShowNumberPhoneContainerStyled } from "./styles";

import userImage01 from "../../../assets/mulherVerrmelho.jpg";
import userImage02 from "../../../assets/homemChapeu.jpg";

const ShowNumberPhone = () => {
	return (
		<Card projectNumber="1">
			<ShowNumberPhoneContainerStyled>
				<InfosCard 
					userImage={userImage01} 
					username="nome corretora" 
					numberPoints="3.000"
					phoneNumber="(99) 4002-8922"
				/>
				<InfosCard 
					userImage={userImage02} 
					username="nome corretor" 
					numberPoints="1.260"
					phoneNumber="(99) 12345-6789"
				/>
			</ShowNumberPhoneContainerStyled>
		</Card>
	);
};

export default ShowNumberPhone;