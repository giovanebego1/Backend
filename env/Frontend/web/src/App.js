import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Sector from "./pages/Sector/Sector";
import AI from "./pages/AI/AI";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

function App() {
  return(
    <div className="App">
     <Router>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/AI" element={<AI />}/>
            <Route path="/Sector" element={<Sector />}/>
            {/*<Route path="/Login" element={<Login />}/>
            <Route path="/Logout" element={<Navigate to={<Login />} />}/>*/}
          </Routes>
      </Router>
    </div>
  );
}

export default App;
