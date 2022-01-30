import Header from "./Header";
import uniqid from 'uniqid';


function Cart(props) {


    let items = props.Itemsa.filter((item,index)=>props.Itemsa.indexOf(item)===index).map(item => <div   key = {uniqid()} 
                                                className="itemContainer" id={item.title}>
                                                
                                                <img src={item.image} alt={item.title} className="cartItemPicture"/>
                                                <div className="cartItemName">{item.title}</div>
                                                <div className="cartQuantityContainer">
                                                    <div className="minusQuantity">-</div>
                                                    <div className="quantityAmount">{props.Itemsa.filter((x)=>(x===item)).length}</div>
                                                    <div className="addQuantity">+</div>
                                                </div>
                                                <div className="costOfItem">
                                                {`$${(props.Itemsa.filter((x)=>(x===item)).length)*item.price}`}
                                                </div>

                                            
                                            
                                            
                                        </div>)

    return (  

        <div className="cartContainer">
            <Header totalItems = {props.totalItems2}></Header>
            <div className="cartContentContainer">
            {items}

                <div className="checkOutContainer">

                </div>

            </div>

        </div>
    );
}

export default Cart;