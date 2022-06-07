import React from 'react'

// Import components 
import Footer from '../components/Footer/Footer'
import Formulaire from '../components/PopUp/Formulaire'
import Studio from '../components/Admin/Studio/Studio'

function StudioPage() {
  return (
    <div className="p-14">
      <div class="text-8xl text-white text-right border-r-8 border-b-8 border-orange-800 p-4"><span className="text-9xl p-2 text-white">-</span>STUDIO</div>
      <br></br>
      <br></br>
      <div class="py-3 px-3 grid float-right" type="button">
        <Formulaire />
      </div>
      <br></br>
      <br></br>
      <Studio/>
      <br></br>
      <hr></hr>
      <br></br>
      <Footer />
    </div>
  )
}
export default StudioPage;
