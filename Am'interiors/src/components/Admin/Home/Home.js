import React from 'react'
// Import Images
import Salon from '../../../Images/Salon.png';
import Terrasse from '../../../Images/Terrasse.png';

function Home() {
  return (
      <div className='lg:grid lg:grid-rows-2 lg:gap-1'>
        <div className='grid gap-4 p-4 lg:grid lg:grid-cols-2'>
       <img
          src={Salon}
          className="border-solid p-2 bg-black lg:border-solid lg:p-2 lg:bg-black"
          alt="Salon"
        />
        <img
          src={Terrasse}
          className="border-solid p-2 bg-black lg:border-solid lg:p-2 lg:bg-black"
          alt="Terrasse"
        />
        <br></br>
        <br></br>
      </div>
      <div className=''>
        <span className='lg:text-2xl lg:text-black lg:col-span-2 lg:pb-10 lg:pr-8 lg:pl-14'>
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
