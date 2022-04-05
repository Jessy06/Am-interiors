import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'

  // Import components
import NavBar from './components/NavBar';
import Test from './components/Test';

  // Import Pages
import AdminLog from './Pages/AdminLog';
import Home from './Pages/Home';

export default function App() {
return (
  // Routes 
  <Router>
     <NavBar/>
     <Home/>
      <Routes>
        <Route path="/login" element = { <AdminLog/>}/>
      </Routes>
      </Router>
)
}

