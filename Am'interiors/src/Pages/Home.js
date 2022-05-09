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
      <hr></hr>
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

      <div className="text-3xl text-orange-800 ">Société d'aménagement d'intérieurs</div>

      <br></br>

      <div>
        <img src={LivingRoom} className="float-right pr-3 pl-3 p-2 mb-3 mt-3 border-solid " alt='Livingroom'/>
        <img src={LivingRoomModern} className="float-right pl-3 p-2 pr-3 mb-3 mt-3 border-solid " alt='Livingroom'/>
      </div>

      <div className="text-2xl text-black float-top p-40 pr-8 pb-0.5 bg-orange-50 "alt='text'>
        <hr></hr>
        <span className="">
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
    </div>
    
  )
}
export default Home
