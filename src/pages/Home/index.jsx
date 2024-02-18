import Card from "../../components/Card";
import DownloadChallenge from "../../components/Challenges/DownloadChallenge";
import InputMaskChallenge from "../../components/Challenges/InputMaskChallenge";
import Modal from "../../components/Challenges/Modal";
import ShowNumberPhone from "../../components/Challenges/ShowNumberPhone";
import Zoom from "../../components/Challenges/Zoom";
import { HomeContainerStyled } from "./styles";

const Home = () => {
	return (
		<HomeContainerStyled>
			<ShowNumberPhone />
			<InputMaskChallenge />

			<Card projectNumber="3">
				<h1>regra3</h1>
			</Card>

			<Modal />
			<DownloadChallenge />
			<Zoom />

		</HomeContainerStyled>
	);
};

export default Home;