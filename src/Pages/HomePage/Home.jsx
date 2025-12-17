import React from 'react';
import RecentMeal from './RecentMeal/RecentMeal';

import HomeReview from './HomeReview/HomeReview';
import { useLoaderData } from 'react-router';
import HeroBanner from './HeroBanner/HeroBanner';
import WhyChoose from './WhyChoose/WhyChoose';

const reviewPromise = fetch('http://localhost:3000/reviews')
.then(res=>res.json())
const Home = () => {
    const recentMealPromise = useLoaderData()
    // console.log(recentMealPromise)
    
    return (
        <div>
            <HeroBanner></HeroBanner>
            <WhyChoose></WhyChoose>
            <RecentMeal recentMealPromise={recentMealPromise}></RecentMeal>
            <HomeReview reviewPromise={reviewPromise}></HomeReview>
        </div>
    );
};

export default Home;