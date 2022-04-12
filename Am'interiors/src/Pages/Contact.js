import React from 'react'
import '../App.css'

function Contact() {
  return (
    <div className="p-10 pl-5 pr-5 mb-5">
      <div class="text-8xl">Contact</div>
      
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
          Services Proposés
        </span>
        <div className='text-2xl'>
          
        </div>
      </div>
      <br></br>

      {/* <!-- horizontal card --> */}

      <div class="flex space-x-4 ">
          
        <div className="2xl p-5 pr-5 pb-0.5 pl-0.5 rounded-xl"></div>
  <div class="bg-white rounded-lg shadow-2xl md:flex">
    <img src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8" alt="Laptop on Desk" class="md:w-2/5 rounded-t-lg md:rounded-l-lg md:rounded-t-" />
    <div class="p-7">
      <h2 class="font-bold text-xl md:text-3xl mb-2 text-lime-800">Confection de plans</h2>
      <p class="text-lime-800">
        Explication service 
      </p>
    </div>
    </div>
    <br></br>
    <div className="2xl p-5  pb-0.5 pl-0.5 pr-0.5 rounded-xl"></div>
  <div class="bg-white rounded-lg shadow-2xl md:flex">
    <img src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8" alt="Laptop on Desk" class="md:w-2/5 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
    <div class="p-7">
      <h2 class="font-bold text-xl md:text-3xl mb-2 text-lime-800">Confection de plans</h2>
      <p class="text-lime-800">
        Explication service 
      </p>
    </div>
    </div>
    <br></br>
    <div className="2xl p-5 pr-25 pb-0.5 pl-0.5 pr-0.5 rounded-xl"></div>
  <div class="bg-white rounded-lg shadow-2xl md:flex">
    <img src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8" alt="Laptop on Desk" class="md:w-2/5 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
    <div class="p-7">
      <h2 class="font-bold text-xl md:text-3xl mb-2 text-lime-800">Confection de plans</h2>
      <p class="text-lime-800">
        Explication service 
      </p>
    </div>

  </div>
</div>
<br></br>
<div class="flex space-x-4 ">
          
        <div className="2xl p-5 pr-5 pb-0.5 pl-0.5 rounded-xl"></div>
  <div class="bg-white rounded-lg shadow-2xl md:flex">
    <img src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8" alt="Laptop on Desk" class="md:w-2/5 rounded-t-lg md:rounded-l-lg md:rounded-t-" />
    <div class="p-7">
      <h2 class="font-bold text-xl md:text-3xl mb-2 text-lime-800">Confection de plans</h2>
      <p class="text-lime-800">
        Explication service 
      </p>
    </div>
    </div>
    <br></br>
    <div className="2xl p-5  pb-0.5 pl-0.5 pr-0.5 rounded-xl"></div>
  <div class="bg-white rounded-lg shadow-2xl md:flex">
    <img src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8" alt="Laptop on Desk" class="md:w-2/5 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
    <div class="p-7">
      <h2 class="font-bold text-xl md:text-3xl mb-2 text-lime-800">Confection de plans</h2>
      <p class="text-lime-800">
        Explication service 
      </p>
    </div>
    </div>
    <br></br>
    <div className="2xl p-5 pr-25 pb-0.5 pl-0.5 pr-0.5 rounded-xl"></div>
  <div class="bg-white rounded-lg shadow-2xl md:flex">
    <img src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8" alt="Laptop on Desk" class="md:w-2/5 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
    <div class="p-7">
      <h2 class="font-bold text-xl md:text-3xl mb-2 text-lime-800">Confection de plans</h2>
      <p class="text-lime-800">
        Explication service 
      </p>
    </div>

  </div>
</div>
<br></br>
<div className="text-2xl bg-lime-800 p-1 pr-1 pb-1 pl-1">
        <span className="">
          Pour toutes demandes n'hésitez pas à cliquer sur le bouton "work with me" en haut de la page et remplir le formulaire
        </span>
        <div className='text-2xl'>
          
        </div>
      </div>
</div>


  

  
  )
}
export default Contact;
