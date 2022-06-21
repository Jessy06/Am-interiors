import React from 'react'

function Contact() {
    return (
        <div>
        <div className="text-2xl p-1 pr-2 pb-1 pl-1" alt="">
        <span className="text-white">Services Proposés</span>
      </div>
      <br></br>
      <br></br>

      {/* <!-- horizontal card --> */}

      <div class="flex space-x-2 ">
        <div className="2xl p-5 pr-0.5 pb-0.5 pl-0.5 rounded-xl"></div>
        <div class="bg-white rounded-lg shadow-2xl md:flex">
          <img
            src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8"
            alt="Laptop on Desk"
            class="md:w-2/5 rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          />
          <div class="p-7">
            <h2 class="text-xl md:text-3xl mb-2 text-orange-800 underline underline-offset-8">
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

        <div className="2xl p-5  pb-0.5 pl-0.5 pr-0.5 rounded-xl"></div>
        <div class="bg-white rounded-lg shadow-2xl md:flex">
          <img
            src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8"
            alt="Laptop on Desk"
            class="md:w-2/5 rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          />
          <div class="p-7">
            <h2 class="text-xl md:text-3xl mb-2 text-orange-800 underline underline-offset-8">
              Conseil en décoration
            </h2>
            <p class="text-black">Explication service</p>
          </div>
        </div>
      </div>

      <br></br>

      <div class="flex space-x-2 ">
        <div className="2xl p-5 pr-0.5 pb-0.5 pl-0.5 rounded-xl"></div>
        <div class="bg-white rounded-lg shadow-2xl md:flex">
          <img
            src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8"
            alt="Laptop on Desk"
            class="md:w-2/5 rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          />
          <div class="p-7">
            <h2 class="text-xl md:text-3xl mb-2 text-orange-800 underline underline-offset-8">
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
            <h2 class="text-xl md:text-3xl mb-2 text-orange-800 underline underline-offset-8">
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
            <h2 class="text-xl md:text-3xl mb-2 text-orange-800 underline underline-offset-8">
              Confection de plans
            </h2>
            <p class="text-black">Explication service</p>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      
      <div className="text-2xl  p-1 pr-1 pb-1 pl-1">
        <span className="text-white">
          Pour toutes demandes n'hésitez pas à cliquer sur le bouton "work with
          me" en haut de la page et remplir le formulaire
        </span>
        </div>
        </div>
    )
}
export default Contact;