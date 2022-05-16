import React from 'react';

// import components 
import NavigationAdmin from '../../components/Admin/leftfilter'


function Dashboard() {
  return (
    <div className="p-14">
      <h1 className='text-8xl text-white text-right border-r-4 border-b-4 border-orange-100/75 p-4'>Hi, buddy ! Dashboard !</h1>
      <NavigationAdmin/>
    </div>
  )
}

export default Dashboard;