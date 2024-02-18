import Card from "../../components/Card";
import DownloadChallenge from "../../components/Challenges/DownloadChallenge";
import Modal from "../../components/Challenges/Modal";
import ShowNumberPhone from "../../components/Challenges/ShowNumberPhone";
import Zoom from "../../components/Challenges/Zoom";
import { HomeContainerStyled } from "./styles";

const Home = () => {
	return (
		<HomeContainerStyled>
			<ShowNumberPhone />



			<Card projectNumber="2">
				<h1>Mascara</h1>
			</Card>
			<Card projectNumber="3">
				<h1>regra3</h1>
			</Card>

			{/* <CardWithButton projectNumber="4" buttonText="Abrir imagem no modal">
				<h1>modal</h1>
			</CardWithButton> */}

			<Modal />
			<DownloadChallenge />
			<Zoom />

		</HomeContainerStyled>
	);
};

export default Home;