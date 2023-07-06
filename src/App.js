import React from "react";
import {Route, Switch} from "react-router-dom";
import './App.css';
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
    return (
        <div className="App">
            <switch>
                <Route path="/signup" Component={SignUp}/>
                <Route path="/login" Component={Login}/>
            </switch>
        </div>
    );
}

export default App;
