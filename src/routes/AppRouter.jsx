import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<Signup />} />
		</Routes>
	);
};

export default AppRouter;
