import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import StatsSection from "./components/sections/StatsSection";
import AboutSection from "./components/sections/AboutSection";
import ProductShowcase from "./components/sections/ProductShowcase";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import NewsletterSection from "./components/sections/NewsletterSection";

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
