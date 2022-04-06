import React from 'react';
import LivingRoom from "../Images/Livingroom.jpg"
import '../App.css';


function Home () {
    return  (
        <div className='p-10'>
            <br></br>
            <br></br>
            <br></br>

            <p class="text-7xl">AM'INTERIORS</p>

            <br></br>

            <p className="text-2xl">Société<br></br>
            d'aménagement<br></br>
            d'intérieurs</p>

            <img src={LivingRoom}
            className='float-right'/>



         
        </div>
    )
}
    export default Home; 