import React, {useEffect, useState} from 'react';
import Axios from "axios";


function Test() {
  const ApiUrl = "http://localhost:3001/api/admin/projets/";
  const [projetList, setProjetList] = useState([]);

  useEffect(() => {
    Axios.get(ApiUrl).then((response) => {
      setProjetList(response.data)});
  }, [])


  return (
    <div>
      {projetList.map((val, key) => {
        return (
          <div class="flex space-x-4 ">
          <div className="2xl p-5 pr-5 pb-0.5 pl-0.5 rounded-xl"></div>
          <div class="bg-white rounded-lg shadow-2xl md:flex">
            <img
              src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8"
              alt="Laptop on Desk"
              class="md:w-2/5 rounded-t-lg md:rounded-l-lg md:rounded-t-"
            />
            <div class="p-7">
              <h2 class="font-bold text-xl md:text-3xl mb-2 text-orange-800">
                {val.title}
              </h2>
              <p class="text-black">{val.description} {val.lieu}</p>
            </div>
          </div>
        </div>
    
        
        )
      })}
    </div>
    )
}

export default Test;