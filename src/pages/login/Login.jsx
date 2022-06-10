import React, { useState } from "react";
// import loginImg from "../../assets/login.jpg";
import InputField from "../../components/inputField/InputField";
import Validate from "../../helper/Validate";
import UseForm from "../../hooks/UseForm";

const Login = () => {
	const { handleChange, values, handleSubmit, errors } = UseForm(Validate);

	return (
		<div className="flex h-screen">
			<div className="basis-2/4 h-full bg-blend-darken">
				{/* <img src={loginImg} alt="login" className="object-cover h-full" /> */}
			</div>
			<div className="p-6 basis-2/4 h-screen flex items-center justify-center">
				<form id="form" className="w-96">
					<div className="">
						<h2 className="text-4xl text-left font-medium">Welcome back</h2>
						<p className="text-left tracking-wide font-lg font-extralight">
							Welcome back! Please enter your details
						</p>
					</div>

					<div className="mt-8">
						<InputField
							type="text"
							label="Username"
							name="username"
							id="username"
							value={values.username}
							onChange={handleChange}
							placeholder="Enter your username"
						/>
						<p>{errors.username}</p>
					</div>

					<div className="mt-8">
						<InputField
							type="password"
							label="Password"
							name="password"
							id="password"
							value={values.password}
							onChange={handleChange}
							placeholder="Enter your password"
						/>
						<p>{errors.password}</p>
					</div>

					<div className="flex justify-end mt-5">
						<a href="#">Forgot password</a>
					</div>

					<div className="mt-2">
						<button
							onClick={handleSubmit}
							className="w-full text-center font-semibold border rounded border-slate-800 py-2 hover:bg-slate-800 hover:text-white duration-200 ease-in-out transition-colors">
							Sign in{" "}
						</button>
					</div>

					<div className="mt-5 flex justify-center items-center">
						<p className="text-sm">Don't have an account?</p>
						<a href="#" className="font-semibold text-sm inline-block ml-1 ">
							Sign up for free
						</a>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
