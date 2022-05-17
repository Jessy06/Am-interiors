import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'

  // Import components
import NavBar from './components/NavBar/NavBar';
import Formulaire from './components/PopUp/Formulaire';
import Footer from '.Footer/components/Footer/Footer';
  // Import Pages
import LoginAdmin from './Pages/LoginAdmin';
import Home from './Pages/Home';
import Presentation from "./Pages/Presentation";
import Inspirations from "./Pages/Inspirations";
import Contact from "./Pages/Contact";
import Studio from "./Pages/Studio";
import Dashboard from "./Pages/Admin/Adminboard";


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
        <Route path="/studio" element = {<Studio/>}/>
        <Route path="/login" element = { <LoginAdmin/>}/>
        <Route path="/Formulaire" element = { <Formulaire/>}/>
        <Route path="/admin" element = { <Dashboard/>}/>
        <Route path="/Footer" element = { <Footer/>}/>
      </Routes>
      </Router>
)
}