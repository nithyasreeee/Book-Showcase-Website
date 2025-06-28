// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import CategoryPage from './pages/Categorypage';
import AboutUs from './pages/AboutUs';
import UserProfile from './pages/UserProfile';
import NotFound from './pages/NotFound';

function App() {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/category/:genre" element={<CategoryPage />} />
        
        <Route path="/about" element={<AboutUs />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
