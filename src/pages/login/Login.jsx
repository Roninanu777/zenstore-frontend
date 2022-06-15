import React, { useState } from "react";
import { Button, Label, TextInput, Checkbox, Card } from "flowbite-react";
import InputField from "../../components/inputField/InputField";
import { LoginForm } from "../../hooks/UseForm";
import { loginValidate } from "../../helper/Validate";

const Login = () => {
  const { handleChange, values, handleSubmit, errors } =
    LoginForm(loginValidate);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="mb-5 text-3xl font-semibold">Welcome back!</h1>
      <Card>
        <form id="form" className="w-96">
          <div className="flex flex-col mb-6">
            <Label className="self-start mb-2 text-base" htmlFor="email1">
              Your email
            </Label>
            <TextInput
              id="email1"
              type="email"
              value={values.email}
              onChange={handleChange}
              placeholder="name@flowbite.com"
              shadow={true}
              required={true}
              name="email"
              helperText={
                <p className="text-xs text-left text-red-600">{errors.email}</p>
              }
            />
          </div>

          <div className="flex flex-col mb-6">
            <Label className="self-start mb-2 text-base" htmlFor="password">
              Password
            </Label>
            <TextInput
              id="password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="password"
              shadow={true}
              required={true}
              helperText={
                <React.Fragment>
                  <span className="text-sm font-semibold text-left text-red-600">
                    {""}
                    {errors.password}
                  </span>
                </React.Fragment>
              }
            />
          </div>

          <div className="flex items-center mb-6 space-x-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree">Remember me</Label>
          </div>

          <div className="flex mt-2">
            <Button
              color="dark"
              size="md"
              className="flex-grow"
              onClick={handleSubmit}
            >
              Sign in
            </Button>
          </div>

          <div className="flex justify-center mt-5 space-x-1">
            <p className="text-sm">Don't have an account?</p>
            <a href="/signup" className="inline-block text-sm font-semibold ">
              Sign up for free
            </a>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
