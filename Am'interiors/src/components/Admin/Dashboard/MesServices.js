import React, {useEffect, useState} from "react";
import axios from "axios";

export default function MyServices() {
    const ApiUrlProjet = "http://localhost:3001/api/admin/services/";
    const [myProjetList, setMyProjetList] = useState([]);

    // Get API MONGO DB
  useEffect(() => {
    axios.get(ApiUrlProjet).then((response) => {
      setMyProjetList(response.data);
    });
  }, []);

  return (
    <div>
      <div className=""> Holala</div>
        <div class="flex flex-wrap space-auto-rows-auto m-2">
  {myProjetList.map((val, key) => {
    return (
      <div className="mr-4">
            <div class="bg-white rounded-lg shadow-2xl md:flex">
              <img
                src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8"
                alt="Laptop on Desk"
                className="w-60 h-auto rounded"
              />
          <div class="p-7">
            <h2 class="text-xl md:text-2xl mb-2 text-orange-800 underline underline-offset-8">
            {val.titleServiceFR}
            </h2>
            <p class="text-black">{val.descriptionServiceFR}</p>
          </div>
        </div>
        </div>
    )
  }
  
  )}
  </div>
  
  </div>
  )
}