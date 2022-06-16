import React from 'react'

//Import Components
import Peinture from '../../../Images/Peinture.jpg';
import Thème1 from '../../Inspirations/Thème1';
import Thème2 from '../../Inspirations/Thème2';
import Thème3 from '../../Inspirations/Thème3';
import Thème4 from '../../Inspirations/Thème4';

function Inspirations() {
  return (
    <div>
      <div className="text-2xl text-white p-1 pr-1 pb-1 pl-1 grid grid-rows-1">
        <span className=" text-white">
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
      <hr></hr>
      <br></br>

      <div class="grid grid-rows-1 p-1 pr-1 pb-1 pl-1">
        <br></br>
        <div className="p-1 pr-1 pb-1 pl-1 grid grid-rows-1">
        <img src={Peinture} className="float-left" alt="Peinture"/>
        <br></br>
        <br></br>
        <span className="">
          <div className="text-2xl text-white">Thème 1<br></br>
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
          <Thème1 />
          </div>
        </span>

      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <div class="grid grid-rows-1 p-1 pr-1 pb-1 pl-1">
        <br></br>
        <div className="text-2xl text-white">
          <br></br>
        </div>
        <br></br>
        <img src={Peinture} className="" alt="Peinture"/>
        <br></br>
        <span className="">
          <div className="text-2xl text-white">Thème 2<br></br>
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
          <Thème2 />
          </div>
        </span>
      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <div class="grid grid-rows-1 p-1 pr-1 pb-1 pl-1">
        <br></br>
        <div className="text-2xl text-white">
          <br></br>
        </div>
        <img src={Peinture} className="" alt="Peinture"/>
        <br></br>
        <span className="">
          <div className="text-2xl text-white">Thème 3<br></br>
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
          <Thème3 />
          </div>
        </span>
      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <div class="grid grid-rows-1 p-1 pr-1 pb-1 pl-1">
        <br></br>
        <div className="text-2xl">
          <br></br>
        </div>
        <br></br>
        <img src={Peinture} className="" alt="Peinture"/>
        <br></br>
        <span className="">
          <div className="text-2xl text-white">Thème 4<br></br>
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
          <Thème4 />
          </div>
        </span>
      </div>
    </div>
    </div>
  )
}
export default Inspirations;
