import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const BlogSection = () => {
  return (
    <section className="max-w-7xl mx-auto my-20 px-4 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT - Slips in from the left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stories From Our Local Chefs
          </h2>

          <p className="text-base leading-relaxed mb-4">
            Discover inspiring stories, cooking tips, and real experiences
            shared by talented home cooks from your community. Learn how local
            chefs prepare fresh meals, manage daily menus, and build their food
            journey with LocalChefBazaar.
          </p>

          <p className="text-base leading-relaxed mb-6">
            Our blog also shares food trends, healthy eating ideas, and helpful
            guides for customers who love homemade food and want to support
            local chefs.
          </p>

          <Link to="/blog">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary px-8"
            >
              Explore more Blogs →
            </motion.button>
          </Link>
        </motion.div>

        {/* RIGHT IMAGE - Slips in from the right */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src="https://i.ibb.co.com/4gSBLmbc/pexels-sydney-troxell-223521-718742.jpg"
            alt="Local chef cooking homemade food"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default BlogSection;