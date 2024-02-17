import { Outlet } from "react-router-dom";
import Menu from "../Menu";
import { DefaultPageContainer } from "./styles";

const DefaultPage = () => {
	return (
		<DefaultPageContainer>
			<Menu />
			<Outlet />
		</DefaultPageContainer>
	);
};

export default DefaultPage;