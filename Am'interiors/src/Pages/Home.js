import React from 'react'
import LivingRoom from '../Images/Livingroom.png'
import livingRoomModern from '../Images/livingRoomModern.jpg'
import '../App.css'
import Formulaire from '../components/PopUp/Formulaire'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <div className="p-14">
      <div className ="text-8xl text-white text-right border-r-4 border-b-4 border-orange-100/75 p-4">AM'INTERIORS</div>
      <br></br>
      {/* <hr></hr> */}
      <br></br>
      <hr></hr>
      <br></br>
      <br></br>
      <div class="py-3 px-3 grid float-right" type="button">
        <Formulaire />
      </div>

      <br></br>

      <div className="text-3xl text-white p-6 bg-orange-100/75 rounded">
        Société d'aménagement d'intérieurs
      </div>
      <div className='grid grid-cols-2 gap-2 bg-orange-100/75 rounded'>
        <img
          src={LivingRoom}
          className="border-solid ml-4 p-10"
          alt="Livingroom"
        />
        <img
          src={livingRoomModern}
          className="border-solid mr-4 p-10"
          alt="Livingroom"
        />
      
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
