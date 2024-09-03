import React from 'react';
import Header from './DashHeader';
import Footer from './DashFooter';

const MenuPage = () => {
  return (
    <div className="page menu-page">
      <Header />
      
      <main className="main-content">
        <h1>Our Menu</h1>
        <section className="menu-content">
          <h2>Coffee</h2>
          <ul>
            <li>Espresso - $2.50</li>
            <li>Cappuccino - $3.50</li>
            <li>Latte - $3.75</li>
            <li>Americano - $3.00</li>
          </ul>
          
          <h2>Tea</h2>
          <ul>
            <li>Earl Grey - $2.75</li>
            <li>Green Tea - $2.75</li>
            <li>Chamomile - $2.75</li>
          </ul>
          
          <h2>Pastries</h2>
          <ul>
            <li>Croissant - $2.50</li>
            <li>Blueberry Muffin - $3.00</li>
            <li>Chocolate Chip Cookie - $2.00</li>
          </ul>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MenuPage;