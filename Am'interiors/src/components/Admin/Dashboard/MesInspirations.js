import React, {useEffect, useState} from "react";
import axios from "axios";
import {AiOutlineEdit, AiFillDelete} from "react-icons/ai"

// import image
import imageInspirationCard from '../../../Images/imageInspirationCard.jpg'

export default function MyInspirations() {
    const ApiUrlInspiration = "http://localhost:3001/api/admin/inspirations/";
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
            <div className="flex space-auto-rows-auto "> 
                {myInspirationList.map((val, key) => {
                    return (
                        <div className="hover:shadow-slate-700 hover:shadow-lg m-2">
                            <div>
                                <img src={imageInspirationCard}
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