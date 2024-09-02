import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Public';
import AboutPage from './components/About';
import ContactPage from './components/Contact';
import Login from './features/auth/Login';
import DashLayout from './components/DashLAyout';

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="login" element={<Login />} />
        <Route path="dash" element={<DashLayout />}>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;