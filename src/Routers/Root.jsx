import { createBrowserRouter } from 'react-router';
import MainHome from '../Layouts/MainHomePage/MainHome';
import AuthLayout from '../Components/AuthLayout/AuthLayout';
import Login from '../Pages/Authentication/Login/Login';
import Register from '../Pages/Authentication/Register/Register';
import Home from '../Pages/HomePage/Home';
import Meals from '../Pages/Meals/Meals';
import DashboardLayout from '../Layouts/DashboardLayout/DashboardLayout';
import Loading from '../Components/Loading/Loading';
import MealDetails from '../Pages/MealDetails/MealDetails';
import OrderForm from '../Pages/OrderForm/OrderForm';
import MyOrder from '../Pages/UserDashboard/MyOrder/MyOrder';
import MyReview from '../Pages/UserDashboard/MyReview/MyReview';
import MyFavouriteMeal from '../Pages/UserDashboard/MyFavouriteMeal/MyFavouriteMeal';
import MyProfile from '../Pages/MyProfile/MyProfile';
import SuccessPayment from '../Pages/Payment/SuccessPayment';
import CancelPayment from '../Pages/Payment/CancelPayment';
import CreateMeal from '../Pages/ChefDashboard/CreateMeal/CreateMeal';
import MyMeal from '../Pages/ChefDashboard/MyMeal/MyMeal';
import UpdateMeal from '../Pages/ChefDashboard/UpdateMeal/UpdateMeal';
import OrderRequest from '../Pages/ChefDashboard/OrderRequest/OrderRequest';
import ManageRequest from '../Pages/AdminDashBoard/ManageRequest/ManageRequest';
import ManageUser from '../Pages/AdminDashBoard/Manageuser/ManageUser';
import PlatformStatistics from '../Pages/AdminDashBoard/PlatformStatistics/PlatformStatistics';
import Error from '../Shared/Error/Error';
import PrivateRoute from './PrivateRoute';


    const router = createBrowserRouter([
{
    path:'/',
    element:<MainHome></MainHome>,
    children:[{
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:3000/recent-meal'),
        

    },{
        path:'/meals',
        element:<Meals></Meals>,
       
    },{
        path:'/meal-details/:id',
        element:<MealDetails></MealDetails>
    },{
        path:'/order-form/:id',
        element:<OrderForm></OrderForm>
    }]
},{
path:'/dashboard',
element:<PrivateRoute>
    <DashboardLayout></DashboardLayout>
</PrivateRoute> ,
children:[
    {
        path:'myProfile',
        element:<MyProfile></MyProfile>
    },
    {
        path:'myOrder',
        element:<MyOrder></MyOrder>
    },
    {
        path:'myReview',
        element:<MyReview></MyReview>
    },
    {
        path:'myFavMeal',
        element:<MyFavouriteMeal></MyFavouriteMeal>
    },{
        path:'payment-success',
        element:<SuccessPayment></SuccessPayment>
    },{
        path:'payment-cancel',
        element:<CancelPayment></CancelPayment>
    },{
        path:'create-meal',
        element:<CreateMeal></CreateMeal>
    },{
        path:'my-meal',
        element:<MyMeal></MyMeal>
    },{
        path:'update-meal/:id',
        element:<UpdateMeal></UpdateMeal>
    },{
        path:'order-request',
        element:<OrderRequest></OrderRequest>
    },{
        path:'manage-request',
        element:<ManageRequest></ManageRequest>
    },{
        path:'manage-user',
        element:<ManageUser></ManageUser>
    },{
        path:'platform-statistics',
        element:<PlatformStatistics></PlatformStatistics>
    }
]
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
},{
    path:'/*',
    element:<Error></Error>
}
    ])
   

export default router