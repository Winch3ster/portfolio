import { Html } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'
import React from 'react'




const Indicator = ({description, position, rotateY, page, positionFitScreen,darkText, ...props}) => {
    let textColor = 'white'
    if (darkText){
      textColor = '#1c1c1c'
    }
    const navigate = useNavigate();

    function ShowCard(){
        console.log("Showing card")
    }

    function NavigateTo(){
      switch (page){
        case 0:
          navigate('../developer')
          break;
        case 1: 
          navigate('../arts/guitar')
          break;
        case 2: 
          navigate('../arts/miniatures')
          break;
        case 3:
          navigate('../arts/digital-modelling')
          break;
        case 4:
          navigate('../contact-me')
          break;
        case 5:
          navigate('../arts')
          break;
      }
    }

  return (
    <Html 
    position={position}

    rotateY={rotateY}
    
    rotateOnWorldAxis={[0,-Math.PI / 2,0]}
    
  
    >
        {positionFitScreen ? 
          <h1 className=' w-40 text-left px-3' style={{color: textColor, marginLeft:'-110px'}} >{description}</h1>
 
        : <h1 className=' w-40 text-left ml-3 px-3 z-0' style={{color:textColor}} >{description}</h1>
        }
        <div className='indicator-outer-layer ' onClick={NavigateTo}>
              <div className='indicator-inner-layer'></div>
        </div>   
    </Html>
   
  )
}

export default Indicator