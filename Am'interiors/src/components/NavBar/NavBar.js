import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./NavBar.css";

function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [Cookies] = useCookies(["token", "id", "pseudo"]);

  const navigationAdmin = [
    { name: "Dashboard", href: "/admin", current: false },
  ];

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
    <nav className="p-2">
      {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
          <span className="text-6xl p-0.5 text-black">•</span>
          <span className="text-6xl p-0.5 text-orange-800">•</span>

          {/* Token */}
          {Cookies.token
            ? navigationAdmin.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className= "items"
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))
            : null}
          {/* End Token */}

          <Link to="/">
            <li className="items">Home</li>
          </Link>
          <Link to="/presentation">
            <li className="items">Presentation</li>
          </Link>
          <Link to="/inspirations">
            <li className="items">Inspirations</li>
          </Link>
          <Link to="/studio">
            <li className="items">Studio</li>
          </Link>
          <Link to="/contact">
            <li className="items">Contact</li>
          </Link>
          <Link to="/login">
            <li className="items">Login</li>
          </Link>
        </ul>
      )}

      <button onClick={toggleNav} className="btn">
        Sommaire
      </button>
    </nav>
  );
}
export default NavBar;
