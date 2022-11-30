import React from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginReg from "./pages/auth/LoginReg";
import ResetPassword from "./pages/auth/ResetPassword";
import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { useSelector } from "react-redux";
import Inicio from "./pages/Inicio/Inicio";
import Sector from "./pages/Sector/Sector";

function App() {
  const { access_token } = useSelector(state => state.auth)
  return(
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={!access_token ? <LoginReg /> : <Navigate to="/inicio" />} />
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="api/user/reset/:id/:token" element={<ResetPassword />} />
          </Route>
          <Route path="/inicio" element={access_token ? <Inicio /> : <Navigate to="/login" />} />
          <Route path="*" element={<h1>!!! Em implementação !!!</h1>} />
          <Route path="/Sector" element={<Sector />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
