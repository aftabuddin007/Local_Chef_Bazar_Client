import { createBrowserRouter } from 'react-router';
import MainHome from '../Layouts/MainHomePage/MainHome';
import AuthLayout from '../Components/AuthLayout/AuthLayout';
import Login from '../Pages/Authentication/Login/Login';
import Register from '../Pages/Authentication/Register/Register';
import Home from '../Pages/HomePage/Home';
import Meals from '../Pages/Meals/Meals';
import DashboardLayout from '../Layouts/DashboardLayout/DashboardLayout';
import Loading from '../Components/Loading/Loading';


    const router = createBrowserRouter([
{
    path:'/',
    element:<MainHome></MainHome>,
    children:[{
        path:'/',
        element:<Home></Home>
    },{
        path:'/meals',
        element:<Meals></Meals>,
        loader:()=>fetch('http://localhost:3000/meals'),
        hydrateFallbackElement:<Loading></Loading>
    }]
},{
path:'/dashboard',
element:<DashboardLayout></DashboardLayout>
}



,{
    path:'/auth',
    Component:AuthLayout,
    children:[
        {
            path:'/auth/login',
            element:<Login></Login>
        },
        {
            path:'/auth/register',
            element:<Register></Register>
        }
    ]
}
    ])
   

export default router