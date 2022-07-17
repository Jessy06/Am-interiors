import React, {useEffect, useState} from "react";
import {AiOutlineEdit, AiFillDelete} from "react-icons/ai"
import axios from "axios";

// Import Image
import imageCard from "../../../Images/imageCard.jpg"

export default function MyProjects() {
    const ApiUrlProjet = "http://localhost:3001/api/admin/projets/";
    const [myProjetList, setMyProjetList] = useState([]);

    // Get API MONGO DB
  useEffect(() => {
    axios.get(ApiUrlProjet).then((response) => {
      setMyProjetList(response.data);
    });
  }, []);

  return (
    <div>
        <div className="text-orange-50/90 font-bold text-lg bg-black text-center p-4 uppercase "> Mes Projets </div>
            <div className="flex flex-wrap space-auto-rows-auto place-content-center"> 
                {myProjetList.map((val) => {
                    return (
                        <div className="hover:shadow-slate-700 hover:shadow-lg hover:rounded-lg m-2">
                            <div>
                                <img src={imageCard}
                                className="h-48 w-auto rounded-t-lg"/>
                            </div>
                    <div className="bg-black p-6 rounded-b-lg inline-block w-72">
                        <div className="text-orange-50/90 uppercase font-bold text-2xl py-0.5">{val.title} </div>
                        <div className="text-orange-50/90 ">{val.descriptionFR} </div> <br/>
                        <div className="text-orange-50/90">{val.descriptionEN} </div>
                        <div className="text-orange-50/90 italic text-sm text-right py-2">{val.lieu} </div>
                        <div className="flex flex-wrap mt-2">
                            <button className="border-orange-50/90 border-2 rounded-xl text-orange-50/90 text-sm py-0.5 px-2"> Voir images</button> 
                            <button className="text-blue-600 text-xl mx-4"><AiOutlineEdit/></button>
                            <button className="text-red-600 text-xl mx-4"> <AiFillDelete/></button>
                        </div>
                    </div>
                    </div>
                   
                    )
                })}
            </div>
    </div>
  )
}