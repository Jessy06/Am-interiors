import React from 'react'
import photoprofil from '../Images/photoprofil.jpg'
import '../App.css'

function Presentation() {
  return (
    <div className="p-5 pl-5 pr-5 mt-5 mb-5">

      <div class="text-8xl">Presentation</div>
      <button
        class="bg-white hover:bg-lime-800 text-gray-800 font-bold py-3 px-3 grid float-right"
        type="button"
      >
        Work with me
      </button>

      <br></br>
    
    <div className='text-xl'>A propos de Amin Dabbabi</div>

    <br></br>
      

      <div className="text-2xl bg-lime-800 p-1 pr-1 pb-1 pl-1"alt='presentation'>
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
      <br></br>
      <div>
      <img src={photoprofil} className="photoprofil" alt='Photoprofil' />
      </div>
      
    </div>
  )
}
export default Presentation
