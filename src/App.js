import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import './App.css';
import Products from "./Components/Products.js"
import Home from "./Components/Home.js"
import { useEffect, useState } from 'react';

function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Products" element={<Products/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
