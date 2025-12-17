import React from 'react';
import { Link } from 'react-router';
import logo1 from '../../assets/logo1.png'
const Logo = () => {
    return (
        <div>
            <Link to='/'>
  <a className="btn btn-ghost flex items-center gap-2 transition-all hover:scale-105">
    {/* Logo Image */}
    <img src={logo1} alt="LocalChefBazar Logo" className="h-10 sm:h-16 w-auto object-contain" />
    
    {/* Styled Brand Name */}
    <span className="text-xl sm:text-3xl font-bold tracking-tight">
      <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-red-500 bg-clip-text text-transparent" 
            style={{ fontFamily: "'Playball', cursive" }}>
        LocalChef
      </span>
      <span className="text-slate-700" style={{ fontFamily: "'Playball', cursive" }}>
        Bazar
      </span>
    </span>
  </a>
</Link>
        </div>
    );
};

export default Logo;