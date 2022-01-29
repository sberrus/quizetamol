import React, { useEffect, useState } from "react";

const Quiz = () => {
	const [indice, setIndice] = useState(0);
	const [seleccion, setSeleccion] = useState(null);
	const [next, setNext] = useState(false);
	const [clean, setClean] = useState(true);

	useEffect(() => {
		const botones = document.querySelectorAll("input[type='radio']");

		botones.forEach((btn) => {
			btn.checked = false;
		});
	}, [clean]);

	const preguntas = [
		{ pregunta: "¿Que es el espacio?", opciones: ["Opcion 1", "Opcion 2", "Opcion 3", "Opcion 4"], resCorrecta: 1 },
		{
			pregunta: "¿Que es el espacio? 1",
			opciones: ["Opcion 1", "Opcion 2", "Opcion 3", "Opcion 4"],
			resCorrecta: 1,
		},
		{
			pregunta: "¿Que es el espacio? 2",
			opciones: ["Opcion 1", "Opcion 2", "Opcion 3", "Opcion 4"],
			resCorrecta: 1,
		},
		{
			pregunta: "¿Que es el espacio? 3",
			opciones: ["Opcion 1", "Opcion 2", "Opcion 3", "Opcion 4"],
			resCorrecta: 1,
		},
		{
			pregunta: "¿Que es el espacio? 4",
			opciones: ["Opcion 1", "Opcion 2", "Opcion 3", "Opcion 4"],
			resCorrecta: 1,
		},
		{
			pregunta: "¿Que es el espacio? 5",
			opciones: ["Opcion 1", "Opcion 2", "Opcion 3", "Opcion 4"],
			resCorrecta: 1,
		},
		{
			pregunta: "¿Que es el espacio? 6",
			opciones: ["Opcion 1", "Opcion 2", "Opcion 3", "Opcion 4"],
			resCorrecta: 1,
		},
		{
			pregunta: "¿Que es el espacio? 7",
			opciones: ["Opcion 1", "Opcion 2", "Opcion 3", "Opcion 4"],
			resCorrecta: 1,
		},
	];

	const comprobarRespuesta = () => {
		if (preguntas[indice].resCorrecta === seleccion) {
			console.log("Respuesta Correcta");
			setNext(true);
			return;
		}
		console.log("respuesta incorrecta");
	};

	const siguientePregunta = () => {
		setIndice(indice + 1);
		setSeleccion(null);
		setNext(false);
		setClean(!clean);
	};

	return (
		<div className="container">
			{/* Título */}
			<h5>{preguntas[indice].pregunta}</h5>

			{/* Opciones */}
			{preguntas[indice].opciones.map((pregunta, index) => (
				<div className="form-check mt-3" key={index}>
					<input
						className="form-check-input"
						type="radio"
						name="answer"
						id={`answer${index}`}
						onClick={() => {
							setSeleccion(index);
						}}
					/>
					<label className="form-check-label" htmlFor={`answer${index}`}>
						{pregunta}
					</label>
				</div>
			))}
			{!next && (
				<button className="btn btn-dark" onClick={comprobarRespuesta}>
					Comprobar
				</button>
			)}
			{next && (
				<button className="btn btn-dark" onClick={siguientePregunta}>
					Siguiente
				</button>
			)}
		</div>
	);
};

export default Quiz;
