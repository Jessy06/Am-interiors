import React from 'react'
// Import Images
import Salon from '../../../Images/Salon.png';
import Terrasse from '../../../Images/Terrasse.png';

function Home() {
  return (
        
      <div className='grid grid-rows-2 gap-1'>

        <div className='grid lg:grid-cols-2'>
       <img
          src={Salon}
          className="border-solid p-2 bg-black lg:bg-black lg:border-solid"
          alt="Salon"
        />
        <img
          src={Terrasse}
          className="border-solid  p-2 bg-black lg:bg-black lg:border-solid"
          alt="Terrasse"
        />
        </div>
        <br></br>
        <br></br>
        <div>
      
        <span className='text-2xl text-black col-span-2 pb-10 pr-8 pl-14'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis
          imperdiet quam, eu commodo justo volutpat et. Pellentesque vel
          tincidunt mauris, porta feugiat odio. Quisque dui tellus, lobortis vel
          dui id, sollicitudin mollis ligula. Praesent aliquam auctor erat at
          semper. Cras non euismod odio. Suspendisse et facilisis diam. Mauris a
          neque tempor, mattis urna vel, tempus sapien. In id quam mattis,
          tincidunt erat sit amet, hendrerit justo.
        </span>
        </div>
        <br></br>
        </div>
      
  )
}
export default Home
