import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { toast } from 'react-toastify';
import axios from 'axios';
import { imageUpload } from '../../../utils';
import useAxiosSecure from '../../../Contexts/AuthContext/useAxiosSecure';

const CreateMeal = () => {
  const axiosSecure = useAxiosSecure()
  
    const {user}=useAuth()
 const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    const{foodName,chefName,chefId,price,rating,ingredients,estimatedDeliveryTime,chefExperience,userEmail,foodImage}=data
    const imageFile = foodImage[0]; 
    // console.log(data)
    try {
      const imageUrl = await imageUpload(imageFile);
     

      const mealData = {
        
        foodName,
        chefName,
        chefId,
        price,
        rating ,
        ingredients: ingredients.split(',').map(item => item.trim()),
        estimatedDeliveryTime,
        chefExperience,
        userEmail,
        foodImage: imageUrl, 
        createdAt:new Date()
      };

      const res = await axiosSecure.post("/meals",mealData); 

      if (res.data.success) {
        toast.success("Meal added successfully!");
        reset();
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to add meal");
    }
  };




    return (
        <div>
            <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Create Meal</h2>

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
            value={user?.displayName}
          />
          {errors.chefName && <span className="text-red-500 text-sm">Chef Name is required</span>}
        </div>

        {/* Chef ID */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold">Chef ID</label>
          <input
            {...register('chefId', { required: true })}
            placeholder="Enter Chef ID"
            // defaultValue={chefId || ""}
            className="border p-2 rounded"
          />
          {errors.chefId && <span className="text-red-500 text-sm">Chef ID is required</span>}
        </div>

        {/* Food Image */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold">Food Image</label>
          <input
            type="file"
            {...register('foodImage', { required: true })}
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
            value={user?.email}
            readOnly
            className="border p-2 rounded bg-gray-100"
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Add Meal
          </button>
        </div>

      </form>
    </div>
        </div>
    );
};

export default CreateMeal;