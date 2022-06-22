import React from 'react';

// import components 
import NavigationAdmin from '../../components/Admin/Dashboard'

function Dashboard() {
  return (
    <div className="p-4">
      <h1 className='text-8xl text-white text-right border-r-4 border-b-4 border-orange-100/75 p-4'>Dashboard !</h1>
        <div className="text-xl text-white text-center p-2">
        {/* TITLE */}
        <span className="font-title text-xl text-white text-center">AM'in</span>
        terior
        </div>

        <NavigationAdmin/>
    </div>
  )
}

export default Dashboard;