// import React, { useState } from 'react';

import MealCard from '../../Components/MealCard/MealCard';
import useAxiosSecure from '../../Contexts/AuthContext/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Components/Loading/Loading';
import { useState } from 'react';

const Meals = () => {
 const [sort, setSort] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
 const axiosSecure = useAxiosSecure()
  
const {data:data=[],isLoading}=useQuery({
    queryKey:['meals',sort, currentPage],
    queryFn:async ()=>{
        const res = await axiosSecure.get(`/meals?sort=${sort}&limit=${itemsPerPage}&skip=${currentPage * itemsPerPage}`)
        
        return res.data;
    }
})
const {data:countData={}}=useQuery({
 queryKey:['meals-count'],
 queryFn:async()=>{
    const res = await axiosSecure.get('/meals-count');
      return res.data;
 }
})
const totalPages = Math.ceil((countData.count || 0) / itemsPerPage);
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='bg-[#FFF8F0]'>
  <title>LocalChefBazar All Meals</title>

          <div className='max-w-7xl mx-auto'>
            <h2 className='text-4xl font-bold text-center py-10'>All Meals</h2>
             <div className="text-right px-20  mb-10">
        <select
          defaultValue="sort"
          onChange={(e) => {
          setSort(e.target.value);
            setCurrentPage(0);
            }}   
          

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
 <div className="flex justify-center gap-2 mb-20">
        {[...Array(totalPages).keys()].map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`btn btn-sm ${
              currentPage === page ? 'btn-primary' : 'btn-outline'
            }`}
          >
            {page + 1}
          </button>
        ))}
      </div>
        </div>
        </div>
    );
};

export default Meals;