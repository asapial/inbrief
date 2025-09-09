"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    { name: "Sophia Williams", role: "Journalist", text: "InBrief saves me hours every day with accurate AI summaries." },
    { name: "David Chen", role: "Reader", text: "I finally understand complex news in simple language. Brilliant!" },
    { name: "Maria Lopez", role: "Editor", text: "The AI-curated feed keeps me updated without endless scrolling." },
  ];

  return (
    <section className="py-20 px-6 bg-gray-900 text-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12">What Readers Say</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-2xl p-6 shadow-lg"
          >
            <FaQuoteLeft className="text-cyan-400 text-2xl mb-3" />
            <p className="text-gray-300 mb-4">"{t.text}"</p>
            <h3 className="font-semibold">{t.name}</h3>
            <p className="text-sm text-gray-400">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
