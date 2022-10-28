import React , {useState} from 'react';
import './App.css';
import Home from "./Components/Home";
import MainMenu from "./Components/MainMenu";
import Artists from './Components/Artists';
import Albums from './Components/Albums';
import Login from './Components/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
  <div className="App">
    <Home/>
    <Routes>
      <Route path="Home" element={<MainMenu/>}/>
      <Route path="Artists" element={<Artists/>}/>
      <Route path="Albums" element={<Albums/>}/>
    </Routes> 
    <div className="appBack"></div>
    </div>
  );
}

export default App;