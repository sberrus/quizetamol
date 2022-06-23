import React, { useEffect, useState } from "react";

const Questionario = ({ preguntas = [], finTest = () => {} }) => {
	const [indice, setIndice] = useState(0);
	const [seleccion, setSeleccion] = useState(null);
	const [next, setNext] = useState(false);
	const [clean, setClean] = useState(true);
	const [totalPreguntas] = useState(() => {
		return preguntas.length;
	});

	useEffect(() => {
		const botones = document.querySelectorAll("input[type='radio']");

		botones.forEach((btn) => {
			btn.checked = false;
		});
	}, [clean]);

	const comprobarRespuesta = () => {
		if (preguntas[indice].resCorrecta === seleccion) {
			console.log("Respuesta Correcta");
			setNext(true);
			return;
		}
		console.log("respuesta incorrecta");
	};

	const siguiente = () => {
		if (totalPreguntas > indice + 1) {
			setIndice(indice + 1);
			setSeleccion(null);
			setNext(false);
			setClean(!clean);
			console.log(indice, totalPreguntas);
			return;
		}
		finTest();
	};

	return (
		<>
			{totalPreguntas > indice && (
				<div className="container">
					{/* Título */}
					<h5>{preguntas[indice].pregunta}</h5>
					<h5>
						<small>Indique la respuesta correcta:</small>
					</h5>

					{preguntas[indice].snippet && (
						<div className="w-100 mt-4">
							<img className="m-auto w-50" src={`./statics/snippets/${preguntas[indice].snippet}`} />
						</div>
					)}

					{/* Opciones */}
					{preguntas[indice].opciones.map((pregunta, index) => (
						<div className="form-check my-4" key={index}>
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
						<button className="btn btn-light" onClick={comprobarRespuesta}>
							Comprobar
						</button>
					)}
					{next && (
						<button className="btn btn-light" onClick={siguiente}>
							Siguiente
						</button>
					)}
				</div>
			)}
		</>
	);
};

export default Questionario;
