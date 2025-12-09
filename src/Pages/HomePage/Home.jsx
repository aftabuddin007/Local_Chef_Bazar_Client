import React from 'react';
import RecentMeal from './RecentMeal/RecentMeal';
import { useLoaderData } from 'react-router';
import HomeReview from './HomeReview/HomeReview';


const reviewPromise = fetch('http://localhost:3000/reviews')
.then(res=>res.json())
const Home = () => {
    const recentMealPromise = useLoaderData()
    return (
        <div>
            <h2 className="text-4xl font-bold">This is home</h2>
            <RecentMeal recentMealPromise={recentMealPromise}></RecentMeal>
            <HomeReview reviewPromise={reviewPromise}></HomeReview>
        </div>
    );
};

export default Home;