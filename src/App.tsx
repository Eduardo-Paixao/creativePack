import React from "react";
import Routes from "./routes";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthContextProvider } from "./contexts/AuthContext";
function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes />
        <ToastContainer limit={3} transition={Slide} />
      </AuthContextProvider>
    </>
  );
}

export default App;
