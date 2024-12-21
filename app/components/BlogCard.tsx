'use client'; // Ensure it's client-side for Framer Motion

import { motion } from 'framer-motion';

const BlogCard = ({ title, excerpt, slug }: { title: string; excerpt: string; slug: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col justify-between bg-white border border-gray-300 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg"
    >
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>

      {/* Excerpt */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6">{excerpt}</p>

      {/* Link */}
      <a
        href={`/blog/${slug}`}
        className="self-start mt-auto bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-6 py-2 rounded-md transition-colors"
      >
        Read More
      </a>
    </motion.div>
  );
};

export default BlogCard;
