import React from 'react';
import { Link } from 'react-router';
import Logo from '../../Shared/Logo/Logo';

const Footer = () => {
    return (
        <div>
            <div>
            <footer className="footer sm:footer-horizontal bg-gray-800 text-white  p-10">
  <aside>
<Logo></Logo>
        <p className="max-w-xs text-sm opacity-80 leading-relaxed">
      LocalChefBazar connects food lovers with <br /> 
      talented home chefs for fresh, authentic, <br />
      and homemade culinary experiences.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Quick Link</h6>
    <Link to='/' className="link link-hover">Home</Link>
    <Link to='/meals' className="link link-hover">Meals</Link>
    <Link to ='/auth/login' className="link link-hover">Login</Link>
    <Link to='/auth/signup' className="link link-hover">Signup</Link>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <Link className="link link-hover">About us</Link>
    <Link className="link link-hover">Policy</Link>
    <Link className="link link-hover">Terms Of Service</Link>
  </nav>
  <nav>
    <h6 className="footer-title">Contract Us</h6>
    <Link className=""><span className='font-bold'>Address:</span><br />Uttara, Dhaka</Link>
    <Link className=""><span className='font-bold'>Phone:</span><br /> +880 1723456233</Link>
    <Link className=""><span className='font-bold'>Email:</span><br />infoChef@gmail.com</Link>
    <Link className=""><span className='font-bold'>Opening Hour</span><br />8:30AM to 12:00AM</Link>
    <Link className=""><span className='font-bold'>Social:</span><br />
    <div className='flex gap-2 items-center mt-2 '>
      <Link className='bg-white' to='https://www.facebook.com/aftab.ahme.2025'><img src="https://img.icons8.com/material-rounded/24/facebook-new.png" alt="" /></Link>
      <Link className='bg-white' to='https://www.pinterest.com/aftabhasan7856/'><img src="https://img.icons8.com/material-rounded/24/pinterest--v1.png" alt="" /></Link>
      <Link className='bg-white' to='https://www.instagram.com/a_f_t_a_b_5_3?igsh=amdsZWswZXkycWg3'><img src="https://img.icons8.com/material-outlined/24/instagram-new--v1.png" alt="" /></Link>
    </div>
    </Link>
    
  </nav>
</footer>
<footer className="footer sm:footer-horizontal footer-center bg-gray-800  text-white p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by LocalChefBazar</p>
  </aside>
</footer>
        </div>
        </div>
    );
};

export default Footer;