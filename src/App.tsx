import React from "react";
import "./App.css";
import ContextBar from "./Components/Structural/ContextBar";
import Footer from "Components/Structural/Footer";
import BottomBar from "Components/Structural/BottomBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage";
import HowitworksPage from "pages/Howitworks";
import Contact from "pages/Contact";
import WaitlistPage from "pages/WaitList";

function App() {
  return (
    <Router>
      <ContextBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/howitworks" element={<HowitworksPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wishlist" element={<WaitlistPage />} />
      </Routes>
      <Footer />
      <BottomBar />
    </Router>
  );
}

export default App;
