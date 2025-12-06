import  { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loading from '../../Components/Loading/Loading';

const MealDetails = () => {
    const {id} =useParams()
const [details,setDetails]=useState({})
const [loading,setLoading]=useState(true)
useEffect(()=>{
    fetch(`http://localhost:3000/meals/${id}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
  setDetails(data.result)
  setLoading(false)
})

},[])

  if(loading){
    return <Loading></Loading>
  }





    return (
        <div>
             <div className="w-full min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Left: Food Image */}
        <div className="w-full">
          <img
            src={details.foodImage}
            alt={details.foodName}
            className="w-full h-80 md:h-[450px] object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Right: Details */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <h1 className="text-3xl font-bold mb-2">{details.foodName}</h1>
          <p className="text-gray-600 mb-4">ChefName: {details.chefName}</p>

          {/* Price + Rating */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-2xl font-semibold text-blue-600">Price: ${details.price}</p>
            <p className="text-yellow-500 font-medium">Ratings: ⭐{details.rating}</p>
          </div>

          {/* Ingredients */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {details.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Other Info */}
          <div className="space-y-2 mb-6">
            <p><span className="font-semibold">Delivery Area:</span> {details.deliveryArea}</p>
            <p><span className="font-semibold">Estimated Delivery Time:</span> {details.
estimatedDeliveryTime
}</p>
            <p><span className="font-semibold">Chef Experience:</span> {details.chefExperience} </p>
            <p><span className="font-semibold">Chef ID:</span> {details.chefId}</p>
          </div>

          {/* Order Button */}
          <button
            onClick={() => window.location.href = `/order/${details.id}`}
            className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
        </div>
    );
};

export default MealDetails;