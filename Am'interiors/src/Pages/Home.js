import React from 'react'
import LivingRoom from '../Images/LivingRoom.png'
import LivingRoomModern from '../Images/LivingRoomModern.jpg'
import '../App.css'
import Formulaire from '../components/PopUp/Formulaire'


function Home() {
  return (
    <div className="p-5 pl-5 pr-5 mb-5">
      <div class="text-8xl text-white ">AM'INTERIORS</div>
      <br></br>
      <br></br>
    <hr></hr>
    <br></br>
      <div
        class="py-3 px-3 grid float-right"
        type="button"
      >
       <Formulaire/>
      </div>

      <br></br>

      <div className="text-2xl">Société d'aménagement d'intérieurs</div>

      <br></br>

      <div className="text-2xl pl-20 pr-10 mb-10 pb-10 p-2 bg-gray-300 "alt='text'>
        
        <img src={LivingRoom} className="float-right pr-1 pl-2 p-2 border-solid" alt='livingroom'/>
        <img src={LivingRoomModern} className="float-right pl-2 p-2 pr-1" alt='livingroom'/>
        <span className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis
          imperdiet quam, eu commodo justo volutpat et. Pellentesque vel
          tincidunt mauris, porta feugiat odio. Quisque dui tellus, lobortis vel
          dui id, sollicitudin mollis ligula. Praesent aliquam auctor erat at
          semper. Cras non euismod odio. Suspendisse et facilisis diam. Mauris a
          neque tempor, mattis urna vel, tempus sapien. In id quam mattis,
          tincidunt erat sit amet, hendrerit justo.
        </span>
      </div>
      <hr></hr>
    </div>
    
  )
}
export default Home
