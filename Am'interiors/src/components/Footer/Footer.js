import React from "react";
import { render } from "react-dom";


const Footer = () => (
  <footer className="footer">
    <p>Some footer nonsense!</p>
  </footer>
);

const App = () => (
  <div className="content">
    
  </div>
);

render([<App key="1" />, <Footer key="2" />], document.getElementById("root"));
