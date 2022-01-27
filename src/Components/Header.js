
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';


function Header(props) {


return (
    <div className="header">
        <nav className='navBar'>
            <Link to = "/" className='home navOption'> Home </Link>
            <Link to = "/Products" className='products navOption'> Products </Link>
            <Link to = "/Cart" className='cart navOption'> Cart {props.totalItems}</Link>

        </nav>
    </div>
);
}

export default Header;
