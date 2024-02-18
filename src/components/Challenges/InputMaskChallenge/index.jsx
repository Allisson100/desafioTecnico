import { useState } from "react";
import Card from "../../Card";
import { ButtonStyled, FomrContainerStyled, MaskedInputStyled, TextareaStyled, TitleStyled } from "./styles";

const InputMaskChallenge = () => {

	const [ cpf, setCpf ] = useState("");
	const [ phoneNumber, setPhoneNumber ] = useState("");
	const [ textarea, setTextarea ] = useState("");

	const handleCpfChange = (event) => {
		setCpf(event.target.value);
	};

	const handlePhoneNumberChange = (event) => {
		setPhoneNumber(event.target.value);
	};

	const handleTextareaChange = (event) => {
		setTextarea(event.target.value);
	};

	const handleButtonAlert = (event) => {

		event.preventDefault();
		
		//Necessário validar os campo antes do envio

		const cpfText = cpf === "" ? "Campo CPF vazio" : cpf;
		const phoneNumberText = phoneNumber === "" ? "Campo Telefone vazio" : phoneNumber;
		const textareaText = textarea === "" ? "Campo Assunto vazio" : textarea;

		alert(`CPF: ${cpfText}\nTelefone: ${phoneNumberText}\nAssunto:\n${textareaText}`);

		setCpf("");
		setPhoneNumber("");
		setTextarea("");
	};

	return (
		<Card projectNumber="2">
			<FomrContainerStyled>
				<TitleStyled>Mande uma mensagem:</TitleStyled>
				<MaskedInputStyled
					name="cpf" 
					mask={
						["(", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "-", /\d/, /\d/, ")"]
					}
					placeholder="Digite seu CPF"
					guide={true}
					onChange={handleCpfChange}
					value={cpf}
				/>
				<MaskedInputStyled 
					name="phoneNumber"
					mask={
						["(", /\d/, /\d/, ")","\u2000", /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]
					}
					placeholder="Digite seu telefone"
					guide={true}
					onChange={handlePhoneNumberChange}
					value={phoneNumber}
				/>
				<TextareaStyled 
					name="tex" 
					cols="30" 
					rows="6" 
					value={textarea}
					onChange={handleTextareaChange}
					placeholder="Digite o assunto"
				></TextareaStyled>
				<ButtonStyled type="submit" onClick={handleButtonAlert}>enviar mensagem</ButtonStyled>
			</FomrContainerStyled>
		</Card>
	);
};

export default InputMaskChallenge;