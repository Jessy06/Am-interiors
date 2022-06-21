import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Axios from "axios";

// Import Components

function Studio() {
  const [Cookies] = useCookies(["token","id", "pseudo"]);

  const ApiUrlProjet = "http://localhost:3001/api/admin/projets/";
  const [projetList, setProjetList] = useState([]);

  useEffect(() => {
    Axios.get(ApiUrlProjet).then((response) => {
      setProjetList(response.data);
    });
  }, []);

  return (
    <div>
      <div className="text-xl text-white text-justify">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis
      imperdiet quam, eu commodo justo volutpat et. Pellentesque vel tincidunt
      mauris, porta feugiat odio. Quisque dui tellus, lobortis vel dui id,
      sollicitudin mollis ligula. Praesent aliquam auctor erat at semper. Cras
      non euismod odio. Suspendisse et facilisis diam. Mauris a neque tempor,
      mattis urna vel, tempus sapien. In id quam mattis, tincidunt erat sit
      amet, hendrerit justo. Maecenas ut aliquet nisi, id congue quam at el
      Vestibulum sit amet purus nunc. Maecenas vitae imperdiet ex, tempor al
      accumsan justo. Quisque gravida est et mollis commodo. Suspendisse odio
      magna, pellentesque vel massa eu, malesuada.
    </div>
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
          <div className="text-lg italic">{val.lieu}</div>
         
        </div>
      </div>
      <div className="text-6xl text-white border-b-2">•
       {/* Button Gallery */}
      <button className="float-right border-2 rounded-3xl p-2 px-6 text-sm animate-pulse hover:bg-orange-100 hover:text-black hover:border-black"> Voir plus → </button>

       {/* Admin Button Cookie Token */}
       {Cookies.token ? 
       <div className="grid grid-cols-3 gap-24 text-xl pb-2">
        <button className="border-2 rounded-3xl p-2 px-6 text-sm hover:bg-orange-100 hover:text-black hover:border-black"> Creer un nouveau projet</button>
        <button className="border-2 rounded-3xl p-2 px-6 text-sm hover:bg-orange-100 hover:text-black hover:border-black"> Modifier le projet</button>
        <button className="border-2 rounded-3xl p-2 px-6 text-sm hover:animate-pulse  hover:text-red-500 hover:border-red-500"> Supprimer le projet</button>
        </div>
        : null }
      </div>
  </section>
</div>
      )}
      )}
      </div>)
}
export default Studio;
