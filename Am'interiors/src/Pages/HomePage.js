import React from "react";

// Import components
import Formulaire from "../components/PopUp/Formulaire";
import Footer from "../components/Footer/Footer";
import Home from "../components/Admin/Home/Home";
import HomeEN from "../components/Admin/Home/HomeEN"

//import images
import FranceFlag from "../Images/FlagFrance.png";
import UKFlag from "../Images/FlagUk.png"


function HomePage() {
  const [swapLanguageFR, setSwapLanguageFR] = React.useState(true);
  const [swapLanguageEN, setSwapLanguageEN] = React.useState(false);

  return (
    <div className="p-14">
      <div className="text-8xl text-white text-right border-r-8 border-b-8 border-orange-800 p-4">
        {/* TITLE */}
        <span className="font-title text-8xl text-white text-right">AM'in</span>
        terior
      </div>
      <br></br>
      <br></br>

    {/* SWAP LANGUAGES BUTTON */}
    <div>
    <button className="text-l text-white hover:bg-orange-800 p-1 border-1"
    onClick={() => 
    [setSwapLanguageFR(true),
    setSwapLanguageEN(false)]}>
    <img src= {FranceFlag} alt="flag"/></button>
    <button className="text-l text-white hover:bg-orange-800 p-1 border-1 "
    onClick={() => 
      [setSwapLanguageFR(false),
      setSwapLanguageEN(true)]}>
      <img src= {UKFlag} alt="flag"/></button>
    </div>
    {/* END SWAP LANGUAGES */}
    <br></br>

      <div className="grid grid-row-2 gap-1 bg-orange-50/80">
        <div className="text-3xl text-black p-6">
        <span className="text-6xl p-0.5 text-black">•</span>
          <span className="text-6xl p-0.5 text-orange-800">•</span>
         {( swapLanguageEN ? ("Interior Designer"):("Société d'aménagement d'intérieurs"))} 
          <div class="float-right" type="button">
          <Formulaire />
        </div>
        </div>
        { swapLanguageFR ? ( <Home />) : null} 
        { swapLanguageEN ? ( <HomeEN />) : null} 
        <br></br>
      </div>

      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}
export default HomePage;
