import React, { useState } from "react";
import { Button, Label, TextInput, Card } from "flowbite-react";
import { SignupForm } from "../../hooks/UseForm";
import { signupValidate } from "../../helper/Validate";

const Signup = () => {
	const { handleChange, values, handleSubmit, errors } = SignupForm(signupValidate);

	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen">
			<h1 className="mb-5 text-3xl font-semibold">Welcome</h1>
			<Card>
				<form id="form" className="w-96">
					<div className="flex flex-col mb-6">
						<Label className="self-start mb-2 text-base" htmlFor="username">
							Enter a username
						</Label>
						<TextInput
							id="username"
							type="text"
							value={values.username}
							onChange={handleChange}
							placeholder="johndoe123"
							shadow={true}
							required={true}
							helperText={
								<React.Fragment>
									<span className="text-sm text-red-600 font-semibold">
										{errors.username}
									</span>
								</React.Fragment>
							}
						/>
					</div>
					<div className="flex flex-col mb-6">
						<Label className="self-start mb-2 text-base" htmlFor="email1">
							Enter your email
						</Label>
						<TextInput
							id="email1"
							type="email"
							value={values.email}
							onChange={handleChange}
							placeholder="name@flowbite.com"
							shadow={true}
							required={true}
							helperText={
								<React.Fragment>
									<span className="text-sm text-red-600 font-semibold">
										{errors.email}
									</span>
								</React.Fragment>
							}
						/>
					</div>

					<div className="flex flex-col mb-6">
						<Label className="self-start mb-2 text-base" htmlFor="password">
							Choose your password
						</Label>
						<TextInput
							id="password"
							type="password"
							value={values.password}
							onChange={handleChange}
							placeholder="password"
							shadow={true}
							required={true}
							helperText={
								<React.Fragment>
									<span className="text-sm text-left font-semibold text-red-600">
										{""}
										{errors.password}
									</span>
								</React.Fragment>
							}
						/>
					</div>

					<div className="flex mt-2">
						<Button color="dark" size="md" className="flex-grow" onClick={handleSubmit}>
							Sign up
						</Button>
					</div>

					<div className="flex justify-center mt-5 space-x-1">
						<p className="text-sm">Already have an account?</p>
						<a href="/signup" className="inline-block text-sm font-semibold ">
							Sign in
						</a>
					</div>
				</form>
			</Card>
		</div>
	);
};

export default Signup;
