import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'

  // Import components
import NavBar from './components/NavBar';
import Test from './components/Test';

  // Import Pages
import AdminLog from './Pages/AdminLog';

export default function App() {
return (
  // Routes 
  <Router>
     <NavBar/>
      <Routes>
        <Route path="/login" element = { <AdminLog/>}/>
      </Routes>
      </Router>
)
}

