import React from 'react'
import SideNav from './_components/SideNav.jsx'
import DashboardHeader from "./_components/DashboardHeder.jsx";
function Dashboardlayout({children}) {
  return (
    <div>
      <div className='fixed md:w-64 hidden md:block'>
        <SideNav />
      </div>
      <div className='md:ml-64'>
        <DashboardHeader/>
        {children}
      </div>
    </div>
  );
}

export default Dashboardlayout
