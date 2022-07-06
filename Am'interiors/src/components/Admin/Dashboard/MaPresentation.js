import React, {useEffect, useState} from "react";
import {AiOutlineEdit, AiFillDelete} from "react-icons/ai"
import axios from "axios";

  //Import Images
import imgPresentation from "../../../Images/photoprofil.jpg"

export default function MyPresentation() {
    const ApiUrlPresentation = "http://localhost:3001/api/admin/presentation/";
    const [myPresentationList, setMyPresentationList] = useState([]);

    // Get API MONGO DB
  useEffect(() => {
    axios.get(ApiUrlPresentation).then((response) => {
      setMyPresentationList(response.data);
    });
  }, []);

  return (
  <div>
        <div className="text-orange-50/90 font-bold text-lg bg-black text-center p-4 uppercase "> Ma presentation </div>
                {myPresentationList.map((val, key) => {
                    return (
                    <div className="grid grid-cols-2">
                      <div className="mt-2 bg-black text-white text-center"> 
                        <div className="p-4">Image de présentation</div> 
                          <div><img src={imgPresentation} 
                                  className="rounded "/></div>
                          </div>
                      <div className="mt-2 bg-black text-white ">
                        <div className="p-4 text-center border-b-2 mx-8">Mes descriptions</div>
                          <div className="grid grid-rows-4">
                            <div className="px-12 py-2 border-b-2 border-white rounded-3xl mb-4 place-self-center"> Description Française </div>
                            <div className="p-2 h-28 mx-10 border-2 border-white/50 bg-orange-100/70 rounded text-sm"> " {val.descriptionFR} "
                              <button className="text-blue-600 text-xl mx-4"><AiOutlineEdit/></button>
                              <button className="text-red-600 text-xl mx-4"> <AiFillDelete/></button>
                            </div>
                            <div className="px-12 py-2 border-b-2 border-white rounded-3xl mb-4 place-self-center"> Description Anglaise </div>
                            <div className="p-2 h-28 mx-10 border-2 border-white/50 bg-orange-100/70 rounded text-sm"> " {val.descriptionEN} "
                              <button className="text-blue-600 text-xl mx-4"><AiOutlineEdit/></button>
                              <button className="text-red-600 text-xl mx-4"> <AiFillDelete/></button>
                            </div>
                          </div> 
                    
                      </div> 
                    </div>
                   
                    )
                })}
    </div>
  )
}