import React from "react";
import { Link } from "react-router";

const AboutUsSection = () => {
  return (
    <section className="max-w-7xl mx-auto my-20 px-4">
          <h3 className="text-4xl font-bold text-center my-10">About Us</h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>

          <h2 className="text-2xl md:text-4xl font-bold mb-5">
            Welcome to LocalChefBazaar
          </h2>

          <p className="text-base leading-relaxed mb-4">
            LocalChefBazaar was created with a simple mission — to connect
            talented home cooks with people who love fresh, homemade food. We
            believe that great meals do not always come from restaurants, but
            from local kitchens filled with passion and care.
          </p>

          <p className="text-base leading-relaxed mb-6">
            Our platform allows customers to explore daily menus, check chef
            availability, place secure orders, and track their meals in real
            time. For home cooks, LocalChefBazaar offers an opportunity to earn
            from their cooking skills without needing a physical restaurant.
          </p>

          {/* FEATURES */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex items-start gap-3">
              <span className="text-primary text-xl">✔</span>
              <p className="text-sm">
                Fresh, hygienic, and homemade meals prepared by verified local
                chefs.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-primary text-xl">✔</span>
              <p className="text-sm">
                Secure payments, real-time order tracking, and honest reviews.
              </p>
            </div>
          </div>
{/* 
          <Link to="/about">
            <button className="btn btn-primary px-8">
              More About Us
            </button>
          </Link> */}
        </div>

        {/* RIGHT IMAGE & BADGE */}
        <div className="relative">
          <img
            src="https://i.ibb.co.com/bMMvZgqs/pexels-robinstickel-70497.jpg"
            alt="Local chef preparing homemade food"
            className="rounded-2xl shadow-lg w-full object-cover"
          />

          {/* BADGE */}
          <div className="absolute bottom-4 left-4 bg-primary text-white px-6 py-4 rounded-xl shadow-lg">
            <p className="text-sm font-semibold">
              Trusted by Local Chefs
            </p>
            <p className="text-xs">
              Serving Fresh Meals Daily
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUsSection;
