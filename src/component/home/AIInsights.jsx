"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaChartLine, FaLightbulb } from "react-icons/fa";

export default function AIInsights() {
  const insights = [
    { icon: <FaBrain size={28} />, title: "Smart Summaries", desc: "AI breaks down complex articles into easy-to-read insights." },
    { icon: <FaChartLine size={28} />, title: "Sentiment Analysis", desc: "Understand the tone of the news: positive, neutral, or negative." },
    { icon: <FaLightbulb size={28} />, title: "Keyword Highlights", desc: "Catch the core ideas instantly with AI keyword extraction." },
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto text-center bg-gray-950 text-gray-100">
      <h2 className="text-3xl font-bold mb-12">AI Insights</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {insights.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="bg-gray-900 rounded-2xl p-6 shadow-lg flex flex-col items-center gap-3"
          >
            <div className="text-purple-400">{item.icon}</div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
