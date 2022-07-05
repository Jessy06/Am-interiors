import React, {useState, useRef} from "react"
import axios from "axios"
import { useCookies } from "react-cookie";


export default function PostService() {
    const [Cookies] = useCookies(["token"]);
    const ApiUrlPostService = "http://localhost:3001/api/admin/service/new";
    const [CreateServiceRes, setCreateServiceRes] = useState();
    const [CreateServiceErr, setCreateServiceErr] = useState();
    const titleServiceFR = useRef();
    const titleServiceEN = useRef();
    const descriptionServiceFR = useRef();
    const descriptionServiceEN = useRef();
  
    

    // POST
  async function PostService() {
    const serviceData = {
     titleServiceFR:titleServiceFR.current.value,
     titleServiceEN:titleServiceEN.current.value,
     descriptionServiceFR:descriptionServiceFR.current.value,
     descriptionServiceEN:descriptionServiceEN.current.value,



    };

    try {
        const res = await axios.post(ApiUrlPostService, serviceData, {
          method: "post",
          headers: {
             "auth-token": Cookies.token,
          },
        });
        const result = res.data.message;
        setCreateServiceRes(result);
      } catch (err) {
        if (err.response.status === 400) {
          setCreateServiceErr(err);
        }
  }
}
    return (
        <div className="grid grid-cols-2 p-2 text-black gap-5">

            {/* First Column Create Contact*/}
           
            <div className="grid grid-row-2 gap-5 rounded">
                <div className="p-6 bg-blue-100 rounded"> ligne 1 </div>
                    <form className="p-6 bg-blue-300 rounded">
                        <div className="p-4 border-b-2 border-slate-200"> 
                            <span className="font-bold text-lg">
                               Nouveau Service
                            </span>
                            <div>
                            <span className="text-sm">
                                Créer le Nouveau en remplissant correctement le formulaire suivant
                            </span>
                            </div>
                        </div>
                        <div className="pt-4 px-4">
                            <label> formulaire de creation de Service</label>
                                <div className="grid grid-cols-2">
                                    <label className="border-r-2 border-slate-200 p-2"> TITRE FR<br/>
                                    <input
                                    className=""
                                    required
                                    ref={titleServiceFR}
                                    placeholder="Titre du service"
                                    type="text"/>
                                    </label>
                                    <label className="p-2"> TITRE EN<br/>
                                    <input
                                    className=""
                                    required
                                    ref={titleServiceEN}
                                    placeholder="Titre du service"
                                    type="text"/>
                                    </label>
                                    <label className="border-r-2 border-slate-200 p-2"> DESCRIPTION DU SERVICE en FR <br/>
                                    <input
                                    className=""
                                    required
                                    ref={descriptionServiceFR}
                                    placeholder="Description service"
                                    type="text"/>
                                    </label>
                                    <label className="p-2"> DESCRIPTION DU SERVICE en EN<br/>
                                    <input
                                    className=""
                                    required
                                    ref={descriptionServiceEN}
                                    placeholder="English service description"
                                    type="text"/>
                                    </label>
                                    <button
                                    type="button"
                                    className="text-center col-span-2 border-2 border-black p-2"
                                    onClick={PostService}> Créer </button>
                                </div>
                            </div>
                            {CreateServiceRes && (
                    <div
                      className="bg-blue-100 border mt-2 flex border-blue-500 text-blue-700 px-4 py-3 rounded relative"
                      role="alert"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="block sm:inline">{CreateServiceRes}</span>
                    </div>
                  )}
                  {CreateServiceErr && (
                    <div
                      className="bg-red-100 border mt-2 flex border-red-400 text-red-700 px-4 py-3 rounded relative"
                      role="alert"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeWidth="2"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                      <span className="block sm:inline">{CreateServiceErr}</span>
                    </div>
                  )}
                    </form>
            </div>
    
            {/* Second Column */}
            <div className="grid grid-row-4 gap-5">
                <div className="bg-red-300 rounded ">
                    <div className="text-sm italic font-bold">Nom de l'admin</div> 
                    <div className="text-sm italic">fonction de l'admin</div>
                    </div>
                <div className="bg-red-200 row-span-4 rounded"> Previsualiser (si possible hein) </div>
                <div className="bg-red-200 row-span-2 rounded"> Description page Inspiration </div>
                <div className="bg-red-200  rounded"> voir tous les inspirations </div>
                </div>
        </div>
    )
}

