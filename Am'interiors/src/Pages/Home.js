import React from 'react'
import LivingRoom from '../Images/Livingroom.png'
import LivingRoomModern from '../Images/livingRoomModern.jpg'
import '../App.css'
import Formulaire from '../components/PopUp/Formulaire'


function Home() {
  return (
    <div className="p-5 pl-5 pr-5 mb-5">
      <div class="text-8xl">AM'INTERIORS</div>
      <div
        class="py-3 px-3 grid float-right"
        type="button"
      >
       <Formulaire/>
      </div>

      <br></br>

      <div className="text-2xl">Société d'aménagement d'intérieurs</div>

      <br></br>

      <div>
        <img src={LivingRoom} className="float-right" alt='livingroom'/>
        <img src={LivingRoomModern} className="float-right pr-1" alt='livingroom'/>
      </div>
      <br></br>

      <div className="text-2xl float-top p-60 pr-8 pb-0.5 bg-orange-50 "alt='text'>
        <span className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis
          imperdiet quam, eu commodo justo volutpat et. Pellentesque vel
          tincidunt mauris, porta feugiat odio. Quisque dui tellus, lobortis vel
          dui id, sollicitudin mollis ligula. Praesent aliquam auctor erat at
          semper. Cras non euismod odio. Suspendisse et facilisis diam. Mauris a
          neque tempor, mattis urna vel, tempus sapien. In id quam mattis,
          tincidunt erat sit amet, hendrerit justo. Maecenas ut aliquet nisi, id
          congue quam at el Vestibulum sit amet purus nunc. Maecenas vitae
          imperdiet ex, tempor al accumsan justo. Quisque gravida est et mollis
          commodo. Suspendisse odio magna, pellentesque vel massa eu, malesuada.
        </span>
      </div>
    </div>
  )
}
export default Home
