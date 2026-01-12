import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../Contexts/AuthContext/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { imageUpload } from '../../utils';

const MyProfile = () => {
    const{user}=useAuth()
const axiosSecure = useAxiosSecure()
 const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

 const [formData, setFormData] = useState({
    name: '',
    address: '',
    imageFile: null,
  });



const {data:profiles=[],refetch}=useQuery({
    queryKey:['myProfiles',user?.email],
    queryFn:async ()=>{
        const res = await axiosSecure.get(`/user?email=${user?.email}`)
        return res.data;
        
      }
    })
    // console.log(profiles)
  const profile = profiles[0] || {};

 const handleEditClick = () => {
    setFormData({
      name: profile?.name || '',
      address: profile?.address || '',
      imageFile: null,
    });
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image') {
      setFormData({ ...formData, imageFile: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      let imageUrl = profile?.image;

      if (formData.imageFile) {
        imageUrl = await imageUpload(formData.imageFile);
      }

      const updatedProfile = {
        name: formData.name,
        address: formData.address,
        image: imageUrl,
      };

      const res = await axiosSecure.patch(
        `/users/profile/${profile.email}`,
        updatedProfile
      );

      if (res.data.success) {
        toast.success(res.data.message);
        refetch();
        setIsEditing(false);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error('Profile update failed');
    } finally {
      setLoading(false);
    }
  };






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
const isEditDisabled = !!profile?.pendingRequestRole;



  return (


    
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Title */}
  <title>LocalChefBazar My Profile</title>

      <h2 className="text-2xl font-bold">My Profile</h2>

      {/* Top Card */}
      <div className="bg-base-100 shadow rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
        <img
          src={profile?.image}
          alt="User"
          className="w-28 h-28 rounded-full object-cover border"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold">{profile?.name}</h3>
          <p className="text-base-600 capitalize">{profile?.role}</p>
          <p className="text-base-500">{profile?.address}</p>
        </div>
      </div>

      {/* Personal Info Card */}
      <div className="bg-base-100 shadow rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-base-500 text-sm">Full Name</p>
            <p className="font-medium">{profile?.name}</p>
          </div>

          <div>
            <p className="text-base-500 text-sm">Email Address</p>
            <p className="font-medium">{profile?.email}</p>
          </div>

          <div>
            <p className="text-base-500 text-sm">User Role</p>
            <p className="font-medium capitalize">{profile?.role}</p>
          </div>

          <div>
            <p className="text-base-500 text-sm">User Status</p>
            <p className="font-medium capitalize">{profile.status}</p>
          </div>

          {profile.role === "chef" && (
            <div className="col-span-1 sm:col-span-2">
              <p className="text-base-500 text-sm">Chef ID</p>
              <p className="font-medium">{profile.chefId}</p>
            </div>
          )}
        </div>
      </div>

      {/* Address Card */}
      <div className="bg-base-100 shadow rounded-2xl p-6">
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
<div className="bg-base-100 shadow rounded-2xl p-6">
  <h3 className="text-lg font-semibold mb-4">
    {isEditing ? 'Edit Profile' : 'Profile Actions'}
  </h3>

  {!isEditing ? (
    <button
      onClick={handleEditClick}
      className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700"
    >
      Edit Profile
    </button>
  ) : (
    <form onSubmit={handleUpdateProfile} className="space-y-4">
      <div>
        <label className="text-sm text-base-500">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
      </div>

      <div>
        <label className="text-sm text-base-500">Profile Image</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="file-input file-input-bordered w-full"
        />
      </div>

      <div>
        <label className="text-sm text-base-500">Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 disabled:opacity-50"
        >
          {loading ? 'Saving...' : 'Save Changes'}
        </button>

        <button
          type="button"
          onClick={() => setIsEditing(false)}
          className="px-4 py-2 bg-gray-400 text-white rounded-xl"
        >
          Cancel
        </button>
      </div>
    </form>
  )}
</div>
      </div>
    



    );
};

export default MyProfile;