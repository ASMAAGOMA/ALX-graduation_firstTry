import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Public';
import AboutPage from './components/About';
import ContactPage from './components/Contact';
import MenuPage from './components/MenuPage';
import OrderNowPage from './components/OrderNowPage';
import Login from './features/auth/Login';
import DashLayout from './components/DashLAyout';
import ProductsPage from './features/products/ProductPage';

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="menu/:category" element={<ProductsPage />} />
        <Route path="/order" element={<OrderNowPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dash" element={<DashLayout />} />
      </Route>
    </Routes>
  );
}

export default App;