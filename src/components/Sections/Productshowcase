import React, { useState } from "react";
import Card from "../common/Card";
import { breedsData } from "../../data/breedsData";

const ProductShowcase = () => {
  const [selectedBreed, setSelectedBreed] = useState(null);

  return (
    <section id="products" className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
          Our Poultry Breeds
        </h2>
        <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
          Choose from our premium selection of layer, broiler, and dual-purpose chicks.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-300">
        {breedsData.map((breed) => (
          <Card
            key={breed.id}
            image={breed.images[0]}
            title={breed.name}
            description={`${breed.description.substring(0, 80)}...`}
            price={breed.ages[0].price}
            onClick={() => setSelectedBreed(breed)}
          />
        ))}
      </div>

      {/* Modal for Breed Details */}
      {selectedBreed && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm px-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl p-6 relative animate-fadeIn">
            <button
              onClick={() => setSelectedBreed(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-primary text-xl"
            >
              ✕
            </button>

            {/* Modal Content */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Images */}
              <div className="flex-1 flex gap-3 overflow-x-auto">
                {selectedBreed.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${selectedBreed.name}-${idx}`}
                    className="h-40 sm:h-48 lg:h-56 w-auto object-cover rounded-lg shadow-md"
                  />
                ))}
              </div>

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-primary mb-1">{selectedBreed.name}</h3>
                <p className="text-sm text-gray-500 italic mb-3">{selectedBreed.type}</p>
                <p className="text-gray-700 mb-4">{selectedBreed.description}</p>

                <h4 className="font-semibold text-lg mb-2 text-primary">Age & Price</h4>
                <ul className="space-y-1 mb-4">
                  {selectedBreed.ages.map((age, index) => (
                    <li
                      key={index}
                      className="flex justify-between text-sm text-gray-700 border-b py-1"
                    >
                      <span>{age.label}</span>
                      <span className="font-medium">{age.price}</span>
                    </li>
                  ))}
                </ul>

                <button className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductShowcase;
