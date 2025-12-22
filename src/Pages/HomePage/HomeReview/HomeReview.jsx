import React, { use } from 'react';
import Review from '../Review/Review';
import Marquee from "react-fast-marquee"; 

const HomeReview = ({ reviewPromise }) => {
    const reviews = use(reviewPromise);

    return (
        <div className='mb-10 bg-gray-50 py-10'>
            <h2 className='text-3xl font-bold text-center mb-12 text-slate-800'>
                What Our Happy Customers Say?
            </h2>

          
            <Marquee 
                pauseOnHover={true} 
                speed={100} 
                gradient={true} 
                gradientColor="#f9fafb" 
                gradientWidth={100}
            >
                {reviews.map((r, index) => (
                    <div key={index} className="mx-4 w-[320px] md:w-[450px]">
                        <Review 
                            reviewerName={r.reviewerName}
                            reviewerImage={r.reviewerImage}
                            rating={r.rating}
                            comment={r.comment}
                            date={r.date}
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default HomeReview;