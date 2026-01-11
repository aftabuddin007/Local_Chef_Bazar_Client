import React from 'react';
import RecentMeal from './RecentMeal/RecentMeal';

import HomeReview from './HomeReview/HomeReview';
import HeroBanner from './HeroBanner/HeroBanner';
import WhyChoose from './WhyChoose/WhyChoose';
import FAQ from './Faq/Faq';
import NewsletterSection from './Contact/ContactHome';
import BlogSection from './BlogHome/BlogHome';

const reviewPromise = fetch('https://localchefbazar-roan.vercel.app/reviews')
.then(res=>res.json())
const Home = () => {
    
    
    return (
        <div className='bg-[#FFF8F0]'>
  <title>LocalChefBazar Home</title>

            <HeroBanner></HeroBanner>
            <RecentMeal></RecentMeal>
            <WhyChoose></WhyChoose>
            <BlogSection></BlogSection>
            <HomeReview reviewPromise={reviewPromise}></HomeReview>
            <FAQ></FAQ>
            <NewsletterSection></NewsletterSection>
        </div>
    );
};

export default Home;