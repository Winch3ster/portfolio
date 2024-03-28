import React, {useRef} from 'react'

import leopardBg from '../assets/images/Digital/leopard2Bg.png'

const DigitalModelCard = ({id, modelName, modelDescription, image, sketchfabLink, isLeftSide, isSmallScreen, ...props}) => {
  
  // isLeftSide: true --> image on the left
  //            default --> image on the right
  

  function NavigateToSketchfabLink(){
    window.open(sketchfabLink)
  }

  if(isSmallScreen){
    return(
      <div  id={id} className="grid gap-10 gap-y-10 px-14 mt-10 mb-10 " style={{alignItems: 'center'}}>
      <img src={image} alt={modelName} className='rounded'/>
      <div className='text-start' >
        <h1 className='title-text my-2'>{modelName}</h1>
          <p>
           {modelDescription}
          </p>
          
          <button className='black-minimalist-button my-5' onClick={NavigateToSketchfabLink}>View on Sketchfab</button>
          
      </div>

    </div>
    )
  }else{
    if(isLeftSide){
      return (
  
        <div >
    
            {/*Content container */}
            <div  id={id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 gap-y-10 px-14 mt-20 mb-10 " style={{alignItems: 'center'}}>
              <img src={image} alt={modelName} className='rounded'/>
              <div className='ml-10 text-start' >
                <h1 className='title-text my-5'>{modelName}</h1>
                  <p>
                   {modelDescription}
                  </p>
                  
                  <button className='black-minimalist-button my-5' onClick={NavigateToSketchfabLink}>View on Sketchfab</button>
                  
              </div>
  
            </div>
    
        </div>
        
      )
    }else{
      return (
        <div >
    
            {/*Content container */}
            <div  id={id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 gap-y-10 px-14 mt-20 mb-10 flex" style={{alignItems: 'center'}}>
              <div className='ml-10 text-start' >
                <h1 className='title-text my-5'>{modelName}</h1>
                  <p>
                   {modelDescription}
                  </p>
                  
                  <button className='black-minimalist-button my-5' onClick={NavigateToSketchfabLink}>View on Sketchfab</button>
                  
              </div>
              <img src={image} alt={modelName} className='rounded'/>
  
            </div>
    
        </div>
        
      )
    }
  }

  
  
}

export default DigitalModelCard
//className='digital-content-container' 