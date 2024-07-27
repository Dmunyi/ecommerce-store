// client/src/components/Header.js
import React, { useContext } from 'react';
import { FontAwesomeIcon }
    from '@fortawesome/react-fontawesome'
import { faCartShopping }
    from '@fortawesome/free-solid-svg-icons'
import { itemContext } from '../context/ItemContext';

const Navbar = () => {

    const { itemsInCart, totalPrice } = useContext(itemContext);

    return (
        <nav className='navbar'>
            <div className='navbar-brand'>
                <h1 className='ecom'>
                    My Ecommerce Website
                </h1>
            </div>
            <div className='navbar-items'>
                <h3 style={{ color: "green" }}>
                    Total Price: {totalPrice}
                </h3>
                <div className='cart-num'>
                    <FontAwesomeIcon
                        icon={faCartShopping} size="2x" />
                    <div className='cart-items'>
                        {itemsInCart}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
