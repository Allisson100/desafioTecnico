import DownloadChallenge from "../../components/Challenges/DownloadChallenge";
import InputMaskChallenge from "../../components/Challenges/InputMaskChallenge";
import Modal from "../../components/Challenges/Modal";
import Proportion from "../../components/Challenges/Proportion";
import ShowNumberPhone from "../../components/Challenges/ShowNumberPhone";
import Zoom from "../../components/Challenges/Zoom";
import { HomeContainerStyled } from "./styles";

const Home = () => {
	return (
		<HomeContainerStyled>
			<ShowNumberPhone />
			<InputMaskChallenge />
			<Proportion />
			<Modal />
			<DownloadChallenge />
			<Zoom />
		</HomeContainerStyled>
	);
};

export default Home;