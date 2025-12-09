import React, { use } from 'react';
import Review from '../Review/Review';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
const HomeReview = ({reviewPromise}) => {
    const reviews = use(reviewPromise)
    
 



    return (
        <div>
            <h2 className='text-3xl font-bold text-center'>Our Customer Review</h2>

            <Swiper
 effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
            loop:true,
            spaceBetween:30,
          rotate: 30,
          stretch: '50%',
          depth: 200,
          modifier: 1,
          scale:0.75,
          slideShadows: true,
            
       
         
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
            > 
{/* {
    reviews.map(revie=><SwiperSlide key={revie.id}>
    <ReviewCard revie={revie}></ReviewCard>
        </SwiperSlide>)
} */}
{
      reviews.map(r=><SwiperSlide key={r.id}>
<Review 
      key={r._id}
      reviewerName={r.reviewerName}
      reviewerImage={r.reviewerImage}
      rating={r.rating}
      comment={r.comment}
      date={r.date}
      ></Review>
      </SwiperSlide>
       )
    }






            </Swiper>





















        </div>
    );
};

export default HomeReview;