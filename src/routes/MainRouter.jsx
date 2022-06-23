import React from "react";
import { Routes, Route } from "react-router-dom";

//Components
import Index from "../components/Index";
import Quiz from "../components/questionario/Quiz";
import Header from "../components/_partials/Header";

//ProtectedRoute
import ProtectedRoute from "./ProtectedRoute";

const MainRouter = () => {
	return (
		<div className="vh-100">
			<Header />
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/quiz" element={<ProtectedRoute component={Quiz} />} />
			</Routes>
		</div>
	);
};

export default MainRouter;
