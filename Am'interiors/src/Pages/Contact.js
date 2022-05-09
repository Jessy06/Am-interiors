import React from 'react'

// Import Components.
import Formulaire from '../components/PopUp/Formulaire'


function Contact() {

  return (
    <div className="lg:p-5 pl-5 pr-5 mb-5 mt-5 sm:">
      <div class="text-8xl text-white">CONTACT</div>
      <br></br>
      <hr></hr>
      <br></br>
    <hr></hr>
    <br></br>

      <div
        class="py-3 px-3 grid float-right"
        type="button"
      >
       <Formulaire/>
       <br></br>
       <br></br>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <div className="text-2xl bg-orange-800 p-1 pr-1 pb-1 pl-1" alt="">
        <span className="text-white">Services Proposés</span>
      </div>
      <br></br>
      <br></br>

      {/* <!-- horizontal card --> */}

      <div class="flex space-x-4 ">
        
        <div className="2xl p-5 pr-5 pb-0.5 pl-0.5 rounded-xl"></div>
        <div class="bg-white rounded-lg shadow-2xl md:flex">
          <img
            src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8"
            alt="Laptop on Desk"
            class="md:w-2/5 rounded-t-lg md:rounded-l-lg md:rounded-t-"
          />
          <div class="p-7">
            <h2 class="font-bold text-xl md:text-3xl mb-2 text-orange-800">
              Confection de plans
            </h2>
            <p class="text-black">Explication service</p>
          </div>
        </div>

        <br></br>

        <div className="2xl p-5  pb-0.5 pl-0.5 pr-0.5 rounded-xl"></div>
        <div class="bg-white rounded-lg shadow-2xl md:flex">
          <img
            src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8"
            alt="Laptop on Desk"
            class="md:w-2/5 rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          />
          <div class="p-7">
            <h2 class="font-bold text-xl md:text-3xl mb-2 text-orange-800">
              Confection de plans
            </h2>
            <p class="text-black">Explication service</p>
          </div>
        </div>

        <br></br>

        <div className="2xl p-5 pr-25 pb-0.5 pl-0.5 pr-0.5 rounded-xl"></div>
        <div class="bg-white rounded-lg shadow-2xl md:flex">
          <img
            src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8"
            alt="Laptop on Desk"
            class="md:w-2/5 rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          />
          <div class="p-7">
            <h2 class="font-bold text-xl md:text-3xl mb-2 text-orange-800">
              Confection de plans
            </h2>
            <p class="text-black">Explication service</p>
          </div>
        </div>
      </div>

      <br></br>

      <div class="flex space-x-2 ">
        <div className="2xl p-5 pr-5 pb-0.5 pl-0.5 rounded-xl"></div>
        <div class="bg-white rounded-lg shadow-2xl md:flex">
          <img
            src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8"
            alt="Laptop on Desk"
            class="md:w-2/5 rounded-t-lg md:rounded-l-lg md:rounded-t-"
          />
          <div class="p-7">
            <h2 class="font-bold text-xl md:text-3xl mb-2 text-orange-800">
              Confection de plans
            </h2>
            <p class="text-black">Explication service</p>
          </div>
        </div>

        <br></br>

        <div className="2xl p-5  pb-0.5 pl-0.5 pr-0.5 rounded-xl"></div>
        <div class="bg-white rounded-lg shadow-2xl md:flex">
          <img
            src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8"
            alt="Laptop on Desk"
            class="md:w-2/5 rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          />
          <div class="p-7">
            <h2 class="font-bold text-xl md:text-3xl mb-2 text-orange-800">
              Confection de plans
            </h2>
            <p class="text-black">Explication service</p>
          </div>
        </div>

        <br></br>

        <div className="2xl p-5 pr-25 pb-0.5 pl-0.5 pr-0.5 rounded-xl"></div>
        <div class="bg-white rounded-lg shadow-2xl md:flex">
          <img
            src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8"
            alt="Laptop on Desk"
            class="md:w-2/5 rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          />
          <div class="p-7">
            <h2 class="font-bold text-xl md:text-3xl mb-2 text-orange-800">
              Confection de plans
            </h2>
            <p class="text-black">Explication service</p>
          </div>
        </div>
      </div>

      <br></br>

      <div className="text-2xl bg-orange-800 p-1 pr-1 pb-1 pl-1">
        <span className="text-white">
          Pour toutes demandes n'hésitez pas à cliquer sur le bouton "work with
          me" en haut de la page et remplir le formulaire
        </span>
        <div className="text-2xl"></div>
      </div>
      <br></br>
      <br></br>
      <hr></hr>
    </div>
  )
}
export default Contact
