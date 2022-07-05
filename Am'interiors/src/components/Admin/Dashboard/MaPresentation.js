import React, {useEffect, useState} from "react";
import axios from "axios";

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
    <div> Holala</div>

  {myPresentationList.map((val, key) => {
    return (
        <div> 
            <h1 className="text-black">{val.titleFR} </h1></div>
    )
  }
  
  )}
  </div>
  )
}