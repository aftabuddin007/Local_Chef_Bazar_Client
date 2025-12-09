import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
// import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import Loading from '../../Components/Loading/Loading';

const OrderForm = () => {
    const {id}=  useParams()
    const {user}=useAuth()
    const {data:meal,isLoading} = useQuery({
        queryKey:['meals-order',id],
        queryFn:async()=>{
            const res = await axios.get(`http://localhost:3000/meals/${id}`);
            // console.log(res.data.result)
      return res.data.result;
        }
    })
const {register,
handleSubmit,
watch,reset,
formState: { errors }}=useForm()
const quantity = watch("quantity",1)

const totalPrice = meal ? meal.price * quantity : 0;
useEffect(() => {
  if (meal) {
    reset({
      mealName: meal.foodName,
      price: meal.price,
      chefId: meal.chefId, // make sure meal has chefId
      userEmail: user.email,
      quantity: 1
    });
  }
}, [meal, user, reset]);

const onSubmit = async (data)=>{
    const orderData = {
        foodId: meal._id,
      mealName: data.mealName,
      price: totalPrice,
      quantity: data.quantity,
      chefId: data.chefId,
      userEmail: data.userEmail,
      userAddress: data.userAddress,
      
    };
   
Swal.fire({
  title: `Your total price is $${totalPrice}`,
  text: `Do you want to confirm the order?`,
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Confirm Order"

})
.then(async(result) => {
  if (result.isConfirmed) {
    
    
try {
       const res = await axios.post('http://localhost:3000/orders', orderData);
        if (res.data.success) {
          Swal.fire({
            title: "Order Placed!",
            text: res.data.message,
            icon: "success",
          });
          reset();
}}
        
        catch (error) {
    Swal.fire({
          title: "Error!",
          text: "Failed to place order.",
          icon: "error",
        });
        }}})

if(isLoading){

<Loading></Loading> 
}}

    return (
       <div>

    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-xl"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Confirm Your Order</h1>

        {/* Meal Name */}
        <div className="mb-4">
          <label className="font-semibold">Meal Name</label>
          <input
            {...register("mealName")}
            // defaultValue={meal.foodName}
            disabled
            className="w-full p-3 border rounded-lg bg-gray-100"
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="font-semibold">Price</label>
          <input
            {...register("price")}
            disabled
            className="w-full p-3 border rounded-lg bg-gray-100"
          />
        </div>

        {/* Quantity */}
        <div className="mb-4">
          <label className="font-semibold">Quantity</label>
          <input
            type="number"
            min="1"
            {...register("quantity", { required: true, min: 1 })}
            className="w-full p-3 border rounded-lg"
          />
          {errors.quantity && (
            <p className="text-red-500 text-sm">Quantity must be at least 1</p>
          )}
        </div>

        {/* Chef ID */}
        <div className="mb-4">
          <label className="font-semibold">Chef ID</label>
          <input
            {...register("chefId")}
            disabled
            className="w-full p-3 border rounded-lg bg-gray-100"
          />
        </div>

        {/* User Email */}
        <div className="mb-4">
          <label className="font-semibold">Your Email</label>
          <input
            {...register("userEmail")}
            disabled
            className="w-full p-3 border rounded-lg bg-gray-100"
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="font-semibold">Delivery Address</label>
          <textarea
            {...register("userAddress", { required: true })}
            placeholder="Enter your full address"
            className="w-full p-3 border rounded-lg h-24"
          />
          {errors.userAddress && (
            <p className="text-red-500 text-sm">Address is required</p>
          )}
        </div>

        {/* Total Price */}
        <div className="mb-6 text-lg font-semibold text-blue-600">
          Total Price: ${totalPrice}
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
        >
          Confirm Order
        </button>
      </form>
    </div>
  
        
       </div>
    );
}
export default OrderForm;