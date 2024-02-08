import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./common/Navbar";
import HomePage from "./pages/HomePage";
import CarouselBanner from "./common/CarouselBanner";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <CarouselBanner />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
