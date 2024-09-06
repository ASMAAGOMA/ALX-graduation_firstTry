import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Public';
import AboutPage from './components/About';
import ContactPage from './components/Contact';
import MenuPage from './components/MenuPage';
import OrderNowPage from './components/OrderNowPage';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import ProductsPage from './features/products/ProductPage';
import RequireAuth from './components/RequireAuth';
import FavoriteProducts from './components/FavoriteProducts';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/menu/:category" element={<ProductsPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<RequireAuth />}>
        <Route path="/order" element={<OrderNowPage />} />
        <Route path="/favorites" element={<FavoriteProducts />} />
      </Route>
    </Routes>
  );
}

export default App;