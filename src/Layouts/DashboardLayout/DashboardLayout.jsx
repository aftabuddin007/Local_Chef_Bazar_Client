import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-4xl font-bold text-center'>This is dashboard</h2>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default DashboardLayout;