import React from "react";
import photoprofil from "../Images/photoprofil.jpg";
import "../App.css";

function Presentation() {
  return (
    <div className="p-10 grid grid-cols-2 gap-4">
      <div className="grid grid-rows-2 gap-4">
        <div className="grid grid-rows-2">
            <div>About Me</div>
            <div> Amin Dab </div>
        </div>
        <div className="text-2xl">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus.
        </div>
      </div>
      <div className="grid grid-rows-2 gap-4">
        <img src={photoprofil} />
        <div>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus.</div>
      </div>
    </div>
  );
}
export default Presentation;
