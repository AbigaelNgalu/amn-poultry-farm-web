import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Sections
import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import Newsletter from "./components/Sections/Newsletter";
import Stats from "./components/Sections/stats";
import Testimonial from "./components/Sections/Testimonial";


// Common Components (optional imports if used inside sections)
import Modal from "./components/common/Modal";
import Button from "./components/common/Button";
import Card from "./components/common/Card";
import iu from "./components/common/ui";

import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Stats />
        <Testimonial />
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Modal example (optional) */}
      {/* <Modal /> */}
    </div>
  );
}

export default App;

