import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import CheckValidData from "../utils/Validate.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // ?---------------- toggling the SignUp/In form  --------------------------
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  // ? Refering ...email is nor valid or not ...(regex method)
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const [errorMessege, setErrorMessege] = useState(null);
  const handleButtonClick = () => {
    // CheckValidData(name,email,password);
    console.log(email.current.value);
    console.log(password.current.value);
    // console.log(name.current.value);

    const Messege = CheckValidData(
      // name.current.value,
      email.current.value,
      password.current.value
    );
    console.log(Messege);
    setErrorMessege(Messege);
    if (Messege) return;

    // Checking the signUp form
    if (!isSignInForm) {
      //? for SignUp
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          //* ---------------navigating using react router Dom if signout or in sign/up login page-------------------
          navigate("/");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessege(errorCode + "-" + errorMessage);
          // ..
        });
    }
    // Checking the SignIn form ...for SignIn Logic
    else {
      //? for SignIn logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // * ------------ navigating using react router Dom if User Successfully navigating ---------------------------
          navigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
          setErrorMessege("Enter Valid 'UserName' or 'Password' ");
        });
    }
  };

  return (
    <div className="relative">
      {/*------------------------------ Header------------------------------------------------------------ */}
      <Header />
      {/* --------------BG Netflix ------------------ */}
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg"
        />
      </div>
      {/*----------Login Form -------------  */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute py-8 rounded-lg w-[450px] flex flex-col justify-center top-8 mx-auto left-0 right-0 bg-[rgba(0,0,0,0.7)] "
      >
        <h1 className="p-1 my-3 flex w-[310px] flex-col justify-center mx-auto text-white text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <div className="formInfo  flex flex-col justify-center items-center">
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="text-white    p-3 py-4 my-2 w-[310px] bg-[rgba(22,22,22,0.7)] border border-gray-500 rounded placeholder-slate-300"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or phone number"
            className="text-white    p-3 py-4 my-2 w-[310px] bg-[rgba(22,22,22,0.7)] border border-gray-500 rounded placeholder-slate-300"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="text-white    p-3 py-4 my-2 w-[310px] bg-[rgba(22,22,22,0.7)]  border border-gray-500 rounded placeholder-slate-300"
          />
          <p className="text-red-500">{errorMessege}</p>
          <button
            onClick={handleButtonClick}
            className="m-2 p-2 w-[300px]  bg-red-600 rounded text-white font-semibold"
          >
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
