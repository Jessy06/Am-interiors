import React from 'react'

// Import Components.
import Contact from '../components/Contact/Contact';
import Formulaire from '../components/PopUp/Formulaire';

function ContactPage() {
  return (
    <div className="p-14">
      <div class="text-8xl text-white text-right border-r-8 border-b-8 border-orange-800 p-4 "><span className="text-9xl p-2 text-white">-</span>CONTACT</div>
      <br></br>
      <br></br>

      <div class="py-3 px-3 grid float-right" type="button">
        <br></br>
        <Formulaire />
        <br></br>
        <br></br>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <Contact/>

      <div className="text-2xl"></div>
      
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>

      </div>

  )
}
export default ContactPage
