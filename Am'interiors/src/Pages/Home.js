import React from 'react'
import LivingRoom from '../Images/Livingroom.png'
import LivingRoomModern from '../Images/livingRoomModern.jpg'
import '../App.css'

function Home() {
  return (
    <div className="p-15 pl-10 pr-10">
      <div class="text-8xl">AM'INTERIORS</div>

      <br></br>

      <div className="text-2xl">Société d'aménagement d'intérieurs</div>

      <br></br>

      <div>
        <img src={LivingRoom} className="float-right" />
        <img src={LivingRoomModern} className="float-right pr-1" />
      </div>
      <br></br>

      <div className="text-2xl float-top p-60 pr-8 pb-0.5 bg-lime-800">
      <span className="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis
        imperdiet quam, eu commodo justo volutpat et. Pellentesque vel tincidunt
        mauris, porta feugiat odio. Quisque dui tellus, lobortis vel dui id,
        sollicitudin mollis ligula. Praesent aliquam auctor erat at semper. Cras
        non euismod odio. Suspendisse et facilisis diam. Mauris a neque tempor,
        mattis urna vel, tempus sapien. In id quam mattis, tincidunt erat sit
        amet, hendrerit justo. Maecenas ut aliquet nisi, id congue quam at el
        Vestibulum sit amet purus nunc. Maecenas vitae imperdiet ex, tempor al
        accumsan justo. Quisque gravida est et mollis commodo. Suspendisse odio
        magna, pellentesque vel massa eu, malesuada.
      </span>

      <br></br>
      <br></br>

            <button
              class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded"
              type="button"
            >
              Work with me
            </button>
            <br></br>
          </div>
        
    </div>
  )
}
export default Home
