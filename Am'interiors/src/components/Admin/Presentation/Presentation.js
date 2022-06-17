import React from 'react'

// Import Image
import photoprofil from '../../../Images/photoprofil.jpg';

function Presentation () {
    return (
        <div>
        <div
        className="text-2xl text-white p-1 pr-1 pb-1 pl-1"
        alt="presentation"
      >
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
      <div>
        <img src={photoprofil} className="photoprofil" alt="Photoprofil" />
      </div>
      </div>
    )
}
export default Presentation ;
