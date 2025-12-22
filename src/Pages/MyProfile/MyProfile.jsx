import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../Contexts/AuthContext/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const MyProfile = () => {
    const{user}=useAuth()
const axiosSecure = useAxiosSecure()
const {data:profiles=[],refetch}=useQuery({
    queryKey:['myProfiles',user?.email],
    queryFn:async ()=>{
        const res = await axiosSecure.get(`/user?email=${user?.email}`)
        return res.data;
        
      }
    })
    // console.log(profiles)
  const profile = profiles[0] || {};
  // console.log(profile)
    const handleRequest = async(type)=>{
    const requestData = {
    userName: profile.name,
    userEmail: profile.email,
    requestType: type,
  };
  const res = await axiosSecure.post('/request',requestData)
  if(res.data.success){
    refetch()
    toast.success(res.data.message)
  }else {
      toast.error(res.data.message);
    }
    }
    const isChefDisabled =
  profile?.pendingRequestRole === 'chef' || profile?.role === 'chef';

const isAdminDisabled =
  profile?.pendingRequestRole === 'admin' || profile?.role === 'admin';

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Title */}
  <title>LocalChefBazar My Profile</title>

      <h2 className="text-2xl font-bold">My Profile</h2>

      {/* Top Card */}
      <div className="bg-white shadow rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
        <img
          src={profile?.image}
          alt="User"
          className="w-28 h-28 rounded-full object-cover border"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold">{profile?.name}</h3>
          <p className="text-gray-600 capitalize">{profile?.role}</p>
          <p className="text-gray-500">{profile?.address}</p>
        </div>
      </div>

      {/* Personal Info Card */}
      <div className="bg-white shadow rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500 text-sm">Full Name</p>
            <p className="font-medium">{profile?.name}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Email Address</p>
            <p className="font-medium">{profile?.email}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">User Role</p>
            <p className="font-medium capitalize">{profile?.role}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">User Status</p>
            <p className="font-medium capitalize">{profile.status}</p>
          </div>

          {profile.role === "chef" && (
            <div className="col-span-1 sm:col-span-2">
              <p className="text-gray-500 text-sm">Chef ID</p>
              <p className="font-medium">{profile.chefId}</p>
            </div>
          )}
        </div>
      </div>

      {/* Address Card */}
      <div className="bg-white shadow rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-4">Address</h3>
        <p className="font-medium">{profile.address}</p>
      </div>

      {/* Buttons */}
      <div className='flex gap-10'>
      {profile.status === 'active' && profile.role !== 'chef' && profile.role !== 'admin' && (
  <button
    onClick={() => handleRequest('chef')}
    disabled={isChefDisabled}
    className={`px-4 py-2 rounded-xl text-white cursor-pointer
      ${isChefDisabled
        ? 'bg-gray-400 cursor-not-allowed'
        : 'bg-blue-600 hover:bg-blue-700'
      }`}
  >
    {profile.pendingRequestRole === 'chef' ? 'Request Pending' : 'Be a Chef'}
  </button>
)}


        {profile.status === 'active' && profile.role !== 'admin' && (
  <button
    onClick={() => handleRequest('admin')}
    disabled={isAdminDisabled}
    className={`px-4 py-2 rounded-xl text-white cursor-pointer
      ${isAdminDisabled
        ? 'bg-gray-400 cursor-not-allowed'
        : 'bg-green-600 hover:bg-green-700'
      }`}
  >
    {profile.pendingRequestRole === 'admin' ? 'Request Pending' : 'Be an Admin'}
  </button>
)}
</div>
      </div>
    



    );
};

export default MyProfile;