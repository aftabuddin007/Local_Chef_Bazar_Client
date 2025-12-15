import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from '../Contexts/AuthContext/useAxiosSecure';

const useRole = () => {
    const {user}= useAuth();
    const axiosSecure = useAxiosSecure()
    const {isLoading,data:role ='customer'} = useQuery({
        queryKey:['user-role',user?.email],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/users/${user.email}/role`)
            // console.log(res.data) 
            return res.data.role
        }
    })
    return {role,isLoading}
};

export default useRole;