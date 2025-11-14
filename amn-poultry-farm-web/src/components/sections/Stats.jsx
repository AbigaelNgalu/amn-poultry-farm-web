import React from "react";

export default function Stats() {
  const stats = [
    { label: "Happy Customers", value: "1,200+" },
    { label: "Products Sold", value: "15,000+" },
    { label: "Years of Experience", value: "10+" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <p className="text-3xl font-bold mb-2">{stat.value}</p>
              <p className="text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}