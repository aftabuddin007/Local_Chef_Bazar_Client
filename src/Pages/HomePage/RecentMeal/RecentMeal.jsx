// import React, { useEffect } from 'react';

import { Link } from "react-router";
import MealCard from "../../../Components/MealCard/MealCard";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

const RecentMeal = ({recentMealPromise}) => {
    console.log(recentMealPromise)
//    const {data=[],isLoading} = useQuery({
//      queryKey: ['meals'],          // unique key
//     queryFn: async () => {
//       const res = await axios.get('http://localhost:3000/recent-meal');
//       console.log(res.data)
//       return res.data;
//     }
//    })
    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-4xl font-bold text-center my-10'>Our Popular Meal</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-10 mb-20'>
        {
            recentMealPromise?.map(food=><MealCard key={food._id} food={food}></MealCard>)
        }
            </div>
<div className="text-center my-7"><Link to='/meals' className="btn btn-primary">See More</Link> </div>
        </div>
    );
};

export default RecentMeal;