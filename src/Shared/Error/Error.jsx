import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { Utensils, Home, Search } from 'lucide-react';
const Error = () => {


  return (
    <div className="min-h-screen flex items-center justify-center bg-white font-poppins px-6">
      <div className="text-center max-w-lg">
        {/* Animated Icon Section */}
        <motion.div 
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <Utensils size={120} className="text-orange-100" />
            <span className="absolute inset-0 flex items-center justify-center text-8xl font-black text-orange-500 opacity-20">
              404
            </span>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-slate-800 mb-4"
        >
          Oops! This kitchen is empty.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-slate-600 mb-8 leading-relaxed"
        >
          The page you are looking for has been moved, eaten, or never existed in our menu. 
          Let's get you back to something delicious.
        </motion.p>

        {/* Navigation Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link 
            to="/" 
            className="btn btn-primary bg-orange-500 border-none hover:bg-orange-600 px-8 text-white flex items-center gap-2"
          >
            <Home size={18} />
            Back to Home
          </Link>
          
          <Link 
            to="/menu" 
            className="btn btn-ghost text-orange-500 hover:bg-orange-50 flex items-center gap-2"
          >
            <Search size={18} />
            Browse Menu
          </Link>
        </motion.div>

        {/* Bottom Small Decoration */}
        <motion.div 
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="mt-12 text-slate-300 text-sm italic"
        >
          "A hungry man is an angry man. Don't stay lost!"
        </motion.div>
      </div>
    </div>
  );
};




export default Error;