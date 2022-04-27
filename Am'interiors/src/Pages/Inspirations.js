import React from 'react'
import '../App.css'
import Formulaire from '../components/PopUp/Formulaire'
import Peinture from '../Images/Peinture.jpg'
import Thème1 from '../components/Inspirations/Thème1'
import Thème2 from '../components/Inspirations/Thème2'
import Thème3 from '../components/Inspirations/Thème3'
import Thème4 from '../components/Inspirations/Thème4'


function Inspirations() {
  return (
    <div className="p-5 pl-5 pr-5 mb-5">
      <div class="text-8xl">Inspirations</div>

      <div
        class="py-3 px-3 grid float-right"
        type="button"
      >
       <Formulaire/>
      </div>

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
      <br></br>
      <br></br>

      <div class="flex space-x-4 ">
          <br></br>
        <div className="text-2xl">
        <br></br>
        <br></br>
      </div>
      <img src={Peinture} className="" alt='Peinture'></img>
          <br></br>
          <br></br>
          <span className="">
           <div className='text-3xl'></div>Thème 1 
            <br></br>
            <br></br>
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
          <br></br>
          <br></br>
          <Thème1/>
          
        </span>
        </div>
        <br></br>
        <div class="flex space-x-4 ">
          <br></br>
        <div className="text-2xl">
        <br></br>
        <br></br>
      </div>
          <br></br>
          <br></br>
          <span className="">
           <div className='text-3xl'></div>Thème 2
            <br></br>
            <br></br>
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
          <br></br>
          <br></br>
        <Thème2/>
        </span>
        </div>
        <br></br>

      </div>
    
  )
}
export default Inspirations
