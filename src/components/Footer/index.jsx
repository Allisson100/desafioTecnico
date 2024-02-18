import Logo from "../Logo";
import LinkMenu from "../LinkMenu";
import { FaRegCopyright } from "react-icons/fa6";
import { FooterContainerStyled, ListContainerStyled, PositionContainerStyled } from "./styles";

const Footer = () => {
	return (
		<FooterContainerStyled>
			<PositionContainerStyled>
				<nav>
					<ListContainerStyled>
						<LinkMenu to="/">termos</LinkMenu>
						<LinkMenu to="/">contatos</LinkMenu>
						<LinkMenu to="/">sobre</LinkMenu>
					</ListContainerStyled>
				</nav>
				<p><FaRegCopyright /> Copyright 2022.  Todos os direitos reservados.</p>
			</PositionContainerStyled>
			<Logo />
		</FooterContainerStyled>
	);
};

export default Footer;