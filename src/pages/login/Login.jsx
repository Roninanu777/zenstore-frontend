import React, { useState } from "react";
import InputField from "../../components/inputField/InputField";
import Validate from "../../helper/Validate";
import UseForm from "../../hooks/UseForm";

const Login = () => {
  const { handleChange, values, handleSubmit, errors } = UseForm(Validate);

  return (
    <div className="flex h-screen">
      <div className="h-full basis-2/4 bg-blend-darken"></div>
      <div className="flex items-center justify-center h-screen p-6 basis-2/4">
        <form id="form" className="w-96">
          <div className="">
            <h2 className="text-4xl font-medium text-left">Welcome back</h2>
            <p className="tracking-wide text-left font-lg font-extralight">
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
              className="w-full py-2 font-semibold text-center transition-colors duration-200 ease-in-out border rounded border-slate-800 hover:bg-slate-800 hover:text-white"
            >
              Sign in{" "}
            </button>
          </div>

          <div className="flex items-center justify-center mt-5">
            <p className="text-sm">Don't have an account?</p>
            <a href="#" className="inline-block ml-1 text-sm font-semibold ">
              Sign up for free
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
