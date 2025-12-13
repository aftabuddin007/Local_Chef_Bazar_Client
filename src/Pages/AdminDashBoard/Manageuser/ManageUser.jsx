import React from 'react';

import useAxiosSecure from '../../../Contexts/AuthContext/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Components/Loading/Loading';
import { toast } from 'react-toastify';

const ManageUser = () => {

    const axiosSecure = useAxiosSecure()
const {data:users=[],isLoading,refetch}=useQuery({
    queryKey:['Users'],
    queryFn:async ()=>{
        const res = await axiosSecure.get(`/users`)
        // console.log(res.data)
        return res.data;
    }
})

const handleMakeFraud = async (id) => {
  try {
    const res = await axiosSecure.patch(`/users/${id}`,{
      status:'fraud',
      
    });

    if (res.data.modifiedCount > 0) {
      toast.success("User marked as fraud!");
      refetch();  
    }
  } catch (error) {
    toast.error("Failed to update!",error);
  }
}



if(isLoading){
    return <Loading></Loading>
}





    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
        <th>Role</th>
        <th>Action</th>

      </tr>
    </thead>
    <tbody>
      {
        users.map((user,i)=><tr key={user._id} className="bg-base-200">
        <th>{i+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.status}</td>
        <td>{user.role}</td>
        <td>
           {(user.role === "customer" || user.role === "chef") && user.status !== "fraud" && (
  <button
    onClick={() => handleMakeFraud(user._id)}
    className="btn btn-sm btn-secondary"
  >
    Make Fraud
  </button>
)}

        </td>
      </tr>)
      }
      
     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageUser;