import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../Contexts/AuthContext/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import MyMealCard from './MyMealCard';

const MyMeal = () => {
const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
const {data:meals=[],refetch}=useQuery({
    queryKey:['myMeal',user?.email],
    queryFn:async ()=>{
        const res = await axiosSecure.get(`/meal?email=${user?.email}`)
        return res.data;
        // console.log(res.data)
    }
})


    return (
        <div>
           <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">My Meals</h1>

      {/* Grid Layout */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {meals.map((meal) => (
          <MyMealCard key={meal._id} refetch={refetch} meal={meal} />
        ))}
      </div>
    </div> 
        </div>
    );
};

export default MyMeal;