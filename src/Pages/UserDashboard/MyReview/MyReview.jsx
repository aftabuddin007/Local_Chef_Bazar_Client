import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../Contexts/AuthContext/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { CiStar } from "react-icons/ci";
const MyReview = () => {
        const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
const {data:reviews=[]}=useQuery({
    queryKey:['myReviews',user?.email],
    queryFn:async ()=>{
        const res = await axiosSecure.get(`/reviews?email=${user?.email}`)
        return res.data;
    }
})
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Meal Name</th>
        <th>Rating</th>
        <th>Comment</th>
        <th>Date</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        reviews.map((review,i)=> <tr key={review._id}>
        <th>{i+1}</th>
        <td>{review.mealName}</td>
        <td className='flex items-center font-bold text-yellow-500'>{review.rating} <CiStar /></td>
        <td>{review.comment}</td>
        <td>{review.date}</td>
        <td>
            <div className=''>
                <button className='btn btn-primary mr-4'>Edit</button >
                <button className='btn btn-secondary'> Delete</button>
            </div>
        </td>
        
      </tr>)
      }
     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyReview;