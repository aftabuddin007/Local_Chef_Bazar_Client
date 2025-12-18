import axios from 'axios';
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { Link } from 'react-router';
import { CheckCircle } from 'lucide-react';
const SuccessPayment = () => {
const [searchParams]= useSearchParams()
const sessionId = searchParams.get('session_id')
useEffect(()=>{
    if(sessionId){
const savePayment = async () => {
        try {
          const res = await axios.post(
            'http://localhost:3000/payment-success',
            { sessionId }
          );
          console.log('Payment updated:', res.data);
        } catch (err) {
          console.error('Payment update failed:', err);
        }
      };

      savePayment();    }
},[sessionId])



// console.log(sessionId)

    return (
       
 
    <div className="min-h-screen flex items-center justify-center bg-slate-50 font-poppins px-4">
      <div className="card w-full max-w-sm bg-white shadow-lg p-8 text-center rounded-2xl">
        
        {/* Simple Green Icon */}
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-20 h-20 text-green-500" />
        </div>

        {/* Success Text */}
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Order Placed!</h2>
        <p className="text-slate-500 mb-8">
          Your payment was successful. The chef is now preparing your fresh meal.
        </p>

        {/* Primary Action Button */}
        <Link to="/" className="btn btn-success text-white w-full rounded-lg">
          Back to Home
        </Link>
        </div>
      
        </div>
    );
}

export default SuccessPayment;