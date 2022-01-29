import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component }) => {
	const usuarioActual = localStorage.getItem("usuarioActual");
	return usuarioActual ? <Component /> : <Navigate to="/" />;
};

export default ProtectedRoute;
