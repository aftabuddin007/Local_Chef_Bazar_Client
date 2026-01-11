import React from "react";
import { Link } from "react-router";

const BlogSection = () => {
  return (
    <section className="max-w-7xl mx-auto my-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
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
            <button className="btn btn-primary px-8">
              Explore more Blogs →
            </button>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1543353071-087092ec393a"
            alt="Local chef cooking homemade food"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
