// import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import MealCard from '../../Components/MealCard/MealCard';

const Meals = () => {
    const data = useLoaderData()

    // console.log(data)
    // const [foods,setFoods] = useState(data)
    // const [loading,setLoading] = useState(false)
    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-4xl font-bold text-center'>All Meals</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-10 mb-20'>
        {
            data.map(food=><MealCard key={food._id} food={food}></MealCard>)
        }
            </div>

        </div>
    );
};

export default Meals;