import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Navbar from './NavBar.jsx'
import Footer from './Footer.jsx'
import HomePage from './HomePage.jsx'
import ShopPage from './ShopPage.jsx';
import CartPage from './CartPage.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    <Footer></Footer>
    </Router>
  </StrictMode>,
)
