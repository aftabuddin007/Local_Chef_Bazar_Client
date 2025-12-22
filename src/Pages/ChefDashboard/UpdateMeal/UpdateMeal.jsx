import React, { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { imageUpload } from '../../../utils';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router';
import Loading from '../../../Components/Loading/Loading';
import useAxiosSecure from '../../../Contexts/AuthContext/useAxiosSecure';

const UpdateMeal = () => {
    const navigate = useNavigate()
    const {id}=useParams()
     const {user}=useAuth()
 const { register, handleSubmit, reset, formState: { errors } } = useForm();
const axiosSecure = useAxiosSecure()
const {data:details,isLoading, refetch} = useQuery({
queryKey:['meal',id],
queryFn:async ()=>{
  const res = await axios.get(`https://localchefbazar-roan.vercel.app/meals/${id}`)
  return res.data.result
// console.log(res.data.result)
}
})

useEffect(() => {
        if (details) {
            reset({
                foodName: details.foodName,
                chefName: details.chefName,
                chefId: details.chefId,
                
                price: details.price,
                rating: details.rating,
                ingredients: details.ingredients?.join(", "),
                estimatedDeliveryTime: details.estimatedDeliveryTime,
                chefExperience: details.chefExperience,
                userEmail: details.userEmail,
            });
        }
    }, [details, reset]);



  const onSubmit = async (data) => {

        try {
            let imageUrl = details.foodImage; // default old image

            // If new image provided
            if (data.foodImage?.length > 0) {
                const imageFile = data.foodImage[0];
                imageUrl = await imageUpload(imageFile);
            }

            const updatedMeal = {
                foodName: data.foodName,
                chefName: data.chefName,
                chefId: data.chefId,
                price: data.price,
                rating: data.rating,
                ingredients: data.ingredients.split(",").map(item => item.trim()),
                estimatedDeliveryTime: data.estimatedDeliveryTime,
                chefExperience: data.chefExperience,
                userEmail: data.userEmail,
                foodImage: imageUrl,
            };

            const res = await axiosSecure.put(`/meals/${id}`, updatedMeal);

            if (res.data.modifiedCount > 0) {
                toast.success("Meal updated successfully!");
                refetch()
                navigate('/dashboard/my-meal')
            }

        } catch (err) {
            console.error(err);
            toast.error("Failed to update meal");
        }
    };
if(isLoading){
    return <Loading></Loading>
}
    return (
        <div>
  <title>LocalChefBazar Update Meal</title>

             <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Update Meal</h2>

      <form
       onSubmit={handleSubmit(onSubmit)} 
       className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Food Name */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold">Food Name</label>
          <input
            {...register('foodName', { required: true })}
            placeholder="Enter food name"
            className="border p-2 rounded"
          />
          {errors.foodName && <span className="text-red-500 text-sm">Food Name is required</span>}
        </div>

        {/* Chef Name */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold">Chef Name</label>
          <input
            {...register('chefName', { required: true })}
            placeholder="Enter chef name"
            className="border p-2 rounded"
            
          />
          {errors.chefName && <span className="text-red-500 text-sm">Chef Name is required</span>}
        </div>

        {/* Chef ID */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold">Chef ID</label>
          <input
            {...register('chefId', { required: true })}
            placeholder="Enter Chef ID"
           
            className="border p-2 rounded"
          />
         
        </div>

        {/* Food Image */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold">Food Image</label>
          <img src={details?.foodImage} className="w-32 h-32 rounded mb-2" />
          <input
            type="file"
            {...register('foodImage')}
            className="border p-2 rounded"
            
            
          />
          {errors.foodImage && <span className="text-red-500 text-sm">Image is required</span>}
        </div>

        {/* Price */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold">Price</label>
          <input
   type="number"
  
   {...register("price", {
    required: true,
    setValueAs: v => v === "" ? 0 : parseInt(v)
   })}
       placeholder="Enter price"
      className="border p-2 rounded"
/>
          {errors.price && <span className="text-red-500 text-sm">Price is required</span>}
        </div>

        {/* Rating */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold">Rating</label>
          <input
  type="number"
  step="0.1"
  min="0"
  max="5"
  {...register("rating", {
    setValueAs: v => v === "" ? 0 : parseFloat(v)
  })}
  placeholder="Rating (optional)"
  className="border p-2 rounded"
/>

        </div>

        {/* Ingredients */}
        <div className="flex flex-col md:col-span-2">
          <label className="mb-1 font-semibold">Ingredients</label>
          <input
            {...register('ingredients', { required: true })}
            placeholder="Comma separated ingredients"
            className="border p-2 rounded"
          />
          {errors.ingredients && <span className="text-red-500 text-sm">Ingredients are required</span>}
        </div>

        {/* Estimated Delivery Time */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold">Estimated Delivery Time</label>
          <input
            {...register('estimatedDeliveryTime', { required: true })}
            placeholder="E.g., 30 minutes"
            className="border p-2 rounded"
          />
          {errors.estimatedDeliveryTime && <span className="text-red-500 text-sm">This field is required</span>}
        </div>

        {/* Chef Experience */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold">Chef Experience</label>
          <input
            {...register('chefExperience', { required: true })}
            placeholder="E.g., 5 years in Mediterranean cuisine"
            className="border p-2 rounded"
          />
          {errors.chefExperience && <span className="text-red-500 text-sm">This field is required</span>}
        </div>

        {/* User Email */}
        <div className="flex flex-col md:col-span-2">
          <label className="mb-1 font-semibold">User Email</label>
          <input  {...register('userEmail', { required: true })}
            
            readOnly
            className="border p-2 rounded bg-gray-100"
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
          >
            Update Meal
          </button>
        </div>

      </form>
    </div>
        </div>
    );
};

export default UpdateMeal;