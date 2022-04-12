import React from 'react'
import '../App.css'
import Background1 from '../Images/Background1.jpg'
import Background2 from '../Images/Background2.jpg'
import Floral from '../Images/Floral.jpg'
import Rose from '../Images/Rose.jpg'

function Inspirations() {
  return (
    <div className="p-10 pl-5 pr-5 mb-5">
      <div class="text-8xl">Inspirations</div>

       <button
        class="bg-white hover:bg-lime-800 text-gray-800 font-bold py-3 px-3 grid float-right"
        type="button"
      >
        Work with me
      </button>

      <br></br>
      <br></br>
      <br></br>

      <div className="text-2xl bg-lime-800 p-1 pr-1 pb-1 pl-1">
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

      <div class="flex space-x-4 ">
          
        <div className="2xl p-10 pr-25 pb-0.5 pl-0.5">
          Thème 1<br></br>
          <br></br>
          <img src={Background1} className="" alt=''></img>
          <br></br>
          <br></br>
          <div className="text-xl p-1 pr-1 pb-1 pl-0.5">Explications</div>
        </div>
        <div className="2xl p-10 pr-25 pb-0.5 pl-0.5">
          Théme 2<br></br>
          <br></br>
          <img src={Background2} className="" alt=''></img>
          <br></br>
          <br></br>
          <div className="text-xl p-1 pr-1 pb-1 pl-1">Explications</div>
        </div>
        <div className="2xl p-10 pr-25 pb-0.5 pl-0.5">
          Thème 3<br></br>
          <br></br>
          <img src={Floral} className="" alt=''></img>
          <br></br> 
          <br></br>
          <div className="text-xl p-1 pr-1 pb-1 pl-1">Explications</div>
        </div>
        <div className="2xl p-10 pr-25 pb-0.5 pl-0.5">
          Thème 4<br></br>
          <br></br>
          <img src={Rose} className="" alt=''></img>
          <br></br>
          <br></br>
          <div className="text-xl p-1 pr-1 pb-1 pl-1">Explications</div>
        </div>
      </div>
    </div>
  )
}
export default Inspirations
