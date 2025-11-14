import React from "react";
import Navigation from "./components/layout/Navigation";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Features from "./components/sections/Features";
import Productshowcase from "./components/sections/Productshowcase";
import Newsletter from "./components/sections/Newsletter";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <Navigation>
        <a href="#hero" className="hover:text-blue-600 transition">Home</a>
        <a href="#features" className="hover:text-blue-600 transition">Features</a>
        <a href="#breeds" className="hover:text-blue-600 transition">Breeds</a>
        <a href="#newsletter" className="hover:text-blue-600 transition">Newsletter</a>
      </Navigation>

      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Features */}
        <section id="features">
          <Features />
        </section>

        {/* Product Showcase / Breeds */}
        <section id="breeds" className="py-16 bg-gray-100">
          <ProductShowcase />
        </section>

        {/* Newsletter */}
        <section id="newsletter">
          <Newsletter />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

