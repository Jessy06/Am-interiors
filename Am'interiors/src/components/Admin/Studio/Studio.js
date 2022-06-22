import React, { useEffect, useState } from "react";
import {useCookies} from 'react-cookie';
import Axios from "axios";

// Import Components

function Studio() {
  const [Cookies] = useCookies(["token","id", "pseudo"]);
  const ApiUrlProjet = "http://localhost:3001/api/admin/projets/";
  const [projetList, setProjetList] = useState([]);
  const [showModalNewProjet, setShowModalNewProjet] = React.useState(false)

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
          <span className="text-lg float-left italic">{val.lieu}</span>
         
        </div>
      </div>
      <div className="text-6xl text-white border-b-2">•
       {/* Button Gallery */}
      <button className="float-right border-2 rounded-3xl p-2 px-6 text-sm animate-pulse hover:bg-orange-100 hover:text-black hover:border-black"> Voir plus → </button>

       {/* START Admin Button Cookie Token */}
       {Cookies.token ? 
       <div className="grid grid-cols-3 gap-24 text-xl pb-2">
        
        <button className="border-2 rounded-3xl p-2 px-6 text-sm hover:bg-orange-100 hover:text-black hover:border-black"
        type="button"
        onClick={() => setShowModalNewProjet(true)}> Creer un nouveau projet</button>
          {showModalNewProjet ? (
           <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-70 mx-auto max-w-6xl">
               {/*content*/}
               <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t pr-10 pl-10">
                <h3 className="text-3xl text-black font-semibold">
                  Créer un nouveau projet
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 float-right text-3xl leading-none font-semibold"
                    onClick={() => setShowModalNewProjet(false)}
                  >
                    <span className="text-red-500 h-6 w-6 text-3xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
              </div>            
            </div>
           </div>
          ): null }

        <button className="border-2 rounded-3xl p-2 px-6 text-sm hover:bg-orange-100 hover:text-black hover:border-black"> Modifier le projet</button>
        <button className="border-2 rounded-3xl p-2 px-6 text-sm hover:animate-pulse  hover:text-red-500 hover:border-red-500"> Supprimer le projet</button>
        
        </div>
        : null }
  
       {/* END Admin Button Cookie Token */}
      
      </div>

  </section>
</div>
      )}
      )}
      </div>)
}
export default Studio;
