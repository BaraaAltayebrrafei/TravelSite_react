import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/pages/Home';
import Services from "./Components/pages/Services";
import Products from "./Components/pages/Products";
import SignUp from "./Components/pages/SignUp";

function App() {
  return (
    <>
      <React.StrictMode>
        <BrowserRouter>
          <Navbar />

          <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </>
  );
}

export default App;
