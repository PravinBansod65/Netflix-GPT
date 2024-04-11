// import logo from './logo.svg';
import "./App.css";
import React, { Component, useState } from "react";
import "./index.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

// !--------------------------------------

const App = () => {
  return (
    <>
      <div className="App bg-slate-600 font-bold text-slate-300">
        Hello! Silent Coder!😊 , lets build NetflixGPT ~
      </div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </>
  );
};

export default App;

// !--------------------------------------
