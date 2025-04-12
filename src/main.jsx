import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Navbar from './NavBar.jsx'
import Footer from './Footer.jsx'
import HomePage from './HomePage.jsx'
import ShopPage from './ShopPage.jsx';
import CartPage from './CartPage.jsx';
import ShopBuyPage from './ShopBuyPage.jsx';
import CheckoutPage from './CheckoutPage.jsx';
import { CartProvider } from './CartContext';
import Receipt from './receipt';


createRoot(document.getElementById('root')).render(
  <CartProvider>
  <StrictMode>
    <Router>
    <Navbar></Navbar>
    <Routes>
        <Route path="/3DIntros" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/ShopPageBuy/:id" element={<ShopBuyPage />} />
        <Route path="/CheckoutPage" element={<CheckoutPage />} />
        <Route path="/receipt" element={<Receipt />} />
      </Routes>
    <Footer></Footer>
    </Router>
  </StrictMode>
  </CartProvider>
)
