import React, { useEffect, useState } from 'react';
import Header from "./Header";
import Product from "./Product";




function Products() {

    const [fakeInfo,setFakeInfo]= useState([])
    const [displayInfo,setDisplayInfo]=useState(false)


    async function productInformationCall(){
        const fetchAPI = await fetch(`https://fakestoreapi.com/products`)
        const jsonAPICall = await fetchAPI.json()
        setFakeInfo(jsonAPICall)
        setDisplayInfo(true)
        console.log(jsonAPICall[0])
        console.log(fakeInfo)
    }

    useEffect(()=>{
        productInformationCall()
    },[])




    return (  
        <div>
        <Header></Header>


        <div >
        
            {displayInfo?
            <div className="productsContainer">
            <Product    
                    productImage={fakeInfo[0].image}
                    productTitle={fakeInfo[0].title}
                    productPrice={`$${fakeInfo[0].price}`}
            ></Product>

            <Product    
                    productImage={fakeInfo[1].image}
                    productTitle={fakeInfo[1].title}
                    productPrice={`$${fakeInfo[1].price}`}
            ></Product>

            <Product    
                    productImage={fakeInfo[2].image}
                    productTitle={fakeInfo[2].title}
                    productPrice={`$${fakeInfo[2].price}`}
            ></Product>

            <Product    
                    productImage={fakeInfo[3].image}
                    productTitle={fakeInfo[3].title}
                    productPrice={`$${fakeInfo[3].price}`}
            ></Product>

            <Product    
                    productImage={fakeInfo[4].image}
                    productTitle={fakeInfo[4].title}
                    productPrice={`$${fakeInfo[4].price}`}
            ></Product>

            <Product    
                    productImage={fakeInfo[5].image}
                    productTitle={fakeInfo[5].title}
                    productPrice={`$${fakeInfo[5].price}`}
            ></Product>

            <Product    
                    productImage={fakeInfo[6].image}
                    productTitle={fakeInfo[6].title}
                    productPrice={`$${fakeInfo[6].price}`}
            ></Product>

            <Product    
                    productImage={fakeInfo[7].image}
                    productTitle={fakeInfo[7].title}
                    productPrice={`$${fakeInfo[7].price}`}
            ></Product>

            <Product    
                    productImage={fakeInfo[8].image}
                    productTitle={fakeInfo[8].title}
                    productPrice={`$${fakeInfo[8].price}`}
            ></Product>

            <Product    
                    productImage={fakeInfo[9].image}
                    productTitle={fakeInfo[9].title}
                    productPrice={`$${fakeInfo[9].price}`}
            ></Product>


<Product    
                    productImage={fakeInfo[10].image}
                    productTitle={fakeInfo[10].title}
                    productPrice={`$${fakeInfo[10].price}`}
            ></Product>

            <Product    
                    productImage={fakeInfo[11].image}
                    productTitle={fakeInfo[11].title}
                    productPrice={`$${fakeInfo[11].price}`}
            ></Product>

            <Product    
                    productImage={fakeInfo[12].image}
                    productTitle={fakeInfo[12].title}
                    productPrice={`$${fakeInfo[12].price}`}
            ></Product>

            <Product    
                    productImage={fakeInfo[13].image}
                    productTitle={fakeInfo[13].title}
                    productPrice={`$${fakeInfo[13].price}`}
            ></Product>

            <Product    
                    productImage={fakeInfo[14].image}
                    productTitle={fakeInfo[14].title}
                    productPrice={`$${fakeInfo[14].price}`}
            ></Product>

            <Product    
                    productImage={fakeInfo[15].image}
                    productTitle={fakeInfo[15].title}
                    productPrice={`$${fakeInfo[15].price}`}
            ></Product>

            <Product    
                    productImage={fakeInfo[16].image}
                    productTitle={fakeInfo[16].title}
                    productPrice={`$${fakeInfo[16].price}`}
            ></Product>

            <Product    
                    productImage={fakeInfo[17].image}
                    productTitle={fakeInfo[17].title}
                    productPrice={`$${fakeInfo[17].price}`}
            ></Product>

            <Product    
                    productImage={fakeInfo[18].image}
                    productTitle={fakeInfo[18].title}
                    productPrice={`$${fakeInfo[18].price}`}
            ></Product>

            <Product    
                    productImage={fakeInfo[19].image}
                    productTitle={fakeInfo[19].title}
                    productPrice={`$${fakeInfo[19].price}`}
            ></Product>
            </div>
                
            : 
            <div>loading...</div>
            }
        </div>

        </div>
    
    );
}

export default Products
