import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";
import Home from "./pages/Home";
//import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
   <ToastContainer
        position="top-center"

        theme="light"
      />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
   </Router>
  );
}

export default App;

