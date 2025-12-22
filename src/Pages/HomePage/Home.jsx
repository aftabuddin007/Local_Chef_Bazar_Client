import React from 'react';
import RecentMeal from './RecentMeal/RecentMeal';

import HomeReview from './HomeReview/HomeReview';
import HeroBanner from './HeroBanner/HeroBanner';
import WhyChoose from './WhyChoose/WhyChoose';

const reviewPromise = fetch('https://localchefbazar-roan.vercel.app/reviews')
.then(res=>res.json())
const Home = () => {
    
    
    return (
        <div className='bg-[#FFF8F0]'>
  <title>LocalChefBazar Home</title>

            <HeroBanner></HeroBanner>
            <RecentMeal></RecentMeal>
            <WhyChoose></WhyChoose>
            <HomeReview reviewPromise={reviewPromise}></HomeReview>
        </div>
    );
};

export default Home;