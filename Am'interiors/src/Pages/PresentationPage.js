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
      <div class="text-6xl text-white text-right border-r-8 border-b-8 border-orange-800 p-4"><span className="text-6xl p-2 text-white">-</span>Presentation</div>
      <br></br>
      <div class="py-3 px-3 grid float-right" type="button">
        <Formulaire />
      </div>
      
      <br></br>
      
    
      <div className="text-3xl text-white">{swapLanguageEN ? "About Amin Dabbabi" : <div><span className=" text-orange-800 mr-4 ml-4">•</span>A propos de Amin Dabbabi</div>}</div>
       

      <br></br>
      {swapLanguageFR ? <Presentation /> : null}
      {swapLanguageEN ? <PresentationEN /> : null}

      <br></br>
      <br></br>
      <Footer />
    </div>
  )
}
export default PresentationPage;
