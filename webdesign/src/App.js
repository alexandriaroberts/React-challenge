import React from "react";
import Header from "./components/Header.js";
import HeroSection from "./components/HeroSection.js";
import CardArea from "./components/CardArea.js";
import AboutArea from "./components/AboutArea.js";

import Footer from "./components/Footer.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <CardArea />
      <AboutArea />
      <Footer />
    </div>
  );
}

export default App;
