import React from "react";

const Card = ({ img, name, price }) => (
  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 text-center">
    <img src={img} alt={name} className="rounded-xl mb-4 h-40 w-full object-cover" />
    <h3 className="font-semibold text-lg">{name}</h3>
    <p className="text-sm text-gray-500">{price}</p>
  </div>
);

export default Card;
