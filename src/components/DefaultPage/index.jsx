import { Outlet } from "react-router-dom";
import Menu from "../Menu";
import { DefaultPageContainer } from "./styles";
import Footer from "../Footer";

const DefaultPage = () => {
	return (
		<DefaultPageContainer>
			<Menu />
			<Outlet />
			<Footer />
		</DefaultPageContainer>
	);
};

export default DefaultPage;