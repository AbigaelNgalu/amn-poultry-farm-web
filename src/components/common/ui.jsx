// src/components/common/ui.jsx

import React from 'react';

export const BuyNowButton = ({ onClick, label = "Buy Now" }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: '#ff9800',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        fontWeight: 'bold',
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  );
};

