import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';
import Navbar from './common/Navbar';
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';
import Footer from './common/Footer';
import CategoryPage from './components/CategoryPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:id' element={<ProductDetails />} />
          <Route path='/category/:name' element={<CategoryPage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
