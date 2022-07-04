import React from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { AiOutlinePlus } from "react-icons/ai";
import {
  BsImages,
  BsLightbulbFill,
  BsListNested,
  BsPersonDashFill,
} from "react-icons/bs";

// Import components
import PostProjet from "./CreateProjet.js";
import PostInspiration from "./CreateInspirations";

function NavigationAdmin() {
  const [landingDashboard, setShowLandingDashboard] = React.useState(true);
  const [showMesProjets, setShowMesProjets] = React.useState(false);
  const [showCreateProjet, setShowCreateProjet] = React.useState(false);
  const [showCreateInspiration, setShowCreateInspiration] =
    React.useState(false);
  const [removeCookies] = useCookies(["token", "pseudo", "id"]);
  const navigate = useNavigate();

  const logOut = () => {
    removeCookies("token");
    removeCookies("pseudo");
    removeCookies("id");
    navigate("/", { replace: true });
  };

  return (
    <div className="grid grid-cols-6 gap-0.5 pt-0.5 ">
      {/* Start of first columns */}
      <div className="text-sm p-4 grid bg-orange-50/80 uppercase text-black rounded h-full">
        {/* header of filter */}

        <div
          className="mt-2 p-2 hover:bg-orange-800 hover:text-white active:bg-orange-800 active:text-white"
          onClick={() => [
            setShowMesProjets(true),
            setShowLandingDashboard(false),
            setShowCreateProjet(false),
            setShowCreateInspiration(false),
          ]}
        >
          <BsImages /> Mes Projets
        </div>
        <div className="mt-2 p-2 hover:bg-orange-800 hover:text-white">
          
          <BsLightbulbFill /> Mes Inspirations
        </div>
        <div className="mt-2 p-2 hover:bg-orange-800 hover:text-white active:bg-orange-800 active:text-white">
          
          <BsPersonDashFill /> Ma présentation
        </div>
        <div className="mt-2 mb-10 p-2 hover:bg-orange-800 hover:text-white active:bg-orange-800 active:text-white">
          
          <BsListNested /> Mes Services
        </div>

        {/* end of filter header*/}

        <div className="grid grid-rows-2 h-fit">
          <div
            className="my-2 p-2 bg-orange-800 text-white"
            onClick={() => [
              setShowLandingDashboard(false),
              setShowMesProjets(false),
              setShowCreateProjet(true),
              setShowCreateInspiration(false),
            ]}
          >
            {" "}
            <AiOutlinePlus /> Nouveau(x) projet(s)
          </div>
          <div
            className="my-2 p-2 bg-orange-800 text-white"
            onClick={() => [
              setShowLandingDashboard(false),
              setShowMesProjets(false),
              setShowCreateProjet(false),
              setShowCreateInspiration(true),
            ]}
          >
            <AiOutlinePlus /> Nouvelle(s) Inspiration(s)
          </div>

          <div
            className="my-2 p-2 bg-orange-800 text-white"
            onClick={() => [
              setShowLandingDashboard(false),
              setShowMesProjets(false),
              setShowCreateProjet(false),
              setShowCreateInspiration(true),
            ]}
          >
            <AiOutlinePlus /> Nouveau(x) Service(s)
          </div>

        </div>
        <div className="p-2 mb-4 text-red-900 border-t-2 hover:bg-orange-800 hover:text-white ">
          <bouton type="button" onClick={logOut} className="float-right">
            Log out
          </bouton>
        </div>
      </div>

      {/* End of first columns */}

      {/* Start of second columns */}
      <div className="col-span-5 p-4 text-white bg-gray-100">
        {landingDashboard ? (
          <div className="text-orange-50/80 text-center p-40 text-4xl animate-pulse">
            Colonne 2
          </div>
        ) : null}

        <div>
          {showMesProjets? ( 
            <div className="text-white">
              Voici mes Projets
            </div>
          ) : null}
        </div>

        <div>
          {showCreateProjet ? (
            <div className="text-white">
              <PostProjet />
            </div>
          ) : null}
        </div>

        <div>
          {showCreateInspiration ? (
            <div className="text-white">
              <PostInspiration />
            </div>
          ) : null}
        </div>
      </div>
      {/* End of Second columns */}
    </div>
  );
}
export default NavigationAdmin;
