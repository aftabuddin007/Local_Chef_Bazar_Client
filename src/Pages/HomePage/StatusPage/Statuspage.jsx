import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

// --- Animated Counter Component ---
const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          latest.toFixed(0)
        );
      }
    });
  }, [springValue]);

  return (
    <span className="text-4xl font-bold tracking-tight text-orange-600">
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
};

// --- Main Stats Section Component ---
const StatsSection = () => {
  const stats = [
    { id: 1, name: "Active Chefs", value: 250, suffix: "+" },
    { id: 2, name: "Daily Deliveries", value: 1200, suffix: "" },
    { id: 3, name: "Happy Neighbors", value: 15, suffix: "k+" },
    { id: 4, name: "Local Cuisines", value: 45, suffix: "+" },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Growing Community
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connecting local home chefs with food lovers in your neighborhood. 
            Fresh, authentic, and delivered with love.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: stat.id * 0.1 }}
              className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
            >
              <dt className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                {stat.name}
              </dt>
              <dd className="mt-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
              
              {/* Subtle decorative background element */}
              <div className="absolute -right-4 -bottom-4 h-16 w-16 bg-orange-50 rounded-full opacity-50" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;