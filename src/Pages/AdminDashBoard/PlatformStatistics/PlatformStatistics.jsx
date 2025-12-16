import React from 'react';
import useAxiosSecure from '../../../Contexts/AuthContext/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PlatformStatistics = () => {
    const axiosSecure = useAxiosSecure()
    const {data:orderStatus=[]}=useQuery({
        queryKey:['orders-payment-status-stats'],
        queryFn:async()=>{
            const res =await axiosSecure.get(`/orders/payment-status/stats`)
            return res.data;

        }
    })
const statsArray = [
  { title: 'Total Users', value: orderStatus.totalUsers },
  { title: 'Orders Pending', value: orderStatus.pendingOrders },
  { title: 'Orders Delivered', value: orderStatus.deliveredOrders },
  { title: 'Total Payment Amount', value: orderStatus.totalPaymentAmount },
];
    return (
        <div>
            <h2 className="text-3xl ">this is stat page</h2>
           <div className="stats shadow">

            {
             statsArray.map((stat)=><div key={stat._id} className="stat">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    </div>
    <div className="stat-title text-xl font-bold">{stat.title}</div>
    <div className="stat-value">{stat.value}</div>
  </div>)   
            }
  

  
</div> 
        </div>
    );
};

export default PlatformStatistics;