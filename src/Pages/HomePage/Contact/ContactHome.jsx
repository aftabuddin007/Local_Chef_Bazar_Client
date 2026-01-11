import React from "react";

const Newsletter = () => {
  return (
    <section className="relative bg-neutral text-neutral-content ">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 flex flex-col items-center text-center">
        {/* Small Heading */}
        <p className="text-secondary font-semibold tracking-widest mb-3">
          JOIN OUR NEWSLETTER
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
          Subscribe to LocalChefBazaar <br />
          for Fresh Meal Updates
        </h2>

        {/* Description */}
        <p className="max-w-2xl text-base md:text-lg opacity-90 mb-10">
          Get notified about new home-cooked meals, daily menus from local
          chefs, special offers, and exclusive discounts — delivered straight
          to your inbox.
        </p>

        {/* Newsletter Form */}
        <form className="w-full max-w-3xl flex flex-col sm:flex-row items-center gap-3">
          <div className="w-full relative">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="input input-bordered w-full pr-10 text-black"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              ✉️
            </span>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full sm:w-auto px-8"
          >
            Subscribe Now →
          </button>
        </form>

        {/* Small Note */}
        <p className="text-xs opacity-70 mt-4">
          We respect your privacy. No spam, unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
