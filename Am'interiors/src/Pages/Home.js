import React from 'react';
import LivingRoom from "../Images/Livingroom.jpg"
import '../App.css';


function Home () {
    return  (
        <div className="p-20 pl-14 grid grid-cols-2 gap-4">

            <div class="text-7xl">AM'INTERIORS</div>

            <br></br>

            <div className="text-2xl">Société<br></br>
            d'aménagement<br></br>
            d'intérieurs</div>

            <div><img src={LivingRoom}
            className='float-right'/></div>



         
        </div>
    )
}
    export default Home; 