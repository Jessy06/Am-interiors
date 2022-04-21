import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'

  // Import components
import NavBar from './components/NavBar/NavBar';
import Test from './components/Test';

  // Import Pages
import LoginAdmin from './Pages/LoginAdmin';
import Home from './Pages/Home';
import Presentation from "./Pages/Presentation";
import Inspirations from "./Pages/Inspirations";
import Contact from "./Pages/Contact";
import Projets from "./Pages/Projets";


export default function App() {
return (
  // Routes 
  <Router>
     <NavBar/> 
     <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/presentation" element = {<Presentation/>}/>
        <Route path="/inspirations" element = {<Inspirations/>}/>
        <Route path="/contact" element = {<Contact/>}/>
        <Route path="/projets" element = {<Projets/>}/>
        <Route path="/login" element = { <LoginAdmin/>}/>
        <Route path="/test" element = { <Test/>}/>
      </Routes>
      </Router>
)
}