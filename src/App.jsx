import React from "react";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import HeroSection from "./components/Sections/Hero.jsx";
import StatsSection from "./components/Sections/stats.jsx";
import AboutSection from "./components/Sections/About";
import ProductShowcase from "./components/Sections/Productshowcase";
import NewsletterSection from "./components/Sections/Newsletter";
import TestimonialsSection from "./components/Sections/Testimonials";

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
