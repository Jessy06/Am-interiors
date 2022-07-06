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
import PostService from "./CreateService.js";
import MyProjects from "./MesProjets.js";
import MyInspirations from "./MesInspirations.js";
import MyPresentation from "./MaPresentation.js";
import MyServices from "./MesServices.js";

function NavigationAdmin() {
  const [landingDashboard, setShowLandingDashboard] = React.useState(true);
  const [showMesProjets, setShowMesProjets] = React.useState(false);
  const [showMesInspirations, setShowMesInspirations] = React.useState(false);
  const [showMaPresentation, setShowMaPresentation] = React.useState(false);
  const [showMesServices, setShowMesServices] = React.useState(false);
  const [showCreateService, setShowCreateService] = React.useState(false);
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
            setShowMesInspirations(false),
            setShowMaPresentation(false),
            setShowMesServices(false),
            setShowLandingDashboard(false),
            setShowCreateProjet(false),
            setShowCreateInspiration(false),
            setShowCreateService(false),
          ]}
        >
          <BsImages /> Mes Projets
        </div>
        <div className="mt-2 p-2 hover:bg-orange-800 hover:text-white"
        onClick={() => [
          setShowMesProjets(false),
          setShowMesInspirations(true),
          setShowMaPresentation(false),
          setShowMesServices(false),
          setShowLandingDashboard(false),
          setShowCreateProjet(false),
          setShowCreateInspiration(false),
          setShowCreateService(false),
      ]}>      
          <BsLightbulbFill /> Mes Inspirations
        </div>
        <div className="mt-2 p-2 hover:bg-orange-800 hover:text-white active:bg-orange-800 active:text-white"
        onClick={() => [
          setShowMesProjets(false),
          setShowMesInspirations(false),
          setShowMaPresentation(true),
          setShowMesServices(false),
          setShowLandingDashboard(false),
          setShowCreateProjet(false),
          setShowCreateInspiration(false),
          setShowCreateService(false),
        ]}>
          
          <BsPersonDashFill /> Ma présentation
        </div>
        <div className="mt-2 mb-10 p-2 hover:bg-orange-800 hover:text-white active:bg-orange-800 active:text-white"
        onClick={() => [
          setShowMesProjets(false),
          setShowMesInspirations(false),
          setShowMesServices(true),
          setShowMaPresentation(false),
          setShowLandingDashboard(false),
          setShowCreateProjet(false),
          setShowCreateInspiration(false),
          setShowCreateService(false),
        ]}>
          
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
              setShowCreateService(false),
              setShowMesInspirations(false),
              setShowMesServices(false),
            ]}
          >
            {" "}
            <AiOutlinePlus /> Nouveau(x) projet(s)
          </div>
          <div
            className="my-2 p-2 bg-orange-800 text-white"
            onClick={() => [
              setShowLandingDashboard(false),
              setShowCreateProjet(false),
              setShowCreateInspiration(true),
              setShowCreateService(false),
              setShowMesProjets(false),
              setShowMesInspirations(false),
              setShowMesServices(false),
            ]}
          >
            <AiOutlinePlus /> Nouvelle(s) Inspiration(s)
          </div>

          <div
            className="my-2 p-2 bg-orange-800 text-white"
            onClick={() => [
              setShowLandingDashboard(false),
              setShowCreateProjet(false),
              setShowCreateInspiration(false),
              setShowCreateService(true),
              setShowMesProjets(false),
              setShowMesInspirations(false),
              setShowMesServices(false),
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
          <div className="text-black text-center p-40 text-4xl animate-pulse">
            Colonne 2
          </div>
        ) : null}

        <div>
          {showMesProjets? ( 
            <div className="text-black">
              <MyProjects/>
            </div>
          ) : null}
        </div>

        <div>
          {showMesInspirations? ( 
            <div className="text-black">
              <MyInspirations/>
            </div>
          ) : null}
        </div>

        <div>
          {showMaPresentation? ( 
            <div className="text-black">
              <MyPresentation/>
            </div>
          ) : null}
        </div>
        <div>

          {showMesServices? ( 
            <div className="text-black">
              <MyServices/>
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

        <div>
          {showCreateService ? (
            <div className="text-white">
              <PostService/>
            </div>
          ) : null}
        </div>
      </div>
      {/* End of Second columns */}
    </div>
  );
}
export default NavigationAdmin;
