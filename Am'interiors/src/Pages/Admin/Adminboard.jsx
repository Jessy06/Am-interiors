import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";

// import components 
import NavigationAdmin from '../../components/Admin/leftfilter'

function Dashboard() {
  const [Cookies, removeCookies] = useCookies(["token", "pseudo", "id"]);
  const navigate = useNavigate();

  const logOut = () => {
    removeCookies('token');
    removeCookies('pseudo');
    removeCookies('id');

    navigate("/", {replace: true})
  };

  return (
    <div className="p-14">
      <h1 className='text-8xl text-white text-right border-r-4 border-b-4 border-orange-100/75 p-4'>Hi, buddy ! Dashboard !</h1>
      <NavigationAdmin/>
      <bouton
      type="button"
      onClick = {logOut}> Log out </bouton>
    </div>
  )
}

export default Dashboard;