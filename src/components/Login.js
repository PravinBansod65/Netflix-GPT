import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative">
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg"
        />
      </div>
      <form className="absolute py-8 rounded-lg w-[450px] flex flex-col justify-center top-8 mx-auto left-0 right-0 bg-[rgba(0,0,0,0.7)] ">
        <h1 className="p-1 my-3 flex w-[310px] flex-col justify-center mx-auto text-white text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <div className="formInfo  flex flex-col justify-center items-center">
          {!isSignInForm && <input
            type="text"
            placeholder="Full Name"
            className="text-white    p-3 py-4 my-2 w-[310px] bg-[rgba(22,22,22,0.7)] border border-gray-500 rounded placeholder-slate-300"
          />}
          <input
            type="text"
            placeholder="Email or phone number"
            className="text-white    p-3 py-4 my-2 w-[310px] bg-[rgba(22,22,22,0.7)] border border-gray-500 rounded placeholder-slate-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="text-white    p-3 py-4 my-2 w-[310px] bg-[rgba(22,22,22,0.7)]  border border-gray-500 rounded placeholder-slate-300"
          />
          <button className="m-2 p-2 w-[300px]  bg-red-600 rounded text-white font-semibold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-white font-semibold py-4">Forgot password?</p>
        </div>
        <p className="py-3 text-gray-300 mx-auto" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix?" : "Already a customer! "}
          <span className="text-white font-bold cursor-pointer">
            {" "}
            {isSignInForm ? "Sign Up" : "Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
