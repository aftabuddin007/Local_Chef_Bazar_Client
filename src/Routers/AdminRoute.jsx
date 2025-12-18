import React from 'react';
import { useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';
import Loading from '../Components/Loading/Loading';

const AdminRoute = ({children}) => {
const navigate = useNavigate()
const {user} = useAuth()
const {isRoleLoading,isAdmin}= useRole()

if(isRoleLoading){
    return <Loading></Loading>
}
if(user && isAdmin){
    return children
}

return navigate('/')
     
};

export default AdminRoute;