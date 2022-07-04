import React from 'react';
// import {useCookies} from "react-cookie"
// import { useNavigate } from "react-router-dom"

// import components 
import NavigationAdmin from '../../components/Admin/Dashboard/Dashboard'

function Dashboard() {
  // const [Cookies, removeCookies] = useCookies(["token", "pseudo", "id"]);
  // const navigate = useNavigate();

  // const logOut = () => {
  //   removeCookies('token');
  //   removeCookies('pseudo');
  //   removeCookies('id');

  //   navigate("/", {replace: true})
  // };

  return (
    <div className="">
        <NavigationAdmin/>
      {/* <bouton
      className="text-white"
      type="button"
      onClick = {logOut}> Log out </bouton> */}
    </div>
  )
}

export default Dashboard;