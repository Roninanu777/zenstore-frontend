import React from "react";
import loginImg from "../../assets/login.jpg";

const Login = () => {
	return (
		<div className="flex h-screen">
			<div className="basis-2/4 h-full bg-blend-darken">
				<img src={loginImg} alt="login" className="object-cover h-full" />
			</div>
			<div className="p-6 basis-2/4 h-screen flex items-center justify-center">
				<form id="form">
					<div className="form-heading-block">
						<h2>Welcome back</h2>
						<p>Welcome back! Please enter your details</p>
					</div>

					<div className="form-sub-block">
						<label htmlFor="email">Email</label>
						<input type="text" id="email" placeholder="Enter your email" />
					</div>

					<div className="form-sub-block">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" placeholder="Enter your password" />
					</div>

					<div className="forgot-pass-btn-block">
						<div className="checkbox-block">
							<input type="checkbox" id="days1" value="30days" />
							<label htmlFor="days1">Remember for 30 days</label>
						</div>
						<a href="#">Forgot password</a>
					</div>

					<div className="btns-block">
						<button className="sign-in-btn">Sign in </button>
						<button className="google-sign-in">Sign in with Google</button>
					</div>

					<div className="register-block">
						<p>Don't have an account?</p>
						<a href="#">Sign up for free</a>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
