import Menu from "../Menu";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import { DefaultPageContainer } from "./styles";

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