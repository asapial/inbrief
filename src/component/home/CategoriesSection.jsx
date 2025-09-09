"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaMicrochip, FaBriefcase, FaHeart, FaFlask, FaNewspaper } from "react-icons/fa";

export default function CategoriesOverview() {
  const categories = [
    { icon: <FaMicrochip size={28} />, name: "Technology" },
    { icon: <FaBriefcase size={28} />, name: "Business" },
    { icon: <FaHeart size={28} />, name: "Health" },
    { icon: <FaFlask size={28} />, name: "Science" },
    { icon: <FaNewspaper size={28} />, name: "Politics" },
    { icon: <FaGlobe size={28} />, name: "World" },
  ];

  return (
    <section className="py-20 max-w-6xl mx-auto px-6 text-center bg-gray-950 text-gray-100">
      <h2 className="text-3xl font-bold mb-12">Explore Categories</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-2xl p-6 shadow-lg flex flex-col items-center gap-3"
          >
            <div className="text-cyan-400">{cat.icon}</div>
            <h3 className="font-semibold text-lg">{cat.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
