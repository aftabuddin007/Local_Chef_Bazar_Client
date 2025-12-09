import React from 'react';

const MyOrderCard = ({orders}) => {




    return (
        <div>
           <div className="min-h-screen bg-gray-50 p-4">



<div className="grid gap-4">
{orders.map((order) => (
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
<p><span className="font-medium">Delivery Time:</span> {order.orderTime}</p>
<p><span className="font-medium">Chef:</span> {order.chefName}</p>
<p><span className="font-medium">Chef ID:</span> {order.chefId}</p>
<p><span className="font-medium">Payment:</span> {order.paymentStatus}</p>
</div>


<div className="mt-3 pt-2 border-t text-right font-semibold text-gray-700">
{/* PAY BUTTON */}
{(order.orderStatus === "accepted" && order.paymentStatus === "Pending") && (
<button
className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
>
Pay Now
</button>
)}


Total: ৳{order.price * order.quantity}
</div>
</div>
))}
</div>
</div>
        </div>
    );
};

export default MyOrderCard;