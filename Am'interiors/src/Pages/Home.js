import React from 'react'
import LivingRoom from '../Images/Livingroom.png'
import LivingRoomModern from '../Images/livingRoomModern.jpg'
import '../App.css'

function Home() {
  return (
    <div className="p-20 pl-10 grid-cols-2 gap-4">
      <div class="text-8xl">AM'INTERIORS</div>

      <br></br>

      <div className="text-2xl">
        Société
        d'aménagement
        d'intérieurs
      </div>

      <br></br>

      <div>
        <img src={LivingRoom} className="float-right" />
        <img src={LivingRoomModern} className="float-right" />
      </div>
      <br></br>
      <br></br>
      <div className="text-2xl float-top-6 bg-lime-800">
        Présentation Entreprise
      </div>
    </div>
  )
}
export default Home
