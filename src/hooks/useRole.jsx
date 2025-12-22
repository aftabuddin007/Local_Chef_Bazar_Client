
import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from '../Contexts/AuthContext/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {
    const {user}= useAuth();
    const axiosSecure = useAxiosSecure()
    const {isLoading:isRoleLoading,data:role ='customer'} = useQuery({
        queryKey:['user-role',user?.email],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/users/${user.email}/role`)
            // console.log(res.data) 
            return res.data.role
        }
    })
const isChef = role ==='chef'
const isAdmin = role ==='admin'


    return {role,isRoleLoading,isChef,isAdmin};
};

export default useRole;