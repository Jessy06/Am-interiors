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
            Voici quelques Mood-boards et planches d’inspirations que j’ai créés
            pour certains de mes projets. L’inspiration vient toujours de
            partout, ça peut autant venir d’une vitrine de boutique de déco
            devant laquelle on passe, que d’une personne qu’on croise dans la
            rue et qui porte des vêtements dont l’association de couleurs fixe
            le regard, l’inspiration vient toujours de quelque chose qui
            interpelle , mais évidemment tout ça inspire parce qu’on cherche
            l’inspiration, c’est non stop , la recherche d’inspiration est en
            quelque sorte un mode de vie, ça ne s’arrête jamais, ça ne prend pas
            de vacances, mon smartphone et mon bloc notes ne me quittent jamais,
            car c’est grâce a eux que je capte ce qui me plait et que je note ce
            que je n’ai pas envie d’oublier.
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
