import React from "react";

// Import components
import Formulaire from "../components/PopUp/Formulaire";
import Footer from "../components/Footer/Footer";
import Home from "../components/Admin/Home/Home";

function HomePage() {
  return (
    <div className="p-14">
      <div className="text-8xl text-white text-right border-r-8 border-b-8 border-orange-800 p-4">
        {/* TITLE */}
        <span className="font-title text-8xl text-white text-right">AM'in</span>
        terior
      </div>
      <br></br>
      <br></br>

      <div className="grid grid-row-2 gap-1 bg-orange-50/80">
        <div className="text-3xl text-black p-6">
          Société d'aménagement d'intérieurs
          <div class="float-right" type="button">
          <Formulaire />
        </div>
        </div> 
        <Home />
        <br></br>
      </div>

      <br></br>
      <hr></hr>
      <br></br>
      <Footer />
    </div>
  );
}
export default HomePage;
