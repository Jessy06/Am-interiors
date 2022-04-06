import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'

  // Import components
import NavBar from './components/NavBar';


  // Import Pages
import LoginAdmin from './Pages/LoginAdmin';
import Home from './Pages/Home';
import Presentation from "./Pages/Presentation";
import Inspirations from "./Pages/Inspirations";
import Contact from "./Pages/Contact";

export default function App() {
return (
  // Routes 
  <Router>
     <NavBar/>
     <Home/>
     <Presentation/>
     <Inspirations/>
     <Contact/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/login" element = { <LoginAdmin/>}/>
      </Routes>
      </Router>
)
}

