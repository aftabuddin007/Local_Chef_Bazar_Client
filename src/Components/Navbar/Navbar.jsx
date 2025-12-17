import { Link, NavLink } from "react-router";
import useAuth from "../../hooks/useAuth";
import Logo from "../../Shared/Logo/Logo";


const Navbar = () => {
const {user,logOut} = useAuth()

const handleLogout = ()=>{
  logOut()
}

// console.log(user)
   const navLinkClass = ({isActive})=>
  isActive?'text-[#f5bf42] underline font-bold':'hover:text-[#f5bf42] hover:underline ';


    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm max-w-7xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
        <li><NavLink to='/'className={navLinkClass}> Home</NavLink></li>
      <li><NavLink to='/meals' className={navLinkClass}>Meals</NavLink></li>
      {
        user && <>
        <li><NavLink to='/dashboard' className={navLinkClass}>Dashboard</NavLink></li>
        
        </>
      }
      
      </ul>
    </div>
    
    
<Logo></Logo>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-xl">
       <li><NavLink to='/'className={navLinkClass}> Home</NavLink></li>
       <li><NavLink to='/meals'className={navLinkClass}> Meals</NavLink></li>
      {
        user && <>
        <li><NavLink to='/dashboard' className={navLinkClass}>Dashboard</NavLink></li>
        
        </>
      }
    </ul>
  </div>
  <div className="navbar-end">
    {user?<div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
           referrerPolicy='no-referrer'
            alt="Tailwind CSS Navbar component"
            src={user && user?.photoURL} />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3  w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge px-2 py-1 bg-green-400">Active</span>
          </a>
        </li>
        <p className="font-bold">Name: {user?.displayName}</p>
        <p className="font-bold my-5">Email: {user?.email}</p>
        <button onClick={handleLogout} className="btn btn-primary">Logout</button>
      </ul>
    </div>:<Link to='/auth/login' className="btn btn-primary">Login</Link>}
  </div>
  </div>
</div>
      
    )
            
}
export default Navbar;