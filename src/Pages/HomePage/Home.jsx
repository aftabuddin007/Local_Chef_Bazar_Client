import React from 'react';
import RecentMeal from './RecentMeal/RecentMeal';
import { useLoaderData } from 'react-router';

const Home = () => {
    const recentMealPromise = useLoaderData()
    return (
        <div>
            <h2 className="text-4xl font-bold">This is home</h2>
            <RecentMeal recentMealPromise={recentMealPromise}></RecentMeal>
        </div>
    );
};

export default Home;