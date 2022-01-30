import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import './App.css';
import Products from "./Components/Products.js"
import Home from "./Components/Home.js"
import { useEffect, useState } from 'react';


function App() {

  const [totalCartItems,setTotalCartItems] = useState(0)
  const [itemsInCart,setItemsInCart] = useState([])
  const [fakeInfo,setFakeInfo]= useState([])



  async function productInformationCall(){
    const fetchAPI = await fetch(`https://fakestoreapi.com/products`)
    const jsonAPICall = await fetchAPI.json()
    setFakeInfo(jsonAPICall)
    console.log(fakeInfo)
}

useEffect(()=>{
    productInformationCall()
},[])

  const addItemToCart = (e)=>{
    const idOfItem = e.target.parentNode.parentNode.parentNode.id
    setItemsInCart(itemsInCart=>[...itemsInCart,fakeInfo[idOfItem]])
    setTotalCartItems(totalCartItems+1)
    console.log(itemsInCart)

  }


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home totalItems2 = {`(${totalCartItems})`}/>}/>
          <Route path="/Products" element={<Products addToCartItems={addItemToCart} totalItems2 = {`(${totalCartItems})`}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
