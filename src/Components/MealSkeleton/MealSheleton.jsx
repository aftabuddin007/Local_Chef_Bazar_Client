import React from "react";

const MealCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-md sm:p-4 sm:w-72 animate-pulse">
      
      {/* Image Skeleton */}
      <div className="w-full h-40 bg-gray-300 rounded-lg"></div>

      {/* Title */}
      <div className="h-4 bg-gray-300 rounded mt-4 w-3/4"></div>

      {/* Chef Info */}
      <div className="h-3 bg-gray-300 rounded mt-2 w-1/2"></div>
      <div className="h-3 bg-gray-300 rounded mt-1 w-1/3"></div>

      {/* Delivery Area */}
      <div className="h-3 bg-gray-300 rounded mt-2 w-2/3"></div>

      {/* Price & Rating */}
      <div className="flex justify-between items-center mt-4">
        <div className="h-4 bg-gray-300 rounded w-16"></div>
        <div className="h-4 bg-gray-300 rounded w-12"></div>
      </div>

      {/* Button */}
      <div className="h-10 bg-gray-300 rounded-lg mt-4"></div>
    </div>
  );
};

export default MealCardSkeleton;
