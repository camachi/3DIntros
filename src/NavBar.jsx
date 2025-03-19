import React from 'react';
import { Link } from "react-router-dom";
import cart from "./fotos/cart.png";
<style>
    
</style>
const Navbar = () => {
  return (
    <nav>
      <h1>Camachi<span className='colorP'>VFX. </span></h1>
      
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/cart"><img className='cartLogo' src={cart}></img></Link></li>
      </ul> 
    </nav>
  );
};

export default Navbar;