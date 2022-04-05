import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
          <li className="items">Home</li>
          <li className="items">Présentation</li>
          <li className="items">Inspirations</li>
          <li className="items">Contact</li>
          <Link to ="/login"><li className="items">login</li></Link>
        </ul>
      )}

      <button onClick={toggleNav} className="btn">
        Sommaire
      </button>
    </nav>
  );
}
export default NavBar;
