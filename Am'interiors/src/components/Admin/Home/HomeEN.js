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
    
      </div>
        </div>
  )
}
export default HomeEN;
