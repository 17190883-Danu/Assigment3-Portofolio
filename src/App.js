import React, { Component } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Awards from './pages/Awards';
import Experience from './pages/Experience';
import Interest from './pages/Interest';
import Skills from './pages/Skills';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Navbar/>
            <Routes>
                  <Route element={<Home/>} path="/"></Route>
                  <Route element={<About/>} path="/about"></Route>
                  <Route element={<Awards/>} path="/awards"></Route>
                  <Route element={<Experience/>} path="/experience"></Route>
                  <Route element={<Interest/>} path="/interest"></Route>
                  <Route element={<Skills/>} path="/skills"></Route>
          </Routes>  
    </Router>
    </div>
  );
}

export default App;
