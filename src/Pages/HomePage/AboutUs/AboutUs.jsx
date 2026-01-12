import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const AboutUsSection = () => {
  // Animation variants for the container (stagger effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child element
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="max-w-7xl mx-auto my-20 px-4 overflow-hidden">
      {/* SECTION TITLE */}
      <motion.h3 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center my-10"
      >
        About Us
      </motion.h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl font-bold mb-5">
            Welcome to LocalChefBazaar
          </motion.h2>

          <motion.p variants={itemVariants} className="text-base leading-relaxed mb-4">
            LocalChefBazaar was created with a simple mission — to connect
            talented home cooks with people who love fresh, homemade food. We
            believe that great meals do not always come from restaurants, but
            from local kitchens filled with passion and care.
          </motion.p>

          <motion.p variants={itemVariants} className="text-base leading-relaxed mb-6">
            Our platform allows customers to explore daily menus, check chef
            availability, place secure orders, and track their meals in real
            time. For home cooks, LocalChefBazaar offers an opportunity to earn
            from their cooking skills without needing a physical restaurant.
          </motion.p>

          {/* FEATURES - Animate in together */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex items-start gap-3">
              <span className="text-primary text-xl font-bold">✔</span>
              <p className="text-sm">
                Fresh, hygienic, and homemade meals prepared by verified local
                chefs.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-primary text-xl font-bold">✔</span>
              <p className="text-sm">
                Secure payments, real-time order tracking, and honest reviews.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link to="/about">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary px-8"
              >
                More About Us
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE & BADGE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="https://i.ibb.co.com/bMMvZgqs/pexels-robinstickel-70497.jpg"
            alt="Local chef preparing homemade food"
            className="rounded-2xl shadow-lg w-full object-cover"
          />

          {/* BADGE - Floating animation */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            animate={{ 
              y: [0, -10, 0], // Creates a gentle floating bounce
            }}
            transition={{ 
              y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
              delay: 0.5 
            }}
            className="absolute bottom-4 left-4 bg-primary text-white px-6 py-4 rounded-xl shadow-lg"
          >
            <p className="text-sm font-semibold">
              Trusted by Local Chefs
            </p>
            <p className="text-xs">
              Serving Fresh Meals Daily
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUsSection;