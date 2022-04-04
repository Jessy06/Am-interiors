import React, {useState, useEffect} from 'react'
import './App.css'


export default function App() {
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
      

    <img 
      //src="https://www.lamaisonsaintgobain.fr/guides-travaux/tout-savoir-sur-l-amenagement-interieur/amenagement-interieur-conseils-et-solutions"
      src={'./public/images/amenagement-interieur.jpg'}
      alt="interieur"
    />
   
   
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div id="demoFont">Am'interiors</div>
      
      <font size="10"><p>Société<br></br>
      d'aménagement<br></br>
      d'intérieur</p></font>

      
      <button onClick={toggleNav} className="btn">Sommaire</button>
   
    <input class="favorite styled"
       type="button"
       value="Work With me">
         </input>

         </nav>
  )
}

