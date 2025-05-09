// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import PurchaseSuccess from './pages/PurchaseSuccess/PurchaseSuccess';
import MyBookings from './pages/MyBookings/MyBookings';
import './styles/global.css';
import { Web3Provider } from './context/Web3Context';
import Credits from './pages/Credits/Credits';
import BottomNavbar from './components/BottomNavbar/BottomNavbar';

const App = () => {
  return (
    <Web3Provider>
      <div className="app">
        <Navbar />
        <BottomNavbar />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/purchase-success" element={<PurchaseSuccess />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            <Route path="/credits" element={<Credits />} />
          </Routes>
        </main>
      </div>
    </Web3Provider>
  );
};

export default App;