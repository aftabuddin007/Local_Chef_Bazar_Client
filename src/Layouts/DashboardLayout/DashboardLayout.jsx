import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
// import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import DashboardMain from './DashboardMain/DashboardMain';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            {/* <Outlet></Outlet> */}
<DashboardMain></DashboardMain>
            <Footer></Footer>
            
        </div>
    );
};

export default DashboardLayout;