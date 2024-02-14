import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './common/Navbar';
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';
import Footer from './common/Footer';
import CategoryPage from './components/CategoryPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:id' element={<ProductDetails />} />
        <Route path='/category/:name' element={<CategoryPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
