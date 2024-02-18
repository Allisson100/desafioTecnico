const mathProportion = (num1, num2, num3, num4) => {

	let result;

	switch ("") {
	case num1:
		result = num2 * (num3 / num4);
		break;
	case num2:
		result = num1 * (num4 / num3);
		break;
	case num3:
		result = (num1 * num4) / num2;
		break;
	case num4:
		result = (num2 * num3) / num1;
		break;
	default:
		return "Nenhum valor é zero.";
	}

	return result;
};

export default mathProportion;