import React from 'react';
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import carrito from "./fotos/cart.png";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <nav>
      <h1>Camachi<span className='colorP'>VFX. </span></h1>
      
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/cart"><img className='cartLogo' src={carrito}></img>{cart.length > 0 && (<span className="cart-count">{cart.length}</span>)}</Link></li>
      </ul> 
    </nav>
  );
};

export default Navbar;