import React from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./pages/Login/Login";
import NavOptions from "./pages/NavOptions/NavOptions"
import SideBar from "./components/SideBar/SideBar";
import Clients from "./pages/Clients";


function App() {
  return (
    <Router>
      <div className="App">
        <SideBar />
        <Routes>
          <Route path="/" element = {<Clients/>}/>
        </Routes>
      </div>
      {/*<Login/>*/}
      {/*<NavOptions/>*/}
    </Router>
  );
}

export default App;
