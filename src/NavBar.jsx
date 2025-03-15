import React from 'react';
import { Link } from "react-router-dom";

<style>
    
</style>
const Navbar = () => {
  return (
    <nav>
      <h1>Camachi<span className='colorP'>VFX.</span></h1>
      
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul> 
    </nav>
  );
};

export default Navbar;