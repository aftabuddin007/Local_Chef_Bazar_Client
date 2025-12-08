import React from 'react';

const Review = ({ reviewerName, reviewerImage, rating, comment, date }) => {


  
    return (
        <div>
             <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 md:max-w-lg lg:max-w-xl">
      
      {/* Profile Section */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={reviewerImage}
          alt="Profile"
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{reviewerName}</h2>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>

      {/* Static 3-star rating */}
      <div className="flex items-center mb-4">{rating}
        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
        </svg>
        
      </div>

      {/* Review Text */}
      <p className="text-gray-700 text-base leading-relaxed">
        {comment}
      </p>
    </div>
        </div>
    );
};

export default Review;