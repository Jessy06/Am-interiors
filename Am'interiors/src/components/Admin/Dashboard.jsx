import React from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

// Import components
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import Presentation from "./Presentation/Presentation";
import Inspirations from "./Inspirations/Inspirations";
import Studio from "./Studio/Studio";


function NavigationAdmin() {
  const [landingDashboard, setShowLandingDashboard] = React.useState(true);
  const [showHome, setShowHome] = React.useState(false);
  const [showPresentation, setShowPresentation] = React.useState(false);
  const [showInspiration, setShowInspiration] = React.useState(false);
  const [showStudio, setShowStudio] = React.useState(false);
  const [showContact, setShowContact] = React.useState(false);
  const [removeCookies] = useCookies(["token", "pseudo", "id"]);
  const navigate = useNavigate();

  const logOut = () => {
    removeCookies('token');
    removeCookies('pseudo');
    removeCookies('id');

    navigate("/", {replace: true})
  };

  return (
      <div className="grid grid-cols-6 gap-6 pt-10 ">
        {/* Start of first columns */}
        <div className="bg-orange-50/80 col-span-1 uppercase p-6 border-l-4 border-t-4 border-orange-50/80 text-black text-center rounded">
          {/* header of filter */}
          <div className="flex items-start justify-center p-2 border-b border-r border-black text-2xl">
            Navigation
          </div>
          {/* end of filter header*/}
          <div className="border-2 border-black rounded-3xl p-2 mt-2 text-sm hover:bg-orange-800 hover:text-white hover:border-slate-600"
          onClick={() =>
          [setShowLandingDashboard(false),
          setShowHome(true),
          setShowPresentation(false),
          setShowInspiration(false),
          setShowStudio(false),
          setShowContact(false)]
          }>Home </div>

          <div className="border-2 border-black rounded-3xl p-2 mt-2 text-sm hover:bg-orange-800 hover:text-white hover:border-slate-600"
           onClick={() =>
          [setShowLandingDashboard(false),
          setShowPresentation(true),
          setShowHome(false),
          setShowInspiration(false),
          setShowStudio(false),
          setShowContact(false)]
          }> Presentation </div>

          <div className="border-2 border-black rounded-3xl p-2 mt-2 text-sm hover:bg-orange-800 hover:text-white hover:border-slate-600"
          onClick={() =>
          [setShowLandingDashboard(false),
          setShowInspiration(true),
          setShowPresentation(false),
          setShowHome(false),
          setShowStudio(false),
          setShowContact(false)]
          }> Inspirations </div>

          <div className="border-2 border-black rounded-3xl p-2 mt-2 text-sm hover:bg-orange-800 hover:text-white hover:border-slate-600"
          onClick={() =>
          [setShowLandingDashboard(false),
          setShowStudio(true),
          setShowPresentation(false),
          setShowInspiration(false),
          setShowHome(false),
          setShowContact(false)]
          }> Studio </div>

          <div className="border-2 border-black rounded-3xl p-2 mt-2 text-sm hover:bg-orange-800 hover:text-white hover:border-slate-600"
          onClick={() => 
            [setShowLandingDashboard(false),
            setShowContact(true), 
            setShowPresentation(false),
            setShowInspiration(false),
            setShowStudio(false),
            setShowHome(false)]
            }> Contact </div>

          <bouton
          type="button"
          onClick = {logOut}
          className="text-red-900 mt-16 border-2 hover:bg-orange-800 hover:text-white border-black rounded 2xl p-2"> Log out </bouton>
          </div>

        {/* End of first columns */}

        {/* Start of second columns */}
        <div className="col-span-5 p-4 text-white">
          {landingDashboard ? (
            <div className="text-orange-50/80 text-center p-40 text-4xl animate-pulse">
              Selectionnez la page que vous souhaitez afficher !</div>
            ) : null }

          {/* Show Home */}
          <div>
          {showHome ? (
              <div> <Home/> </div>
          ) : null}
          </div>
          {/* End show Home */}

          {/* Show Presentation */}
          <div>
          {showPresentation ? (
              <div> <Presentation /> </div>
          ) :null }
          </div>
          {/* End show Presentation */}

          {/* Show Inspiration */}
          <div>
          {showInspiration ? (
              <div> <Inspirations/> </div>
          ) :null }
          </div>
          {/* End show Inspiration */}

          {/* Show Studio */}
          <div>
          {showStudio ? (
              <div> <Studio/> </div>
          ) :null }
          </div>
          {/* End show Studio */}

          {/* Show Contact */}
          <div>
          {showContact ? (
              <div> <Contact/> </div>
          ) :null }
          </div>
          {/* End show Contact */}
        </div>
        {/* End of Second columns */}
      </div>
  );
}
export default NavigationAdmin;
