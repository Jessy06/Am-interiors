import React from 'react'

// Import Image
import photoprofil from '../../../Images/photoprofil.jpg';

function Presentation () {
    return (
        <div>
        <div class="grid grid-rows-1 p-1 pr-1 pb-1 pl-1">
        <span className="">
          <div className="text-2xl text-white float-right">
            

            <img src={photoprofil} className="float-left p-4" alt="Peinture" />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            facilisis imperdiet quam, eu commodo justo volutpat et. Pellentesque
            vel tincidunt mauris, porta feugiat odio. Quisque dui tellus,
            lobortis vel dui id, sollicitudin mollis ligula. Praesent aliquam
            auctor erat at semper. Cras non euismod odio. Suspendisse et
            facilisis diam. Mauris a neque tempor, mattis urna vel, tempus
            sapien. In id quam mattis, tincidunt erat sit amet, hendrerit justo.
            Maecenas ut aliquet nisi, id congue quam at el Vestibulum sit amet
            purus nunc. Maecenas vitae imperdiet ex, tempor al accumsan justo.
            Quisque gravida est et mollis commodo.
            <br></br>
            <br></br>
            
          </div>
        </span>
      </div>
    </div>
      
    )
}
export default Presentation ;
