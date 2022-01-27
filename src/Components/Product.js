function Product(props) {
    return (  
        <div className="cardContainer">
            <img src= {props.productImage} alt = {props.productTitle} className="ProductImage">
                    
            </img>

            <div className="productTitle">
                    {props.productTitle}
            </div>

            <div className="priceContainer">

            <div className="productPrice">
                    {props.productPrice}
            </div>

            <div className="addToCart">
            <i onClick={props.addToCartItem} className="fas fa-cart-plus"></i>
            </div>

            </div>

        </div>
    );
}

export default Product;