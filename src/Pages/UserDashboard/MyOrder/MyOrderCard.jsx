// import axios from 'axios';
import axios from 'axios';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
// import { number } from 'motion';

const MyOrderCard = ({order}) => {
    const {user}= useAuth()
    // console.log(order)
const handlePayment = async(order)=>{
    const paymentInfo = {
        orderId:order._id,
        mealName:order.mealName,
        price:Number(order.price),
        quantity:order.quantity,
        email:user?.email


    }
    // console.log(paymentInfo)
    const res = await axios.post('http://localhost:3000/create-checkout-session',paymentInfo)
    window.location.href=res.data.url
    // console.log(res.data.url)

}



    return (
        <div>
           <div className=" bg-gray-50 p-4">




<div
key={order.id}
className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm"
>
<h2 className="text-lg font-semibold">{order.mealName}</h2>
<p className="text-sm text-gray-500 mb-2">Order ID: {order._id}</p>


<div className="text-sm space-y-1">
<p><span className="font-medium">Status:</span> {order.orderStatus}</p>
<p><span className="font-medium">Price:</span> ৳{order.price}</p>
<p><span className="font-medium">Quantity:</span> {order.quantity}</p>
<p><span className="font-medium">OrderTime:</span> {order.orderTime}</p>
<p><span className="font-medium">Chef:</span> {order.chefName}</p>
<p><span className="font-medium">Chef ID:</span> {order.chefId}</p>
<p><span className="font-medium">Payment:</span> {order.paymentStatus}</p>
</div>


<div className="mt-3 pt-2 border-t text-right font-semibold text-gray-700">
{/* PAY BUTTON */}
{(order.orderStatus === "accepted" && order.paymentStatus === "pending") && (
  <button
    onClick={() => handlePayment(order)}
    className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg cursor-pointer"
  >
    Pay Now
  </button>
)}



</div>
</div>

</div>
        </div>
    );
};

export default MyOrderCard;