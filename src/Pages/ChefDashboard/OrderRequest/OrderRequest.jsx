import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Contexts/AuthContext/useAxiosSecure';
import Loading from '../../../Components/Loading/Loading';
import { MdCancel } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";

import { TiTick } from "react-icons/ti";
import { toast } from 'react-toastify';

const OrderRequest = () => {
    const axiosSecure = useAxiosSecure()
    

const {isLoading,data:orders=[],refetch}=useQuery({
    queryKey:['orderRequest'],
    queryFn:async ()=>{
        const res = await axiosSecure.get(`/order`)
        console.log(res.data)
        return res.data;
        
      }
    })

const updateOrderStatus = (id,orderStatus)=>{
  axiosSecure.patch(`/orders/${id}`,{orderStatus})
  .then(res=>{
    if(res.data.modifiedCount){
      refetch()
      toast(`Order has been ${orderStatus}`)
    }
  })
}
const handleAcceptOrder = id =>{
  updateOrderStatus(id,'accepted')
}
const handleCancelOrder = id =>{
  updateOrderStatus(id,'cancelled')
}
const handleDeliverOrder = id =>{
  updateOrderStatus(id,'delivered')
}






if(isLoading){
    return <Loading></Loading>
}

    return (
        <div>
            <h2 className="text-3xl font-bold">Your {orders.length} order request </h2>
            <div>
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Food Name</th>
        <th>Food Price</th>
        <th>Quantity</th>
        <th>Order Status</th>
        <th>User Email</th>
        <th>Order Time</th>
        <th>User Address</th>
        <th>Payment Status </th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        orders.map((order,i)=><tr>
        <th>{i+1}</th>
        <td>{order.mealName}</td>
        <td>${order.price}</td>
        <td>{order.quantity}</td>
        <td>{order.orderStatus}</td>
        <td>{order.userEmail}</td>
        <td>{order.orderTime}</td>
        <td>{order.userAddress}</td>
        <td>{order.paymentStatus}</td>
         

              <td className="flex gap-2">
                {/* Cancel */}
                <button
                  disabled={order.orderStatus !== 'pending'}
                  onClick={() => handleCancelOrder(order._id)}
                  className="btn btn-sm btn-error"
                >
                  Cancel
                </button>

                {/* Accept */}
                <button
                  disabled={order.orderStatus !== 'pending'}
                  onClick={() => handleAcceptOrder(order._id)}
                  className="btn btn-sm btn-primary"
                >
                  Accept
                </button>

                {/* Deliver */}
                <button
                  disabled={order.orderStatus !== 'accepted'}
                  onClick={() => handleDeliverOrder(order._id)}
                  className="btn btn-sm btn-success"
                >
                  Deliver
                </button>
              </td>
      </tr>)
      }
      
      
    </tbody>
  </table>
 {orders.length === 0 && (
        <p className="text-center mt-4">No orders found</p>
      )}
</div>
            </div>
        </div>
    );
};

export default OrderRequest;