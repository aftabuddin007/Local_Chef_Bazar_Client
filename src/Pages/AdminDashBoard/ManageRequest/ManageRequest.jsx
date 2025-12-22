import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Contexts/AuthContext/useAxiosSecure';

import Swal from 'sweetalert2';

const ManageRequest = () => {
const axiosSecure = useAxiosSecure()

    const {data:requests=[],refetch}=useQuery({
        queryKey:['chef','pending'],
        queryFn:async()=>{
            const res = await axiosSecure.get('/request')
            return res.data; 
        }
    })

const updateUserStatus = (id,requestStatus)=>{
const updateInfo = {requestStatus:requestStatus}
axiosSecure.patch(`/request/${id}`,updateInfo)
.then(res=>{
    if (res.data.modifiedCount){
        refetch();
        Swal.fire({
      title: "Success",
      text: `User request has been ${requestStatus}`,
      icon: "success"
    });
// 
    }
})}
    const handleAccept = (id)=>{
updateUserStatus(id,'approved')

    }
    const handleReject = (id)=>{
updateUserStatus(id,'rejected')

    }
    return (
        <div>
  <title>LocalChefBazar Manage Request</title>

            <h2 className="text-3xl font-bold">Total Request Pending {requests.length}</h2>
            <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Request Type</th>
        <th>Request time</th>
        <th>Request status</th>
        <th>Action</th>

      </tr>
    </thead>
    <tbody>
      {
        requests.map((req,i)=><tr key={req._id} className="bg-base-200">
        <th>{i+1}</th>
        <td>{req.
userName}</td>
        <td>{req.userEmail}</td>
        <td>{req.requestType}</td>
        <td>{req.requestTime}</td>
        <td><p className={`${req.requestStatus === 'approved'?'text-green-600':'text-red-600'}`}>{req.requestStatus}</p></td>
        <td className="flex gap-4">
  {
    req.requestStatus === 'pending' && (
      <>
        <button
          onClick={() => handleAccept(req._id)}
          className="btn btn-sm btn-primary"
        >
          Accept
        </button>

        <button
          onClick={() => handleReject(req._id)}
          className="btn btn-sm btn-secondary"
        >
          Reject
        </button>
      </>
    )
  }
</td>
      </tr>)
      }
      
     
      
    </tbody>
  </table>
        </div>
    );
};

export default ManageRequest;