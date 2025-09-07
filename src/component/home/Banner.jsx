"use client";

import { motion } from "framer-motion";
import { FaRegNewspaper } from "react-icons/fa";
import { Button } from "../ui/Button";


export default function Banner() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      {/* Background Decorative Blur Circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="container relative z-10 text-center px-6">
        {/* Icon with animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center mb-6"
        >
          <FaRegNewspaper className="text-6xl text-cyan-400 drop-shadow-lg" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-xl"
        >
          InBrief – Smarter News, Simplified
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Personalized AI-curated news feed with smart summaries, sentiment
          insights, and keyword highlights – helping you understand the world in
          minutes.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button className="px-8 py-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 ease-out hover:scale-105">
            Get Started
          </Button>
          <Button className="px-8 py-6 rounded-2xl border border-gray-500/50 bg-gray-800/40 backdrop-blur-md text-lg font-semibold hover:bg-gray-700/50 hover:border-cyan-400 shadow-md transition-all duration-300 ease-out">
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
