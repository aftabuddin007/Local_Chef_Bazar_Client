import  {  useState } from 'react';
import { Link, useParams } from 'react-router';
import Loading from '../../Components/Loading/Loading';
import Review from '../HomePage/Review/Review';
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../Contexts/AuthContext/useAxiosSecure';
const MealDetails = () => {
  const {user} = useAuth()
    const {id} =useParams()
    const axiosSecure = useAxiosSecure()

const {data:details,isLoading, } = useQuery({
queryKey:['meal',id],
queryFn:async ()=>{
  const res = await axios.get(`https://localchefbazar-roan.vercel.app/meals/${id}`)
  return res.data.result
}
})
// console.log(details)
const {data:reviews = [],refetch} =useQuery({
  queryKey:["reviews",id],
  queryFn:async ()=>{
const res = await axiosSecure.get(`/reviews/${id}`)
return res.data;
  }
})
const {register, handleSubmit, reset} = useForm()


const onSubmit = async (data) => {
  try {
    const ratingFloat = parseFloat(data.rating);

    const reviewPayload = {
      foodId: id,
      mealName: details.foodName,
      reviewerName: user.displayName,
      reviewerImage: user.photoURL,
      reviewerEmail: user.email,
      rating: ratingFloat,
      comment: data.comment,
    };

    await axiosSecure.post('/reviews', reviewPayload);

    toast.success("Review submitted successfully!");
    reset();

    // refresh reviews
    refetch(); 
const modal = document.getElementById('my_modal_3');
    if(modal) modal.close();
    
  } catch (err) {
    toast.error(err);
  }
};

const handleAddFavorite = async ()=>{
  try{
    const favoritePayload = {
      userEmail: user.email,
      mealId: details._id,       
      mealName: details.foodName,
      chefId: details.chefId,
      chefName: details.chefName,
      price: details.price,
    };
    const res = await axios.post('https://localchefbazar-roan.vercel.app/favorites',favoritePayload)
    if(res.data.success){
      toast.success(res.data.message)
    }else{
      toast.error(res.data.message);
    }
  }catch(err){
console.error(err);
    toast.error("Already added the food.");
  }
}





  if(isLoading){
    return <Loading></Loading>
  }





    return (
        <div>
  <title>LocalChefBazar Meal Details</title>

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
            <p><span className="font-semibold">Chef Experience:</span> {details.chefExperience} Years </p>
            <p><span className="font-semibold">Chef ID:</span> {details.chefId}</p>
          </div>

          {/* Order Button */}
          <Link to={`/order-form/${details._id}`}
            className="btn w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
          >
            Order Now
          </Link>
        </div>
      </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 max-w-7xl mx-auto mt-10'>
    {
      reviews.map(r=><Review 
      key={r._id}
      reviewerName={r.reviewerName}
      reviewerImage={r.reviewerImage}
      rating={r.rating}
      comment={r.comment}
      date={r.date}
      ></Review>)
    }

        </div>
        <div className="flex justify-center items-center gap-4 mt-6">
 {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_3').showModal()}>Give Review</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>✕</button>

    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-4 rounded shadow mt-4 max-w-lg">
      <div className="mb-2">
        <label className="block font-semibold">Rating</label>
        <input
          type="number"
          step="0.1"
          min="0"
          max="5"
          {...register("rating", { required: true })}
          className="input input-bordered w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block font-semibold">Comment</label>
        <textarea
          {...register("comment", { required: true })}
          className="textarea textarea-bordered w-full"
        />
      </div>
      <button type="submit" className="btn btn-success mt-2">
        Submit Review
      </button>
    </form>
  </div>
</dialog>



  <button onClick={handleAddFavorite} className="btn btn-primary">Add to Favorite</button>
</div>
    </div>
        </div>
    );
};

export default MealDetails;