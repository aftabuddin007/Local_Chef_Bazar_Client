import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Heart, ShieldCheck, Truck } from 'lucide-react';
const WhyChoose = () => {
    const features = [
  {
    icon: <Utensils className="w-8 h-8 text-orange-500" />,
    title: "Fresh & Homemade",
    description: "Enjoy meals prepared with fresh, peak-ripeness ingredients straight from local home kitchens.",
  },
  {
    icon: <Heart className="w-8 h-8 text-red-500" />,
    title: "Made with Love",
    description: "Support local chefs who bring authentic family recipes and artisanal passion to your table.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
    title: "Secure & Transparent",
    description: "Every order is handled with care, featuring secure payments and real-time order tracking.",
  },
  {
    icon: <Truck className="w-8 h-8 text-green-500" />,
    title: "Fast Local Delivery",
    description: "Short travel distances ensure your food stays warm and arrives with a lower carbon footprint.",
  }
];
    return (
        <div>
            <section className="py-20 bg-slate-50 font-poppins">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-slate-800 mb-4"
          >
            Why Choose <span className="text-orange-500">LocalChefBazar?</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-slate-600 max-w-2xl mx-auto"
          >
            We bridge the gap between local culinary talent and food lovers looking for authentic, healthy, and convenient meals.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100"
            >
              <div className="bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
        </div>
    );
};

export default WhyChoose;