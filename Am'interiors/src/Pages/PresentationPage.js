import React from 'react'

// Import Components
import Formulaire from '../components/PopUp/Formulaire';
import Footer from '../components/Footer/Footer';
import Presentation from '../components/Admin/Presentation/Presentation';
import PresentationEN from '../components/Admin/Presentation/PresentationEN'

//import images
import FranceFlag from '../Images/FlagFrance.png'
import UKFlag from '../Images/FlagUk.png'

function PresentationPage() {
  const [swapLanguageFR, setSwapLanguageFR] = React.useState(true)
  const [swapLanguageEN, setSwapLanguageEN] = React.useState(false)

  return (
    <div className="p-14">
      <div class="text-8xl text-white text-right border-r-8 border-b-8 border-orange-800 p-4"><span className="text-9xl p-2 text-white">-</span>PRESENTATION</div>
      <br></br>
      <div class="py-3 px-3 grid float-right" type="button">
        <Formulaire />
      </div>
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
      <br></br>

      <div className="text-2xl text-white">{swapLanguageEN ? "About Amin Dabbabi" : "A propos de Amin Dabbabi"}</div>

      <br></br>
      {swapLanguageFR ? <Presentation /> : null}
      {swapLanguageEN ? <PresentationEN /> : null}

      <br></br>
      <hr></hr>
      <br></br>
      <Footer />
    </div>
  )
}
export default PresentationPage;
