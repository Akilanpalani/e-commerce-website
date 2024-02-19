import React, { useState } from 'react';
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
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
  };
  return (
    <Provider store={store}>
      <Router>
        <Navbar onSearchQueryChange={handleSearchQueryChange} />
        <Routes>
          <Route path='/' element={<HomePage searchQuery={searchQuery} />} />
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
