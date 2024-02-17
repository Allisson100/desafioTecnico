import { IoMdMenu } from "react-icons/io";
import LinkMenu from "../LinkMenu";
import { useState } from "react";
import { ListMobileContainerStyled } from "./styles";
import { IoMdClose } from "react-icons/io";

const MenuMobile = () => {

	const [ isOpen, setIsOpen ] = useState(false);

	const hadleOpenMenu = () => {
		setIsOpen((prevOpen) => !prevOpen);
	};

	return (
		<>

			{!isOpen ?
				<IoMdMenu 
					onClick={hadleOpenMenu}
				/> :
				<IoMdClose 
					onClick={hadleOpenMenu}
				/>
			}
			
			<ListMobileContainerStyled
				$isOpen={isOpen}
			>   
				<LinkMenu to="/">condomínios</LinkMenu>
				<LinkMenu to="/">fórum</LinkMenu>
				<LinkMenu to="/">guia</LinkMenu>
				<LinkMenu to="/">artigos</LinkMenu>
				<LinkMenu to="/">ferramentas</LinkMenu>
				<LinkMenu to="/">cotar imóvel</LinkMenu>
				<LinkMenu to="/">planos</LinkMenu>
				<LinkMenu to="/">entrar</LinkMenu>
				<LinkMenu to="/">cadastre-se</LinkMenu>
			</ListMobileContainerStyled>
		</>
        
	);
};

export default MenuMobile;