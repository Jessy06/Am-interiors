import React, { useEffect, useState } from "react";
import Axios from "axios";

// Import Components

function Studio() {
  const ApiUrlProjet = "http://localhost:3001/api/admin/projets/";
  const [projetList, setProjetList] = useState([]);
  

  // Get API MONGO DB
  useEffect(() => {
    Axios.get(ApiUrlProjet).then((response) => {
      setProjetList(response.data);
    });
  }, []);

  return (
    <div>
      {projetList.map((val, key) => {

      return (  
  <div className="text-xl text-white pt-2">
    
    <section>
      <div class="grid grid-cols-3 py-6">
        <img
          alt="gallery"
          class="block object-cover object-center w-full h-full rounded-lg"
          src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
        />
        <div class="block object-cover object-center w-full h-full rounded-lg p-10 col-span-2">
          {/* Projet Title */}
          <span className="text-4xl uppercase font-bold"> {val.title} </span>
          {/* Description */}
          <div className="text-justify py-6 font-medium">
            {val.descriptionFR}
          </div>
          {/* Lieu, City */}
          <span className="text-lg float-left italic">{val.lieu}</span>
         
        </div>
      </div>
      <div className="text-6xl text-white border-b-2">•
       {/* Button Gallery */}
      <button className="float-right border-2 rounded-3xl p-2 px-6 text-sm animate-pulse hover:bg-orange-100 hover:text-black hover:border-black"> Voir plus → </button>
      
      </div>
      
  </section>
</div>
      )}
      )}
</div>)
}
export default Studio;
