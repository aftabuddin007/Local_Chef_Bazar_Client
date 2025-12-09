import React from 'react';
import MyOrderCard from './MyOrderCard';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../Contexts/AuthContext/useAxiosSecure';

const MyOrder = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
const {data:orders=[]}=useQuery({
    queryKey:['myOrders',user?.email],
    queryFn:async ()=>{
        const res = await axiosSecure.get(`/orders?email=${user?.email}`)
        return res.data;
    }
})



    return (
        <div>
            <h2 className="font-bold text-2xl">All My Orders: {orders.length}</h2>
            <MyOrderCard orders={orders} key={orders._id}></MyOrderCard>
        </div>
    );
};

export default MyOrder;