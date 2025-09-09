"use client";
import React from "react";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-purple-900 via-indigo-900 to-gray-900 text-center text-gray-100">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-6"
      >
        Ready to Stay Ahead?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg opacity-80 mb-8 max-w-2xl mx-auto"
      >
        Join InBrief today and experience news like never before — clear, concise, and AI-powered.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow-lg hover:shadow-2xl transition-all"
      >
        Get Started Now
      </motion.button>
    </section>
  );
}
