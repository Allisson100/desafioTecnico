import { useEffect, useState } from "react";
import Card from "../../Card";
import { ButtonStyled, CardPositionStyled, InputContainerStyled, InputStyled, ProportionContainerStyled, TitleStyled } from "./styles";
import mathProportion from "../../../utils/mathProportion";

const Proportion = () => {

	const [ result, setResult ] = useState(0);

	const [ allInput, setAllInputs ] = useState([
		"num1", "num2", "num3", "num4"
	]);

	const [inputsEnabled, setInputsEnabled] = useState({
		num1: true,
		num2: true,
		num3: true,
		num4: true
	});

	const [inputsPlaceholder, setInputsPlaceholder] = useState({
		num1: "Num1",
		num2: "Num2",
		num3: "Num3",
		num4: "Num4"
	});

	const [ num1, setNum1 ] = useState("");
	const [ num2, setNum2 ] = useState("");
	const [ num3, setNum3 ] = useState("");
	const [ num4, setNum4 ] = useState("");

	const handleChangeNum1 = (event) => {
		setNum1(event.target.value);
	};
	const handleChangeNum2 = (event) => {
		setNum2(event.target.value);
	};
	const handleChangeNum3 = (event) => {
		setNum3(event.target.value);
	};
	const handleChangeNum4 = (event) => {
		setNum4(event.target.value);
	};

	useEffect(() => {
		const inputs = [num1, num2, num3, num4];

		inputs.forEach((input, index) => {

			const inputName = `num${index + 1}`;

			if (input !== "" && allInput.includes(inputName)) {
				setAllInputs(prevInputs => prevInputs.filter(item => item !== inputName));
			} else if (input === "" && !allInput.includes(inputName)) {
				setAllInputs(prevInputs => [...prevInputs, inputName]);
			}
		});

		if (allInput.length === 1) {

			const lastInput = allInput[0];

			setInputsEnabled(prevState => ({
				...prevState,
				[lastInput]: false
			}));

			const result = mathProportion(num1, num2, num3, num4);

			setInputsPlaceholder(prevPlaceholder => ({
				...prevPlaceholder,
				[lastInput]: result
			}));

			setResult(result);

		} else {
			setInputsEnabled({
				num1: true,
				num2: true,
				num3: true,
				num4: true
			});

			setInputsPlaceholder({
				num1: "Num1",
				num2: "Num2",
				num3: "Num3",
				num4: "Num4"
			});

			setResult(0);
		}
	}, [num1, num2, num3, num4, allInput]);

	const handleShowResult = () => {
		if(result !== 0) {
			alert(`O resultado é ${result}`);
		}else {
			alert("Valores faltando no desafio 3!");
		}
	};
    
	return (
		<Card projectNumber="3">
			<CardPositionStyled>
				<TitleStyled>Regra de três</TitleStyled>
				<ProportionContainerStyled>
					<InputContainerStyled>
						<InputStyled 
							type="number"
							placeholder={inputsPlaceholder.num1}
							value={num1}
							onChange={handleChangeNum1}
							disabled={!inputsEnabled.num1}
						/>
						<span></span>
						<InputStyled 
							type="number"
							placeholder={inputsPlaceholder.num2}
							value={num2}
							onChange={handleChangeNum2}
							disabled={!inputsEnabled.num2}
						/>
					</InputContainerStyled>

					<InputContainerStyled>
						<InputStyled 
							type="number"
							placeholder={inputsPlaceholder.num3}
							value={num3}
							onChange={handleChangeNum3}
							disabled={!inputsEnabled.num3}
						/>
						<span></span>
						<InputStyled 
							type="number"
							placeholder={inputsPlaceholder.num4}
							value={num4}
							onChange={handleChangeNum4}
							disabled={!inputsEnabled.num4}
						/>
					</InputContainerStyled>
				</ProportionContainerStyled>
				<ButtonStyled onClick={handleShowResult}>Calcular</ButtonStyled>
			</CardPositionStyled>
		</Card>
	);
};

export default Proportion;