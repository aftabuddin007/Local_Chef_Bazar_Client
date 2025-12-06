import React from 'react';
import Loading from '../Components/Loading/Loading';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children}) => {
     const {user,loading} = useAuth;

    const location = useLocation()


if(loading){
    return <Loading></Loading>
}

    if(user && user.email){
        return children;
    }




    return <Navigate state={location?.pathname} to='/auth/login'> </Navigate>
};

export default PrivateRoute;