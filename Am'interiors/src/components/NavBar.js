import React, {useState, useEffect} from 'react';
import '../App.css'

function NavBar () {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  
  
    const toggleNav = () => {
      setToggleMenu(!toggleMenu)
    }
    
    useEffect(() => {
  
      const changeWidth = () => {
        setScreenWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', changeWidth)
  
      return () => {
          window.removeEventListener('resize', changeWidth)
      }
  
    }, [])
    
  
    return (
      <nav>
        {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
        <li className="items">Home</li>
        <li className="items">Présentation</li>
        <li className="items">Inspirations</li>
        <li className="items">Contact</li>
        </ul>
      
        )}
    
  
    
  
        
        <button onClick={toggleNav} className="btn">Sommaire</button>
     
  
           </nav>
    )
}
export default NavBar;