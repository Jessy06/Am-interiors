import React from 'react'
import LivingRoom from '../Images/Livingroom.png'
// import Logo from "../Images/LogoAminterior.png"

import livingRoomModern from '../Images/livingRoomModern.jpg'
import '../App.css'
import Formulaire from '../components/PopUp/Formulaire'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <div className="p-14">
      <div className ="text-8xl text-white text-right border-r-8 border-b-8 border-orange-800 p-4">AM'INTERIOR</div>
      <br></br>
      <br></br>
    
      
      <div class="py-3 px-3 grid float-right" type="button">
        <Formulaire />
      </div>

      <div className="text-3xl text-black p-6 bg-orange-50/80 rounded">
        Société d'aménagement d'intérieurs
      </div>
      
      <div className='grid grid-cols-2 gap-1 bg-orange-50/80'>
        
       <img
          src={LivingRoom}
          className="border-solid ml-4 p-2 bg-black inset-2.5 pl-1 pr-1 "
          alt="Logo"
        />
        <img
          src={livingRoomModern}
          className="border-solid ml-4 p-2 bg-black inset-2.5 pl-1 pr-1"
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
