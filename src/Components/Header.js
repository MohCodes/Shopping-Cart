
import { useEffect, useState } from 'react';

function Header() {


return (
    <div className="header">
        <nav className='navBar'>
            <div className='home navOption'> Home </div>
            <div className='products navOption'> Products </div>
            <div className='cart navOption'> Cart</div>

        </nav>
    </div>
);
}

export default Header;
