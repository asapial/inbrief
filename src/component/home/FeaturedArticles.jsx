import React from "react";
import { motion } from "framer-motion";
import { FaRobot, FaRegNewspaper } from "react-icons/fa";

// Example data (replace with API/DB)
const articles = [
  {
    id: 1,
    title: "AI Reshaping Global Economy",
    summary:
      "AI-driven automation is accelerating productivity while raising new challenges for job markets worldwide.",
    image: "https://source.unsplash.com/600x400/?ai,technology",
    sentiment: "Positive",
  },
  {
    id: 2,
    title: "Climate Change & Policy Updates",
    summary:
      "Governments are introducing stricter environmental policies to curb emissions and promote sustainability.",
    image: "https://source.unsplash.com/600x400/?climate,earth",
    sentiment: "Neutral",
  },
  {
    id: 3,
    title: "Breakthrough in Cancer Research",
    summary:
      "A new AI model assists doctors in detecting cancer early with higher accuracy than traditional methods.",
    image: "https://source.unsplash.com/600x400/?health,science",
    sentiment: "Positive",
  },
];

export default function FeaturedArticles() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex justify-center items-center gap-2 text-cyan-600 dark:text-cyan-400 text-2xl font-bold">
            <FaRobot /> Featured Articles (Curated by AI)
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Stay updated with AI-selected insights — simplified and analyzed.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {article.summary}
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      article.sentiment === "Positive"
                        ? "bg-green-100 text-green-700"
                        : article.sentiment === "Negative"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    Sentiment: {article.sentiment}
                  </span>
                  <button className="text-cyan-600 dark:text-cyan-400 flex items-center gap-1 hover:underline">
                    <FaRegNewspaper /> Read More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
