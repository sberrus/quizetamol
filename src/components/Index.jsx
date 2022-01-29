import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
	const [usuario, setUsuario] = useState("");

	const navigate = useNavigate();

	const empezarTest = (e) => {
		e.preventDefault();
		//Crear instancia de participación

		if (!usuario) {
			return console.error("El nombre de usuario no es válido");
		}

		const usuarioActual = {
			usuario,
			answers: [],
		};
		localStorage.setItem("usuarioActual", JSON.stringify(usuarioActual));

		//redirect
		navigate("/quiz");
	};
	return (
		<div className="container h-50 d-flex align-items-center">
			{/* formulario */}
			<div className="col-6 m-auto">
				<form id="formulario" onSubmit={empezarTest}>
					<div className="mb-3">
						<label htmlFor="nombreInput" className="form-label">
							Nombre de usuario
						</label>
						<input
							type="text"
							className="form-control"
							id="nombreInput"
							aria-describedby="emailHelp"
							onChange={(e) => {
								setUsuario(e.target.value);
							}}
							value={usuario}
						/>
					</div>
					<div className="d-flex justify-content-end">
						<button type="submit" className="btn btn-primary" id="botonEmpezar">
							Empezar Test &gt;
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Index;
