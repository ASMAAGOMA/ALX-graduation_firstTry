import React from 'react';
import Header from './DashHeader';
import Footer from './DashFooter';
import ProductsList from '../features/products/ProductsList';

const MenuPage = () => {
  return (
    <div className="page menu-page">
      <Header />
        <ProductsList />
      <Footer />
    </div>
  );
};

export default MenuPage;