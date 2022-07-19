import React from 'react'
// Import Images
import Salon from '../../../Images/Salon.png';
import Terrasse from '../../../Images/Terrasse.png';

function Home() {
  return (
        
      <div className='grid gap-1 p-4'>

        <div className='grid lg:grid-cols-2 gap-4 lg:place-items-center'>
       <img
          src={Salon}
          className="border-solid  p-1 lg:bg-black lg:border-solid bg-black"
          alt="Salon"
        />
        <img
          src={Terrasse}
          className="border-solid p-1 lg:bg-black lg:border-solid bg-black"
          alt="Terrasse"
        />
        </div>
        <br></br>
        <br></br>
        </div>
      
  )
}
export default Home
