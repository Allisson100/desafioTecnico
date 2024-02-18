import { useNavigate } from "react-router";
import { ImageStyled, LogoContainerStyled } from "./styles";

const Logo = () => {

	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate("/");
	};

	return (
		<LogoContainerStyled onClick={handleNavigate}>
			<ImageStyled 
				src="https://imovelguide.com.br/images/logo-imovel-guide.png" 
				alt="Logo da empresa Imóvel Guide" 
			/>
		</LogoContainerStyled>
	);
};

export default Logo;