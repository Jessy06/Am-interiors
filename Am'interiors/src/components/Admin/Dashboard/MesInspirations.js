import React, {useEffect, useState} from "react";
import axios from "axios";
import {AiOutlineEdit, AiFillDelete} from "react-icons/ai"

// import image
import imageInspirationCard from '../../../Images/imageInspirationCard.jpg'

export default function MyInspirations() {
    const ApiUrlInspiration = "http://localhost:3001/api/admin/inspirations/";
    const [editModal, setEditModal] = React.useState(false)
    const [myInspirationList, setMyInspirationList] = useState([]);

    // Get API MONGO DB
  useEffect(() => {
    axios.get(ApiUrlInspiration).then((response) => {
      setMyInspirationList(response.data);
    });
  }, []);

  return (
    <div>
        <div className="text-orange-50/90 font-bold text-lg bg-black text-center p-4 uppercase "> Mes Inspirations </div>
            <div className="flex flex-wrap space-auto-rows-auto place-content-center"> 
                {myInspirationList.map((val) => {
                    return (
                        <div className="hover:shadow-slate-700 hover:shadow-lg m-2 rounded-b-lg">
                            <div>
                                <img src={imageInspirationCard} alt="image par défaut d'un livre"
                                className="h-48 w-auto rounded-t-lg"/>
                            </div>
                    <div className="bg-black p-6 rounded-b-lg">
                        <div className="text-orange-50/90 uppercase font-bold text-2xl py-0.5">{val.title} </div>
                        <div className="text-orange-50/90">{val.descriptionFR} </div>
                        <div className="text-orange-50/90">{val.descriptionEN} </div>
                        <div className="text-orange-50/90">{val.theme} </div>
                        <div className="text-orange-50/90 italic text-sm text-right py-2">{val.lieu} </div>
                        <div className="flex flex-wrap mt-2">
                            <button className="border-orange-50/90 border-2 rounded-xl text-orange-50/90 text-sm py-0.5 px-2"> Voir images</button> 
                            <button className="text-blue-600 text-xl mx-4"
                            onClick={ () => setEditModal(true)}><AiOutlineEdit/></button>
                            <button className="text-red-600 text-xl mx-4"> <AiFillDelete/></button>
                        </div>
                    </div>
                    </div> 
                    )
                })}
                   {editModal ? (
                    <>
                    <form className="bg-black hover:shadow-slate-700 hover:shadow-lg m-2 rounded-lg w-1/3">
                      <div className="text-orange-50/90 font-bold text-xl p-2 text-center border-b-2 border-slate-100 mx-6"> Formulaire de modification  
                      <span className="text-lg text-red-500/90 float-right mr-1 mt-0.5 cursor-pointer hover:animate-pulse"
                        onClick={ () =>  setEditModal(false) }> X </span>
                     </div>
                     <div className="text-orange-50/80 grid grid-rows-3 py-2 border-b-2 border-slate-100 mx-6 ">
                     <label className="pb-0.5"> Nouveau titre</label>
                     <input
                      className="w-1/2 bg-orange-50/90 text-black rounded"/>
                     <label className="pb-0.5"> Nouvel Description française</label> 
                     <textarea
                      className="w-full bg-orange-50/90 text-black rounded"/>

                     <label className="pb-0.5"> Nouvel Description anglaise</label> 
                     <textarea
                      className="w-full bg-orange-50/90 text-black rounded"/>
                      
                     <label className="pb-0.5"> Nouveau Lieu</label> 
                     <input
                      className="w-1/2 bg-orange-50/90 text-black rounded"/>

                     <label className="pb-0.5"> Nouveau Theme</label> 
                     <input
                      className="w-1/2 bg-orange-50/90 text-black rounded"/>

                     </div>
                     <div className="p-2 grid place-content-center"> 
                      <button 
                       type="submit"
                       className="bg-black border-2 rounded-full border-orange-50/80 text-orange-50/80 text-sm p-2"> Modifier</button>
                     </div>
                    </form>
                    </> ) : null }
            </div>
         
    </div>
  )
}