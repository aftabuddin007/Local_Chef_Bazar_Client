import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../Contexts/AuthContext/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { CiStar } from "react-icons/ci";
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
const MyReview = () => {
const {register, handleSubmit, reset} = useForm()

        const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
const {data:reviews=[],refetch}=useQuery({
    queryKey:['myReviews',user?.email],
    queryFn:async ()=>{
        const res = await axiosSecure.get(`/reviews?email=${user?.email}`)
        return res.data;
    }
})

const handleReviewDelete = (id)=>{
console.log(id)
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

axiosSecure.delete(`/reviews/${id}`)
.then(res=>{
   console.log(res.data) 
   if(res.data.deletedCount){
    refetch()
Swal.fire({
      title: "Deleted!",
      text: "Your review has been deleted.",
      icon: "success"
    });
   }
})

    
  }
});
}
const onSubmit = async (data)=>{
    
}
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
               <button className="btn btn-primary mr-4" onClick={()=>document.getElementById('my_modal_3').showModal()}>Edit</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>✕</button>

    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-4 rounded shadow mt-4 max-w-lg">
      <div className="mb-2">
        <label className="block font-semibold">Rating</label>
        <input
          type="number"
          step="0.1"
          min="0"
          max="5"
          {...register("rating", { required: true })}
          className="input input-bordered w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block font-semibold">Comment</label>
        <textarea
          {...register("comment", { required: true })}
          className="textarea textarea-bordered w-full"
        />
      </div>
      <button type="submit" className="btn btn-success mt-2">
        Submit Review
      </button>
    </form>
  </div>
</dialog>
                <button onClick={()=>handleReviewDelete(review._id)} className='btn sm btn-secondary'> Delete</button>
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