import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';

const MealCard = ({food}) => {
     const {
        _id,
    chefName,
    chefId,
    foodImage,
    price,
    rating,
    deliveryArea,
    foodName,
  } = food;
    return (
        <div>
             <div className="bg-white rounded-xl shadow-md p-4 w-72 hover:shadow-lg transition duration-300">
      {/* Food Image */}
      <div className="w-full h-40 overflow-hidden rounded-lg">
        <img
          src={foodImage}
          alt={foodName}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold mt-3">{foodName}</h2>

      {/* Chef Info */}
      <p className="text-sm text-gray-600">
        Chef: <span className="font-medium">{chefName}</span>
      </p>
      <p className="text-sm text-gray-600">Chef ID: {chefId}</p>

      {/* Delivery Area */}
      <p className="text-sm text-gray-600">
        Delivery Area: <span className="font-medium">{deliveryArea}</span>
      </p>

      {/* Price & Rating */}
      <div className="flex justify-between items-center mt-2">
        <p className="text-blue-600 font-bold text-lg">${price}</p>

        <div className="flex items-center gap-1 text-yellow-500">
          <FaStar />
          <span className="text-sm font-medium">{rating}/5</span>
        </div>
      </div>

      {/* Button */}
      <Link to={`/meal-details/${_id}`} className="w-full btn mt-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        See Details
      </Link>
    </div>
        </div>
    );
};

export default MealCard;