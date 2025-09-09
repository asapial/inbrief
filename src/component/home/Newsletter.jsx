"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaEnvelopeOpenText } from "react-icons/fa";

export default function Newsletter() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex justify-center items-center gap-2 text-cyan-600 dark:text-cyan-400 text-3xl font-bold">
            <FaEnvelopeOpenText /> Stay Informed
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg">
            Subscribe to get AI-curated news, insights, and updates directly in
            your inbox.
          </p>
        </motion.div>

        {/* Subscription Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 bg-white/70 dark:bg-gray-800/50 backdrop-blur-lg shadow-lg rounded-2xl p-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-800 dark:text-gray-200"
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow-lg hover:shadow-2xl transition-all"
          >
            Subscribe
          </motion.button>
        </motion.form>

        {/* Small Note */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          🔒 We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
