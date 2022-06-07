import React from 'react'
import LivingRoom from '../Images/LivingRoom.png'
// import Logo from "../Images/LogoAminterior.png"

import livingRoomModern from '../Images/LivingRoomModern.jpg'
import '../App.css'
import Formulaire from '../components/PopUp/Formulaire'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <div className="p-14">
      <div className ="text-8xl text-white text-right border-r-8 border-b-8 border-orange-800 p-4">
        <span className='font-title text-8xl text-white text-right'>AM'in</span>terior</div>
      <br></br>
      <br></br>
            
      <div className='grid grid-cols-2 gap-1 bg-orange-50/80'>

      <div className="text-3xl text-black p-6">
        Société d'aménagement d'intérieurs
      </div>

      <div class="p-3 float-right" type="button">
        <Formulaire />
      </div>

       <img
          src={LivingRoom}
          className="border-solid ml-4 p-2 bg-black inset-2.5 "
          alt="Logo"
        />
        <img
          src={livingRoomModern}
          className="border-solid p-2 bg-black inset-2.5 "
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
        
      <br></br>
      <hr></hr>
      <br></br>
      <Footer/>
      
    </div>
  )
}
export default Home
