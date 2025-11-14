import React from "react";

export default function Navigation({ children }) {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Nap Poultry Farm</div>
        <div className="flex gap-6">{children}</div>
      </div>
    </nav>
  );
}

