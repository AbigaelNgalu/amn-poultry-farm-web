import React from "react";

const Footer = () => (
  <footer className="bg-dark text-gray-300 py-10">
    <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-xl font-bold text-white mb-4">FarmFresh Poultry</h3>
        <p>Your trusted source for organic poultry products.</p>
      </div>
      <div>
        <h4 className="font-semibold text-white mb-3">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-white mb-3">Contact</h4>
        <p>📍 123 Farm Road, Greenfield</p>
        <p>📞 +123 456 7890</p>
        <p>✉️ support@farmfresh.com</p>
      </div>
      <div className="md:text-right">
        <p className="opacity-80 text-sm">
          © 2025 FarmFresh Poultry. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
