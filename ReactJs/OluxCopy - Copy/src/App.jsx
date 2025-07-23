import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductListScreen from './screens/ProductListScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<ProductListScreen />} />
          <Route path="/product/:id" element={<ProductDetailScreen />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
