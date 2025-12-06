import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div>
            <div>
            <footer className="footer sm:footer-horizontal bg-gray-800 text-white  p-10">
  <aside>
<Link to ='/' className='flex gap-2'> 

    <a className="btn btn-ghost text-xl font-bold "><img src="https://i.ibb.co.com/5gShN8km/images-1-removebg-preview.png" alt="" className='h-10 w-10' /> 
    <h1 class="text-2xl font-extrabold text-purple-500 font-[Comic_Sans_MS] tracking-wide">
  <span class="italic">Paw</span><span class="not-italic">Mart</span>
</h1>
    </a>
    </Link>    <p>
      PawMart connects local pet owners and <br /> buyers for adoption and pet
care products.
      </p>
  </aside>
  <nav>
    <h6 className="footer-title">Quick Link</h6>
    <Link to='/' className="link link-hover">Home</Link>
    <Link to='/pets-supplies' className="link link-hover">Pet/Supplies</Link>
    <Link to ='/auth/login' className="link link-hover">Login</Link>
    <Link to='/auth/signup' className="link link-hover">RSignup</Link>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <Link className="link link-hover">About us</Link>
    <Link className="link link-hover">Policy</Link>
    <Link className="link link-hover">Terms Of Service</Link>
  </nav>
  <nav>
    <h6 className="footer-title">Contract Us</h6>
    <Link className=""><span className='font-bold'>Address:</span><br /> Mirpur, Dhaka</Link>
    <Link className=""><span className='font-bold'>Phone:</span><br /> +880 1723456233</Link>
    <Link className=""><span className='font-bold'>Email:</span><br />PawMart@gmail.com</Link>
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
    <p>Copyright © {new Date().getFullYear()} - All right reserved by PawMart</p>
  </aside>
</footer>
        </div>
        </div>
    );
};

export default Footer;