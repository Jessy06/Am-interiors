import React from 'react'

//Import Components
import Auron1 from '../../../Images/LeChaletAuron1.png'
import Auron2 from '../../../Images/LeChaletAuron2.png'
import Auron3 from '../../../Images/LeChaletAuron3.png'
import Auron4 from '../../../Images/LeChaletAuron4.png'
import Auron5 from '../../../Images/LeChaletAuron5.png'

import Villa1 from '../../../Images/PlancheInspirationVillaDuCap1.png'
import Villa2 from '../../../Images/PlancheInspirationVillaDuCap2.png'
import Villa3 from '../../../Images/PlancheInspirationVillaDuCap3.png'

import Presentation from '../../../Images/PlanchePresentationDeConcept.png'
function Inspirations() {
  return (
    <div>
      <div
        className="text-2xl text-white p-1 pr-1 pb-1 pl-1"
        alt="presentation"
      >
        <div className="p-1">
          <span className="text-lg lg:text-2xl text-white">
          Here are some Mood-boards and inspiration boards that I created
              for some of my projects. Inspiration always comes from
              everywhere, it can just as well come from a decoration shop window
              in front of whom we pass, than of a person whom we cross in the
              street and who wears clothes whose association of colors fixes
              the gaze, the inspiration always comes from something that
              challenges, but obviously all that inspires because we seek
              inspiration is non stop, the search for inspiration is in
              kind of a way of life, it never ends, it doesn't take
              holidays, my smartphone and my notepad never leave me,
              because it is thanks to them that I capture what I like and that I note what
              that I don't want to forget.
          </span>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <div className="grid lg:grid-cols-1 gap-2 lg:place-items-center">
          <img src={Auron1} className="" alt="Auron1" />
          <img src={Auron2} className="" alt="Auron2" />
          <img src={Auron3} className="" alt="Auron3" />
          <img src={Auron4} className="" alt="Auron4" />
          <img src={Auron5} className="" alt="Auron5" />
          <img src={Villa1} className="" alt="Villa1" />
          <img src={Villa2} className="" alt="Villa2" />
          <img src={Villa3} className="" alt="Villa3" />
          <div className="grid lg:grid-cols-1 items-center  lg:place-items-center">
            <img src={Presentation} className="" alt="PresentationConcept" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Inspirations
