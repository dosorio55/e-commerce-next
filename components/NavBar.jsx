import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import Cart from './Cart';
import { handleStateContext } from '../context/StateContext';

const NavBar = () => {

  const { showCart, setShowCart, cartState: { totalQuantities } } = handleStateContext();

  return (
    <div className="navbar-container">
      <div className='navbar-link'>

        <Link href="/">
          <p className="logo">
            Home
          </p>
        </Link>
      </div>

      <button className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  )
}

export default NavBar