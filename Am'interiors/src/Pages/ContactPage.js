import React from 'react'

// Import Components.
import Contact from '../components/Admin/Contact/Contact'
import ContactEN from '../components/Admin/Contact/ContactEN'
import Formulaire from '../components/PopUp/Formulaire'
import Footer from '../components/Footer/Footer'

//import images
import FranceFlag from '../Images/FlagFrance.png'
import UKFlag from '../Images/FlagUk.png'

function ContactPage() {
  const [swapLanguageFR, setSwapLanguageFR] = React.useState(true)
  const [swapLanguageEN, setSwapLanguageEN] = React.useState(false)

  return (
    <div className="p-4">
      {/* SWAP LANGUAGES BUTTON */}
      <div>
        <button
          className="text-l text-white hover:bg-orange-800 p-1 border-1"
          onClick={() => [setSwapLanguageFR(true), setSwapLanguageEN(false)]}
        >
          <img src={FranceFlag} alt="flag" />
        </button>
        <button
          className="text-l text-white hover:bg-orange-800 p-1 border-1 "
          onClick={() => [setSwapLanguageFR(false), setSwapLanguageEN(true)]}
        >
          <img src={UKFlag} alt="flag" />
        </button>
      </div>
      {/* END SWAP LANGUAGES */}
      <div class="text-6xl text-white text-right border-r-8 border-b-8 border-orange-800 p-4">
        <span className="text-6xl p-1 text-white">-</span>Contact
      </div>

      <div class="py-3 px-3 grid float-right" type="button">
        <br></br>
        <Formulaire />
        <br></br>
        <br></br>
      </div>

      <br></br>
      <br></br>
      <br></br>

      {swapLanguageFR ? <Contact /> : null}
      {swapLanguageEN ? <ContactEN /> : null}

      <Footer />
    </div>
  )
}
export default ContactPage
