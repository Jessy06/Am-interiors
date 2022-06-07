import React from 'react'

// Import Components
import Formulaire from '../components/PopUp/Formulaire';
import Footer from '../components/Footer/Footer';
import Presentation from '../components/Admin/Presentation/Presentation';

function PresentationPage() {
  return (
    <div className="p-14">
      <div class="text-8xl text-white text-right border-r-8 border-b-8 border-orange-800 p-4"><span className="text-9xl p-2 text-white">-</span>PRESENTATION</div>
      <br></br>
      <br></br>
      <div class="py-3 px-3 grid float-right" type="button">
        <Formulaire />
      </div>

      <br></br>

      <div className="text-2xl text-white">A propos de Amin Dabbabi</div>

      <br></br>

    <Presentation/>

      <br></br>
      <hr></hr>
      <br></br>
      <Footer />
    </div>
  )
}
export default PresentationPage;
