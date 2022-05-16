import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import './App.css';
import Home from "./pages";
import About from "./pages/about";
import Map from "./pages/map";
import Stats from "./pages/stats";
import SignUp from "./pages/sign-up";
import SignIn from "./pages/sign-in";

function App() {

  return (
    <Router>
      <Navbar />
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/about" exact element={<About/>}/>
            <Route path="/map" exact element={<Map/>}/>
            <Route path="/stats" exact element={<Stats/>}/>
            <Route path="/sign-up" exact element={<SignUp/>}/>
            <Route path="/sign-in" exact element={<SignIn/>}/>
        </Routes>
    </Router>
  );
}

export default App;
