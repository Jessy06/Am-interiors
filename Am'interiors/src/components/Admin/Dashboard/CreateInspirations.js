import React, {useState, useRef} from "react"
import axios from "axios"
import { useCookies } from "react-cookie";


export default function PostInspiration() {
    const [Cookies] = useCookies(["token"]);
    const ApiUrlPostInspiration = "http://localhost:3001/api/admin/inspirations/new";
    const [CreateInspirationRes, setCreateInspirationRes] = useState();
    const [CreateInspirationErr, setCreateInspirationErr] = useState();
    const title = useRef();
    const descriptionFR = useRef();
    const descriptionEN = useRef();
    const lieu = useRef();
    const theme = useRef();
  

    // POST
  async function PostInspiration() {
    const inspirationData = {
      title: title.current.value,
      descriptionFR: descriptionFR.current.value,
      descriptionEN: descriptionEN.current.value,
      lieu: lieu.current.value,
      theme: theme.current.value,

    };

    try {
        const res = await axios.post(ApiUrlPostInspiration, inspirationData, {
          method: "post",
          headers: {
             "auth-token": Cookies.token,
          },
        });
        const result = res.data.message;
        setCreateInspirationRes(result);
      } catch (err) {
        if (err.response.status === 400) {
          setCreateInspirationErr(err);
        }
  }
}
    return (
        <div className="grid grid-cols-2 p-2 text-black gap-5">

            {/* First Column Create inspiration*/}
           
            <div className="grid grid-row-2 gap-5 rounded">
                <div className="p-6 bg-neutral-300 rounded"> ligne 1 </div>
                    <form className="p-6 bg-neutral-300 rounded">
                        <div className="p-4 border-b-2 border-slate-200"> 
                            <span className="font-bold text-lg">
                               Nouvelle Inspirations ?
                            </span>
                            <div>
                            <span className="text-sm">
                                Créer l'inspiration en remplissant correctement le formulaire suivant
                            </span>
                            </div>
                        </div>
                        <div className="pt-4 px-4">
                            <label> formulaire de creation d'inspiration</label>
                                <div className="grid grid-cols-2">
                                    <label className="col-span-2 p-2"> TITRE <br/>
                                    <input
                                    className=""
                                    required
                                    ref={title}
                                    placeholder="Titre du inspiration"
                                    type="text"/>
                                    </label>
                                    <label className="border-r-2 border-slate-200 p-2"> DESCRIPTION FRANCAISE <br/>
                                    <input
                                    className=""
                                    required
                                    ref={descriptionFR}
                                    placeholder="Description française"
                                    type="text"/>
                                    </label>
                                    <label className="p-2"> DESCRIPTION ANGLAISE<br/>
                                    <input
                                    className=""
                                    required
                                    ref={descriptionEN}
                                    placeholder="English description"
                                    type="text"/>
                                    </label>
                                    <label className="p-2 border-r-2 border-slate-200 p-2"> LIEU<br/>
                                    <input
                                    className=""
                                    required
                                    ref={lieu}
                                    placeholder="Lieu du inspiration"
                                    type="text"/>
                                    </label>
                                    <label className="p-2"> Theme <br/>
                                    <input
                                    className=""
                                    required
                                    ref={theme}
                                    placeholder="A quelle theme appartient-il?"
                                    type="text"/>
                                    </label>
                                    <button
                                    type="button"
                                    className="text-center col-span-2 border-2 border-black p-2 hover:bg-orange-600"
                                    onClick={PostInspiration}> Créer </button>
                                </div>
                            </div>
                            {CreateInspirationRes && (
                    <div
                      className="bg-blue-100 border mt-2 flex border-orange-500 text-blue-700 px-4 py-3 rounded relative"
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
                      <span className="block sm:inline">{CreateInspirationRes}</span>
                    </div>
                  )}
                  {CreateInspirationErr && (
                    <div
                      className="bg-red-200 border mt-2 flex border-orange-400 text-orange-700 px-4 py-3 rounded relative"
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
                      <span className="block sm:inline">{CreateInspirationErr}</span>
                    </div>
                  )}
                    </form>
            </div>
    
            {/* Second Column */}
            <div className="grid grid-row-4 gap-5">
                <div className="bg-orange-800 rounded ">
                    <div className="text-sm italic font-bold">Nom de l'admin</div> 
                    <div className="text-sm italic">fonction de l'admin</div>
                    </div>
                <div className="bg-orange-800 row-span-4 rounded"> Previsualiser (si possible hein) </div>
                <div className="bg-orange-800 row-span-2 rounded"> Description page Inspiration </div>
                <div className="bg-orange-800  rounded"> voir tous les inspirations </div>
                </div>
        </div>
    )
}

