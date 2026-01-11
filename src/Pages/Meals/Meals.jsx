// import React, { useState } from 'react';

import MealCard from '../../Components/MealCard/MealCard';
import useAxiosSecure from '../../Contexts/AuthContext/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

import { useState } from 'react';
import MealCardSkeleton from '../../Components/MealSkeleton/MealSheleton';

const Meals = () => {
  const [searchText, setSearchText] = useState("");
 const [sort, setSort] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
 const axiosSecure = useAxiosSecure()
  
// const {data:data=[],isLoading}=useQuery({
//     queryKey:['meals',sort, currentPage],
//     queryFn:async ()=>{
//         const res = await axiosSecure.get(`/meals?sort=${sort}&limit=${itemsPerPage}&skip=${currentPage * itemsPerPage}`)
        
//         return res.data;
//     }
// })
const { data = [], isLoading } = useQuery({
  queryKey: ['meals', sort, currentPage, searchText],
  queryFn: async () => {
    const res = await axiosSecure.get(
      `/meals?search=${searchText}&sort=${sort}&limit=${itemsPerPage}&skip=${currentPage * itemsPerPage}`
    );
    return res.data;
  }
});


const handleSearch = (e) => {
  e.preventDefault();
  const text = e.target.search.value.trim();
  setSearchText(text);
  setCurrentPage(0);
};




const { data: countData = {} } = useQuery({
  queryKey: ['meals-count', searchText],
  queryFn: async () => {
    const res = await axiosSecure.get(
      `/meals-count?search=${searchText}`
    );
    return res.data;
  }
});
const totalPages = Math.ceil((countData.count || 0) / itemsPerPage);
    
    return (
        <div className='bg-[#FFF8F0]'>
  <title>LocalChefBazar All Meals</title>

          <div className='max-w-7xl mx-auto'>
            <h2 className='text-4xl font-bold text-center py-10'>All Meals</h2>
            <div className='flex justify-between'>
              <div>
                <form onSubmit={handleSearch} className='flex'>
  <label className="input">
    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </svg>
    <input name="search" type="search" required placeholder="Search meal or chef" />
  </label>
  <button className="btn rounded-lg">Search</button>
</form>
              </div>
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
      </div>
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-10 mb-20'>
  
  {isLoading &&
    Array.from({ length: itemsPerPage }).map((_, index) => (
      <MealCardSkeleton key={index} />
    ))
  }

  {!isLoading &&
    data.map(food => (
      <MealCard key={food._id} food={food} />
    ))
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