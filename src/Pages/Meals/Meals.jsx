// import React, { useState } from 'react';

import MealCard from '../../Components/MealCard/MealCard';
import useAxiosSecure from '../../Contexts/AuthContext/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Components/Loading/Loading';
import { useState } from 'react';

const Meals = () => {
 
 const axiosSecure = useAxiosSecure()
  const [sort, setSort] = useState('');
const {data:data=[],isLoading}=useQuery({
    queryKey:['meals',sort],
    queryFn:async ()=>{
        const res = await axiosSecure.get(`/meals?sort=${sort}`)
        
        return res.data;
    }
})
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-4xl font-bold text-center my-10'>All Meals</h2>
             <div className="text-right px-10">
        <select
          defaultValue="sort"
          onChange={(e) => setSort(e.target.value)}   
          className="select select-sm"
        >
          <option value="sort" disabled>
            Sort by Price
          </option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-10 mb-20'>
        {
            data.map(food=><MealCard key={food._id} food={food}></MealCard>)
        }
            </div>

        </div>
    );
};

export default Meals;