import React from 'react';
import  { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { toast } from 'react-toastify';
import { imageUpload } from '../../../utils';
import Loading from '../../../Components/Loading/Loading';
import useAxiosSecure from '../../../Contexts/AuthContext/useAxiosSecure';
import Logo from '../../../Shared/Logo/Logo';
const Register = () => {
    const [show,setShow]=useState(false)
    const {register,
    handleSubmit,
    watch,
    formState: { errors },} = useForm();
    const password = watch('password')
    const {registerUser,updateUserProfile,signInWithGoogle,loading}=useAuth()
    const navigate = useNavigate()
    const location = useLocation()
  const from = location.state || '/'

const axiosSecure = useAxiosSecure()


const handleRegistration = async (data)=>{
    const {name,email,image,password,address}=data
    const imageFile = image[0]
    // console.log(data)
    try {
      
      const imageURL = await imageUpload(imageFile)


     
      const result = await registerUser(email, password)

     
      await updateUserProfile(name, imageURL)
const userInfo = {
      name,
      email,
      address,
      image: imageURL,
      status:'active',
      role: "customer",   // optional
      createdAt: new Date()
}
await axiosSecure.post('/users',userInfo)
.then(res=>{
  if(res.data.insertedId){
    console.log('user create successfully')
  }
})


      toast.success('Signup Successful')
      navigate(from, { replace: true })

      console.log(result)
    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    }
  }

 const handleGoogleSignIn = async ()=>{
    try{
await signInWithGoogle()
navigate(from,{replace:true})
toast.success('Signin Successful')
    }
    catch (err){
console.log(err)
toast.error(err.message)
    }
 }

if(loading){
    <Loading></Loading>
 }


    return (
        <div className=' min-h-screen flex items-center justify-center 
bg-[url(https://i.ibb.co.com/Pv4wB7GS/252811-melbourne-restaurants-LAY.png)] bg-cover bg-center bg-no-repeat relative'>
             <div className=''>
                    <title>LocalChefBazar- Sign Up</title>
  <div className="absolute inset-0 bg-black/50"></div>

             <div className='my-10'>
           <div className='relative z-10 w-full max-w-sm 
  bg-white/25 backdrop-blur-xl
  border border-white/30
  shadow-[0_25px_70px_rgba(0,0,0,0.45)]
  rounded-2xl '>
                <form 
                onSubmit={handleSubmit(handleRegistration)}
                 className='items-center justify-center flex  '>

                           <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
                 <div className="card-body  relative z-10 card w-full max-w-sm shadow-2xl rounded-2xl">
                   
                              <Logo></Logo>
                   <h1 className="text-3xl font-bold text-center text-white mb-4">Create your Account</h1>
                   <fieldset className="fieldset">
                    {/* name */}
                     <label className="label font-bold">Name</label>
                     <input {...register('name',{required:true})}  type="text" className="input w-full" placeholder="Name"  />
                     {/* email */}
                     <label className="label font-bold">Email</label>
                     <input {...register("email", {
    required: "Email is required",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Please enter a valid email address",
    },
  }
                        
                     )} type="email" className="input w-full" placeholder="Email" />

                       {errors.email && (
                <p className='text-red-500 text-xs mt-1'>
                  {errors.email.message}
                </p>
              )}
              {/* address */}
<label className="label font-bold">Address</label>
                     <input {...register('address',{required:true})}  type="text" className="input w-full" placeholder="Address"  />
{/* photo */}
                     <label className="label font-bold">Photo URL</label>
                    <input
                name='image'
                type='file'
                id='image'
                accept='image/*'
                className='input w-full  text-gray-500 cursor-pointer'
                {...register('image')}
              />
               {/* password */}
                     <div className="relative">
  <label className="label font-bold">Password</label>

  <input
    type={show ? "text" : "password"}
    className="input w-full"
    placeholder="Password"
    {...register("password", {
      required: "Password is required",

      minLength: {
        value: 6,
        message: "Password must be at least 6 characters",
      },

      pattern: {
        value:
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        message:
          "Password must include uppercase, lowercase, number & special character",
      },
    })}
  />

  {/* ERROR MESSAGE */}
  {errors.password && (
    <p className="text-red-500 text-xs mt-1">
      {errors.password.message}
    </p>
  )}

  {/* Show / Hide Eye Icon */}
  <span
    onClick={() => setShow(!show)}
    className="absolute right-7 top-8 cursor-pointer z-50"
  >
    {show ? <FaRegEye /> : <FaEyeSlash />}
  </span>
</div>
{/* confirm password */}
 <div className="relative">
  <label className="label font-bold">Confirm Password</label>

  <input
    type={show ? "text" : "password"}
    className="input w-full"
    placeholder="Confirm Password"
    {...register("confirmPassword", {
      required: "Confirm Password is required",
      validate: (value) =>
        value === password || "Passwords do not match",
    })}
  />

  {errors.confirmPassword && (
    <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
  )}

  <span onClick={() => setShow(!show)} className="absolute right-7 top-8 cursor-pointer">
    {show ? <FaRegEye /> : <FaEyeSlash />}
  </span>
</div>
                        {
                    //  passwordError && 
                    //  <p className='text-red-500 text-xs'>{passwordError}</p>
                }
                     <button type='submit' className="btn btn-primary text-white mt-4">Sign Up</button>

                    <p className='text-center font-bold text-md'>Or</p>
          <div className='text-center  '>
            {/* Google */}
<button 
onClick={handleGoogleSignIn} 
className="btn bg-white text-black border-[#e5e5e5] w-full">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Create with Google
</button></div>


<p className='text-center mt-4 font-semibold  '> Have an account?  <Link to='/auth/login' className='text-red-600'>Login</Link></p>
                   </fieldset>
                 </div>
               </div>
                       </form>
                   </div>
        </div>
        </div>
        </div>
    );
};

export default Register;