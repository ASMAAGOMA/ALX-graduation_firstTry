import React from 'react';
import Header from './DashHeader';
import Footer from './DashFooter';

const OrderPage = () => {
  return (
    <div className="page order-page">
      <Header />
      
      <main className="main-content">
        <h1>Order Now</h1>
        <p>This page is under construction. Our online ordering system will be available soon!</p>
      </main>
      
      <Footer />
    </div>
  );
};

export default OrderPage;