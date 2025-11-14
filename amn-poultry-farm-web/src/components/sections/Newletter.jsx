import React, { useState } from "react";
import Button from "../common/Button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section id="newsletter" className="bg-blue-600 text-white py-16">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
          Join the Nap Poultry Family
        </h2>
        <p className="text-base sm:text-lg mb-8 opacity-90">
          Subscribe to get updates on new chicken breeds, special farm offers,
          and poultry care tips straight to your inbox.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full sm:w-2/3 px-4 py-3 rounded-full text-gray-900 focus:outline-none"
            />
            <Button variant="primary" type="submit">
              Subscribe
            </Button>
          </form>
        ) : (
          <p className="mt-6 text-lg font-semibold text-yellow-300">
            🎉 Thank you for subscribing! We'll keep you updated.
          </p>
        )}

        <p className="mt-6 text-xs opacity-80">
          By subscribing, you agree to receive emails from Nap Poultry Farm.
        </p>
      </div>
    </section>
  );
}
