import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../Contexts/AuthContext/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const MyFavouriteMeal = () => {
        const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
const {data:favorites=[],refetch}=useQuery({
    queryKey:['myReviews',user?.email],
    queryFn:async ()=>{
        const res = await axiosSecure.get(`/favorites?email=${user?.email}`)
        return res.data;
    }
})

const handleMealDelete = (id)=>{
// console.log(id)
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to Delete this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

axiosSecure.delete(`/favorites/${id}`)
.then(res=>{
  //  console.log(res.data) 
   if(res.data.deletedCount){
    refetch()
Swal.fire({
      title: "Deleted!",
      text: "Your Favorite Meal has been deleted.",
      icon: "success"
    });
   }
})

    
  }
});
}





    return (
        <div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Meal Name</th>
        <th>Chef Name</th>
        <th>Price</th>
        <th>Date</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        favorites.map((favorite,i)=><tr key={favorite._id} className="bg-base-200">
        <th>{i+1}</th>
        <td>{favorite.mealName}</td>
        <td>{favorite.chefName}</td>
        <td>{favorite.price}</td>
        <td>{favorite.addedTime}</td>
        <td>
            <button onClick={()=>handleMealDelete(favorite._id)} className='btn btn-secondary'>Delete</button>
        </td>

      </tr>)
      }
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyFavouriteMeal;