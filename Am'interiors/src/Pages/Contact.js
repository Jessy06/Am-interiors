import React from 'react'

// Import Components.
import Formulaire from '../components/PopUp/Formulaire'
import Footer from '../components/Footer/Footer'

function Contact() {
  return (
    <div className="p-14">
      <div class="text-8xl text-white text-right border-r-4 border-b-4 border-orange-100/75 p-4 ">CONTACT</div>
      <br></br>
      <hr></hr>
      <br></br>
      <br></br>

      <div class="py-3 px-3 grid float-right" type="button">
        <Formulaire />
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
              Réalisation d'un plan 3D
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
            <h2 class="text-xl md:text-3xl mb-2 text-orange-800 underline underline-offset-8">
              Shopping List
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
              Conseil en décoration
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
      <br></br>
      <Footer/>
    </div>
  )
}
export default Contact
