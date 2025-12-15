import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Contexts/AuthContext/useAxiosSecure';
import Loading from '../../../Components/Loading/Loading';
import { MdCancel } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";

import { TiTick } from "react-icons/ti";

const OrderRequest = () => {
    const axiosSecure = useAxiosSecure()
    

const {isLoading,data:orders=[]}=useQuery({
    queryKey:['orderRequest'],
    queryFn:async ()=>{
        const res = await axiosSecure.get(`/order`)
        console.log(res.data)
        return res.data;
        
      }
    })

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
        <td className='flex gap-3'>
            <button className='btn bg-red-700'><MdCancel />
</button>
            <button className='btn bg-green-600'><TiTick /></button>
            <button className='btn bg-yellow-600'><CiDeliveryTruck />
</button>
        </td>
      </tr>)
      }
      
      
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default OrderRequest;