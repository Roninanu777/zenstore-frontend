import React, { useState } from "react";
import { Button, Label, TextInput, Checkbox, Card } from "flowbite-react";
import InputField from "../../components/inputField/InputField";
import Validate from "../../helper/Validate";
import UseForm from "../../hooks/UseForm";

const Login = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

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
              onChange={handleChange}
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              shadow={true}
              required={true}
            />
          </div>

          <div className="flex flex-col mb-6">
            <Label className="self-start mb-2 text-base" htmlFor="password">
              Password
            </Label>
            <TextInput
              id="password"
              type="password"
              placeholder="password"
              shadow={true}
              required={true}
            />
          </div>

          <div className="flex items-center mb-6 space-x-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree">
              I agree with the{" "}
              <a
                href="/forms"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
            </Label>
          </div>

          <div className="flex mt-2">
            <Button color="dark" size="md" className="flex-grow">
              Sign in
            </Button>
          </div>

          <div className="flex items-center mt-5 space-x-1">
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
