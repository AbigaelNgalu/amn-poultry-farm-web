import React from "react";

export default function Testimonials() {
  const testimonials = [
    { name: "Fatuma", quote: "Best poultry products I’ve ever bought!" },
    { name: "James", quote: "Fresh and high quality every time." },
    { name: "Brenda", quote: "Fast delivery and excellent customer service." },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <p className="text-gray-700 mb-4">"{t.quote}"</p>
              <p className="font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
