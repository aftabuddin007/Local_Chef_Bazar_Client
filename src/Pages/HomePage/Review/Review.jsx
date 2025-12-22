import React from 'react';

const Review = ({ reviewerName, reviewerImage, rating, comment, date }) => {
  return (
    <div className="px-3 sm:px-0">
      <div className="mx-auto bg-white shadow-lg rounded-xl p-4 sm:p-6 
                      max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
        
        {/* Profile Section */}
        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
          <img
            src={reviewerImage}
            alt="Profile"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
          />
          <div>
            <h2 className="text-base sm:text-lg font-semibold text-gray-800">
              {reviewerName}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              {date}
            </p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3 sm:mb-4">
          <span className="text-sm font-bold  text-gray-700">{rating}</span>
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
          </svg>
        </div>

        {/* Review Text */}
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          {comment}
        </p>
      </div>
    </div>
  );
};

export default Review;
