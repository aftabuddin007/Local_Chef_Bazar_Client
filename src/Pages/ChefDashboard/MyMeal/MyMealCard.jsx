import React from 'react';
import { CiStar } from "react-icons/ci";

const MyMealCard = ({meal}) => {
    return (
        <div>
            <div className="bg-white shadow-md rounded-xl overflow-hidden">
      {/* Food Image */}
      <img 
        src={meal.foodImage} 
        alt={meal.foodName} 
        className="w-full h-48 object-cover"
      />

      {/* Card Content */}
      <div className="p-4">
        {/* Food Name and Price */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">{meal.foodName}</h2>
          <span className="text-green-600 font-bold">${meal.price}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <CiStar className="text-yellow-400 mr-1" />
          <span>{meal.rating}</span>
        </div>

        {/* Ingredients */}
        <p className="text-gray-600 text-sm mb-2">
          <strong>Ingredients:</strong> {meal.ingredients}
        </p>

        {/* Estimated Delivery Time */}
        <p className="text-gray-600 text-sm mb-2">
          <strong>Delivery Time:</strong> {meal.estimatedDeliveryTime} mins
        </p>

        {/* Chef Info */}
        <p className="text-gray-600 text-sm mb-4">
          <strong>Chef:</strong> {meal.chefName} (ID: {meal.chefId})
        </p>

        {/* Action Buttons */}
        <div className="flex justify-between">
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
            Delete
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            Update
          </button>
        </div>
      </div>
    </div>
        </div>
    );
};

export default MyMealCard;
