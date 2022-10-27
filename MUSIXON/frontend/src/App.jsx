import React from 'react';
import './App.css';
import LeftSidebar from "./Components/LeftSidebar";
import MainMenu from "./Components/MainMenu";
import RightSidebar from './Components/RightSidebar';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <LeftSidebar />
    <MainMenu />
    <RightSidebar />
    <div className="appBack"></div>
    </div>
  );
}

export default App;