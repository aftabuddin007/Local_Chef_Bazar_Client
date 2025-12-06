import React from 'react';
import { useLoaderData } from 'react-router';

const Meals = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <h2 className='text-4xl font-bold text-center'>All Meals</h2>

        </div>
    );
};

export default Meals;