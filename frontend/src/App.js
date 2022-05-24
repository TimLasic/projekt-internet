import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./pages";
import About from "./pages/about";
import Map from "./pages/map";
import Stats from "./pages/stats";
import SignUp from "./pages/sign-up";
import SignIn from "./pages/sign-in";
import {UserContext} from "./userContext";
import { useState, useEffect } from 'react';
import SignOut from "./pages/sign-out";

function App() {
    const [user, setUser] = useState(localStorage.user ? JSON.parse(localStorage.user) : null);
    const updateUserData = (userInfo) => {
        localStorage.setItem("user", JSON.stringify(userInfo));
        setUser(userInfo);
    }
    return (
        <Router>
            <UserContext.Provider value={{
                user: user,
                setUserContext: updateUserData
            }}>
                <Navbar/>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/about" exact element={<About/>}/>
                    <Route path="/map" exact element={<Map/>}/>
                    <Route path="/stats" exact element={<Stats/>}/>
                    <Route path="/sign-up" exact element={<SignUp/>}/>
                    <Route path="/sign-in" exact element={<SignIn/>}/>
                    <Route path="/sign-out" element={<SignOut/>}/>
                </Routes>
            </UserContext.Provider>
        </Router>
    );
}

export default App;
