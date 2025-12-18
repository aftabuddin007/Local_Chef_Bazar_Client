import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const HeroBanner = () => {

  const heroImage = [
    {
      slogan: "Taste the warmth of home",
      subtitle:
        "Discover authentic, homemade meals prepared with love by talented chefs in your neighborhood.",
      image: "https://i.ibb.co.com/9kZSts4y/pexels-vanmalidate-769289.jpg",
      cta: "Explore Daily Menus"
    },
    {
      slogan: "Fresh ingredients, skilled hands",
      subtitle:
        "From traditional family recipes to modern fusion, enjoy healthy food delivered straight to your door.",
      image: "https://i.ibb.co.com/GvFS5RmV/pexels-ella-olsson-572949-1640772.jpg",
      cta: "Find a Chef"
    },
    {
      slogan: "Support local, eat better",
      subtitle:
        "Join a community that celebrates local culinary talent and secure, real-time food tracking.",
      image: "https://i.ibb.co.com/1tKGvb8t/pexels-janetrangdoan-1099680.jpg",
      cta: "Order Now"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="w-full h-[90vh] relative">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          className="h-full"
        >
          {heroImage.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-full w-full bg-cover bg-center flex flex-col justify-center items-center text-white"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* 🔥 Animated Text */}
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-black/40 p-6 rounded-2xl text-center max-w-3xl"
                >
                  <h2 className="text-4xl md:text-6xl font-bold mb-4">
                    {slide.slogan}
                  </h2>
                  <p className="text-lg md:text-2xl">
                    {slide.subtitle}
                  </p>
                </motion.div>

                {/* 🔥 Animated Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="btn btn-primary mt-10 flex items-center gap-2"
                >
                  {slide.cta}
                  <FaArrowRight />
                </motion.button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroBanner;
