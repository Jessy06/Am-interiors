import React from "react";

function NavigationAdmin() {
  const [showHome, setShowHome] = React.useState(false);
  const [showPresentation, setShowPresentation] = React.useState(false);
  const [showInspiration, setShowInspiration] = React.useState(false);
  const [showStudio, setShowStudio] = React.useState(false);
  const [showContact, setShowContact] = React.useState(false);

  return (
      <div className="grid grid-cols-6 gap-1 ">
        {/* Start of first columns */}
        <div className="bg-slate-600 col-span-1 uppercase p-6 border-l-4 border-orange-100/75 sticky">
          {/* header of filter */}
          <div className="flex items-start justify-center p-2 border-b border-r border-orange-100/75 ">
            Navigation
          </div>
          {/* end of filter header*/}
          <div className="p-2"
          onClick={() =>
          [setShowHome(true),
          setShowPresentation(false),
          setShowInspiration(false),
          setShowStudio(false),
          setShowContact(false)]
          }>Home </div>

          <div className="p-2"
           onClick={() =>
          [setShowPresentation(true),
          setShowHome(false),
          setShowInspiration(false),
          setShowStudio(false),
          setShowContact(false)]
          }> Presentation </div>

          <div className="p-2"
          onClick={() =>
          [setShowInspiration(true),
          setShowPresentation(false),
          setShowHome(false),
          setShowStudio(false),
          setShowContact(false)]
          }> Inspirations </div>

          <div className="p-2"
        onClick={() =>
          [setShowStudio(true),
          setShowPresentation(false),
          setShowInspiration(false),
          setShowHome(false),
          setShowContact(false)]
          }> Studio </div>

          <div className="p-2"
          onClick={() => 
            [setShowContact(true), 
            setShowPresentation(false),
            setShowInspiration(false),
            setShowStudio(false),
            setShowHome(false)]
            }> Contact </div>
        </div>
        {/* End of first columns */}

        {/* Start of second columns */}
        <div className="bg-orange-800 col-span-5 p-4">

          {/* Show Home */}
          <div>
          {showHome ? (
              <div>Elements du bouton Home</div>
          ) : null}
          </div>
          {/* End show Home */}

          {/* Show Presentation */}
          <div>
          {showPresentation ? (
              <div> Elements du bouton Presentation</div>
          ) :null }
          </div>
          {/* End show Presentation */}

          {/* Show Inspiration */}
          <div>
          {showInspiration ? (
              <div> Elements du bouton Inspiration</div>
          ) :null }
          </div>
          {/* End show Inspiration */}

          {/* Show Studio */}
          <div>
          {showStudio ? (
              <div> Elements du bouton Studio</div>
          ) :null }
          </div>
          {/* End show Studio */}

          {/* Show Contact */}
          <div>
          {showContact ? (
              <div> Elements du bouton Contact</div>
          ) :null }
          </div>
          {/* End show Contact */}
        </div>
        {/* End of Second columns */}
      </div>
  );
}
export default NavigationAdmin;
