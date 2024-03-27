import React from 'react'
import NavigationBar from '../components/NavigationBar'
import DigitalModelCard from '../components/DigitalModelCard'
import arrowDown from '../assets/icons/down-arrow.png'
import '../bg.css'

import leopard2a7 from '../assets/images/Digital/leopard2Bg.png'
import morrigan from '../assets/images/Digital/acRogueLowPoly.jpg'

import mg3 from '../assets/images/Digital/mg3.jpg'


import HomeButton from '../components/HomeButton'
const DigitalModelGallery = () => {
  return (
    <div>
        <NavigationBar></NavigationBar>
        
        <div className='flex justify-center my-32' >
        <div>
          <h1 className='title-text text-center'>DIGITAL MODEL</h1>
          <div className='flex justify-center mt-5'><img src={arrowDown} alt="" style={{width:'15px', height:'15px'}}/></div>
        </div>
      </div>


        <DigitalModelCard 
          id={"leopard2a7"} 
          modelName={"Leopard 2A7 Variant"}
          modelDescription={" The Leopard 2 is a third generation German main battle tank for the Bundeswehr. Developed by Krauss-Maffei, it features a 120mm smoothbore gun, advanced fire control system, and improved armor protection, making it a formidable force on the battlefield."}   
          image={leopard2a7}
          sketchfabLink={'https://skfb.ly/oHCYU'}
        />
        
       

        <DigitalModelCard 
          id={"lowpolyMorrigan"} 
          modelName={"Low Poly Assassin Creed Rogue Morrigan Diorama"}
          modelDescription={"Inpired by Ubisoft's 2014 Assassin Creed Rogue, it features the main theme of the game which takes place in a winter scenery with the Morrigan."}   
          image={morrigan}
          sketchfabLink={'https://skfb.ly/oSu9L'}
          isLeftSide={true}
        />

        <DigitalModelCard 
            id={"mg3"} 
            modelName={"Bundeswehr MG3"}
            modelDescription={"The MG3 is a powerful and reliable machine gun that has been in service since the 1960s. Derived from MG42 in the Second World War, it continues to serve to this day as a squad support weapon and a vehicle-mounted machine gun."}   
            image={mg3}
            sketchfabLink={'https://skfb.ly/oSuwI'}
        />

<HomeButton></HomeButton>
    </div>
  )
}

export default DigitalModelGallery
//bgCss={"Hello"} backgroundImage={"This is a background"}