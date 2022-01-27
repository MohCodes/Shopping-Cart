import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./Components/Header.js"
import Home from "./Components/Home.js"
import { useEffect, useState } from 'react';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
