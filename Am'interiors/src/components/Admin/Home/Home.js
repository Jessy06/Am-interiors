import React from 'react'
// Import Images
import LivingRoom from '../../../Images/LivingRoom.png';
import LivingRoomModern from '../../../Images/LivingRoomModern.jpg'

function Home() {
  return (
        <div>
      <div className='grid grid-row-2 gap-1'>
       <img
          src={LivingRoom}
          className="border-solid ml-11 p-2 bg-black"
          alt="Logo"
        />
        <img
          src={LivingRoomModern}
          className="border-solid mr-3 ml-9 p-2 bg-black "
          alt="Livingroom"
        />
        <br></br>
        <br></br>
      
        <span className='text-2xl text-black col-span-2 pb-10 pr-8 pl-14'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis
          imperdiet quam, eu commodo justo volutpat et. Pellentesque vel
          tincidunt mauris, porta feugiat odio. Quisque dui tellus, lobortis vel
          dui id, sollicitudin mollis ligula. Praesent aliquam auctor erat at
          semper. Cras non euismod odio. Suspendisse et facilisis diam. Mauris a
          neque tempor, mattis urna vel, tempus sapien. In id quam mattis,
          tincidunt erat sit amet, hendrerit justo.
        </span>
        <br></br>
        </div>
        </div>
  )
}
export default Home
