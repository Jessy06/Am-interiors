import React from 'react'
import LivingRoom from '../Images/Livingroom.png'
import LivingRoomModern from '../Images/livingRoomModern.jpg'
import '../App.css'

function Home() {
  return (
    <div className="p-17 pl-10 grid-cols-2 gap-4">
      <div class="text-8xl">AM'INTERIORS</div>

      <br></br>

      <div className="text-2xl">Société d'aménagement d'intérieurs</div>

      <br></br>

      <div>
        <img src={LivingRoom} className="float-right" />
        <img src={LivingRoomModern} className="float-right" />
      </div>
      <br></br>
      <br></br>
      <div className="text-2xl float-top-2 p-60 pb-0.5 bg-lime-800">
        Présentation Entreprise
        <br></br>
        <br></br>
      </div>
      <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          tincidunt, odio in interdum iaculis, sapien purus imperdiet leo, id
          tincidunt enim tortor a massa. Integer in ultrices sapien, ut
          scelerisque quam. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Phasellus velit lectus, condimentum sed leo at, aliquet maximus
          enim. Nulla.
        </p>
    </div>
  )
}
export default Home
