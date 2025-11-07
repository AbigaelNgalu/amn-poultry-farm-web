import React from "react";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import HeroSection from "./components/sections/Hero.jsx";
import StatsSection from "./components/sections/Stats.jsx";
import AboutSection from "./components/sections/JS About";
import ProductShowcase from "./components/sections/ProductShowcase";
import TestimonialsSection from "./components/sections/Testimonials";
import NewsletterSection from "./components/sections/Newsletter";

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50 text-gray-900">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ProductShowcase />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
