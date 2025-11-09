import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Sections
import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import Newsletter from "./components/Sections/Newsletter";
import stats from "./components/Sections/stats";
import Testimonial from "./components/Sections/Testimonial";

// Common components (import only if needed globally)
import Modal from "./components/common/Modal";

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

      {/* Optional Global Modal */}
      {/* <Modal /> */}
    </div>
  );
}

export default App;
