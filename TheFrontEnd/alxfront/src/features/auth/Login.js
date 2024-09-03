import React from 'react';
import Header from '/root/ALX-graduation_firstTry/TheFrontEnd/alxfront/src/components/DashHeader';
import Footer from '/root/ALX-graduation_firstTry/TheFrontEnd/alxfront/src/components/DashFooter';

const Login = () => {
  return (
    <div className="page login-page">
      <Header />
      
      <main className="main-content">
        <h1>Login</h1>
        {/* Your login form goes here */}
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;