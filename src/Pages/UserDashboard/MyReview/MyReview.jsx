import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../Contexts/AuthContext/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { CiStar } from "react-icons/ci";
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
// import { toast } from 'react-toastify';
const MyReview = () => {
     const [selectedReview, setSelectedReview] = useState(null);
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
  //  console.log(res.data) 
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

const onSubmit = async (data) => {
    if (!selectedReview) return;
    const res = await axiosSecure.patch(`/reviews/${selectedReview._id}`, data);
    console.log(res.data)
    if (res.data.modifiedCount) {
      Swal.fire("Updated!", "Your review has been updated.", "success");
      // toast.success('Your review has been updated.')
      refetch();
      document.getElementById('editModal').close();
    }
  };

  // Open modal and set selected review
  const openEditModal = (review) => {
    setSelectedReview(review);
    reset({ rating: review.rating, comment: review.comment });
    document.getElementById('editModal').showModal();
  };




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
                                <button className="btn btn-primary mr-2" onClick={() => openEditModal(review)}>Edit</button>


                <button onClick={()=>handleReviewDelete(review._id)} className='btn sm btn-secondary'> Delete</button>
            </div>
        </td>
        
      </tr>)
      }
     
      
    </tbody>
  </table>
 
</div>
 <dialog id="editModal" className="modal">
        <div className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={() => document.getElementById('editModal').close()}>✕</button>
          <form onSubmit={handleSubmit(onSubmit)} className="p-4">
            <div className="mb-2">
              <label>Rating</label>
              <input type="number" step="0.1" min="0" max="5" {...register("rating")} className="input input-bordered w-full" />
            </div>
            <div className="mb-2">
              <label>Comment</label>
              <textarea {...register("comment")} className="textarea textarea-bordered w-full" />
            </div>
            <button type="submit" className="btn btn-success w-full mt-2">Update Review</button>
          </form>
        </div>
      </dialog>
        </div>
    );
};

export default MyReview;