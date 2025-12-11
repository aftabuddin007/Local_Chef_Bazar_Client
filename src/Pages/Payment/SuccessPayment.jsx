import axios from 'axios';
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';

const SuccessPayment = () => {
const [searchParams]= useSearchParams()
const sessionId = searchParams.get('session_id')
useEffect(()=>{
    if(sessionId){
       const res =  axios.post('http://localhost:3000/payment-success',{sessionId});
    }
},[sessionId])



// console.log(sessionId)

    return (
        <div>
            <h2 className="text-3xl font-bold text-center">Payment is successful </h2>
        </div>
    );
};

export default SuccessPayment;