

import { Link } from "react-router";
import MealCard from "../../../Components/MealCard/MealCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Contexts/AuthContext/useAxiosSecure";
import Loading from "../../../Components/Loading/Loading";


const RecentMeal = () => {
    const axiosSecure = useAxiosSecure()
   const {data:recentMealPromise=[],isLoading}=useQuery({
    queryKey:['recent-meals',],
    queryFn:async ()=>{
        const res = await axiosSecure.get(`/recent-meal`)
        
        return res.data;
    }
})
if(isLoading){
    return <Loading></Loading>
}
    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-4xl font-bold text-center my-10'>Our Popular Meal</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-10 mb-20'>
        {
            recentMealPromise?.map(food=><MealCard key={food._id} food={food}></MealCard>)
        }
            </div>
<div className="text-center my-7"><Link to='/meals' className="btn btn-primary">See More</Link> </div>
        </div>
    );
};

export default RecentMeal;