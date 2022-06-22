import React from 'react'
// Import Images
import Salon from '../../../Images/Salon.png';
import Terrasse from '../../../Images/Terrasse.png';

function HomeEN() {
  return (
    <div>
    <div className='grid grid-row-2 gap-4'>
     <img
        src={Salon}
        className="border-solid ml-11 p-2 bg-black"
        alt="Salon"
      />
      <img
        src={Terrasse}
        className="border-solid mr-4 ml-11 p-2 bg-black"
        alt="Terrasse"
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
export default HomeEN;
