import React, { useState } from "react";
import FinQuestionario from "./FinQuestionario";
import Questionario from "./Questionario";

const Quiz = () => {
	const preguntas = [
		{
			pregunta: "¿Cuales de estos grupos de datos son primitivos?",
			opciones: [
				"a) String - Number - Boolean - Undefined - Null - Symbol",
				"b) String - Number - Boolean - Undefined - Array - Symbol",
				"c) String - Number - Boolean - Tuple - Array - Object",
				"d) Ninguna de las anteriores",
			],
			resCorrecta: 0,
		},
		{
			pregunta: "¿Qué imprime el siguiente código?",
			snippet: "q2.png",
			opciones: [
				"a) [1, 33, 9, -2]",
				"b) [boolean, 33, 9, string]",
				"c) [null, 33, 9, null]",
				"d) [undefined, 33, 9, undefined]",
			],
			resCorrecta: 0,
		},
		{
			pregunta: "¿Qué imprime el siguiente código?",
			snippet: "q3.png",
			opciones: [
				"a) Uncaught TypeError : cannot read property",
				"b) TypeError: null is not an object (evaluating)",
				"c) Naranja",
				"d) Pera",
			],
			resCorrecta: 3,
		},
	];

	const [completado, setCompletado] = useState(false);

	const finTest = () => {
		setCompletado(true);
		console.log("hola");
	};

	return <>{!completado ? <Questionario preguntas={preguntas} finTest={finTest} /> : <FinQuestionario />}</>;
};

export default Quiz;
