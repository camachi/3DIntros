import React from 'react';
import { Link } from "react-router-dom";
<style>
    
</style>
const Navbar = () => {
  return (
    <nav>
      <h1><span className='colorP'>3D</span>Intros.</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul> 
    </nav>
  );
};

export default Navbar;