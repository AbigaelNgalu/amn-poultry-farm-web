import React from "react";
import Button from "../common/Button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-32">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
          Fresh Poultry, Delivered With Care
        </h1>
        <p className="text-xl sm:text-2xl mb-8 opacity-90">
          High-quality poultry products for your farm and home.
        </p>
        <Button variant="primary" size="lg">
          Get Started
        </Button>
      </div>
    </section>
  );
}