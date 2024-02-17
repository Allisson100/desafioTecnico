import Logo from "../Logo";
import LinkMenu from "./LinkMenu";
import { 
	AllListsContainerStyled, 
	ButtonMenuStyled, 
	ListContainerStyled, 
	MenuContainerStyled, 
	NavContainerStyled 
} from "./styles";
import MenuMobile from "./MenuMobile";

const Menu = () => {
	return (
		<MenuContainerStyled>
			<NavContainerStyled>
				
				<Logo />
				<MenuMobile />

				<AllListsContainerStyled>
					<ListContainerStyled>
						<LinkMenu to="/">condomínios</LinkMenu>
						<LinkMenu to="/">fórum</LinkMenu>
						<LinkMenu to="/">guia</LinkMenu>
						<LinkMenu to="/">artigos</LinkMenu>
						<LinkMenu to="/">ferramentas</LinkMenu>
					</ListContainerStyled>
					<ListContainerStyled>
						<LinkMenu to="/">cotar imóvel</LinkMenu>
						<LinkMenu to="/">planos</LinkMenu>
						<LinkMenu to="/">entrar</LinkMenu>
					</ListContainerStyled>
				</AllListsContainerStyled>

				<ButtonMenuStyled>cadastra-se</ButtonMenuStyled>
			</NavContainerStyled>
		</MenuContainerStyled>
	);
};

export default Menu;