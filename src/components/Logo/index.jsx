import { useNavigate } from "react-router";
import { ImageStyled } from "./styles";

const Logo = () => {

	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate("/");
	};

	return (
		<h1 onClick={handleNavigate}>
			<ImageStyled 
				src="https://imovelguide.com.br/images/logo-imovel-guide.png" 
				alt="Logo da empresa Imóvel Guide" 
			/>
		</h1>
	);
};

export default Logo;