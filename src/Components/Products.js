import React, { useEffect, useState } from 'react';
import Header from "./Header";
import Product from "./Product";




function Products(props) {

    const [fakeInfo,setFakeInfo]= useState([])
    const [displayInfo,setDisplayInfo]=useState(false)


    async function productInformationCall(){
        const fetchAPI = await fetch(`https://fakestoreapi.com/products`)
        const jsonAPICall = await fetchAPI.json()
        setFakeInfo(jsonAPICall)
        setDisplayInfo(true)
    }

    useEffect(()=>{
        productInformationCall()
    },[])

    let filteredArray = fakeInfo.filter(item=> item.id<21)

    let ItemOutput = filteredArray.map(item => <Product key = {item.id}
                                                    idValue = {item.id-1}
                                                    productImage={item.image}
                                                    productTitle={item.title}
                                                    productPrice={`$${item.price}`}
                                                    addToCartItem = {props.addToCartItems}
                                                ></Product>)


    return (  
        
        <div>
        <Header totalItems = {props.totalItems2}></Header>


        <div >
        
            {displayInfo?
            <div className="productsContainer">
                {ItemOutput}
            </div>
            
            : 
            <div>loading...</div>
            }
        </div>

        </div>
    
    );
}

export default Products
