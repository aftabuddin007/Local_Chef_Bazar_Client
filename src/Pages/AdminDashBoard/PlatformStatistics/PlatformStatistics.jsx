import React from 'react';
import useAxiosSecure from '../../../Contexts/AuthContext/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Components/Loading/Loading';
import { Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const PlatformStatistics = () => {
    const axiosSecure = useAxiosSecure()
    const {data:orderStatus={},isLoading}=useQuery({
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
const barChartData = [
  {
    name: 'Orders',
    pv: orderStatus.pendingOrders || 0,
    uv: orderStatus.deliveredOrders || 0,
  }
];

const getPieChartData = data =>{
  return data.map(item=>{
    return {name:item.title,value:item.value}})
}


if(isLoading){
  return <Loading></Loading>
}
    return (
        <div>
            
           <div className="stats shadow flex flex-col md:flex-row md:justify-between ">

            {
             statsArray.map((stat)=><div key={stat.title} className="stat">
    <div className="stat-figure text-secondary">
     
    </div>
    <div className="stat-title text-xl font-bold">{stat.title}</div>
    <div className="stat-value">{stat.value}</div>
  </div>)   
            }
</div>
<div className='flex flex-col md:flex-row md: sm:gap-100'>
  <div>
<div className="mt-10 shadow  rounded">
  <h3 className="text-xl font-bold text-center mb-5">
    Orders Status Comparison
  </h3>

  <ResponsiveContainer width="100%" height={350}>
    <BarChart
      data={barChartData}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
 <Legend />
      <Bar
        dataKey="pv"
        name="Pending Orders"
        fill="#8884d8"
        radius={[10, 10, 0, 0]}
      />

      <Bar
        dataKey="uv"
        name="Delivered Orders"
        fill="#82ca9d"
        radius={[10, 10, 0, 0]}
      />
     
    </BarChart>
  </ResponsiveContainer>
</div>

  </div>
<div className='mt-10'>
  <h3 className="font-bold text-xl">Order Status Distribution</h3>
   <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 2 }} responsive>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={getPieChartData(statsArray)}
        cx="50%"
        cy="100%"
        outerRadius="120%"
        fill="#8884d8"
        label
        isAnimationActive={true}
      />
    <Legend></Legend>
    <Tooltip></Tooltip>
    </PieChart>
</div>
  </div> 
        </div>
    );
};

export default PlatformStatistics;