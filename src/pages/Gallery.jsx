import React from 'react'
import NavigationBar from '../components/NavigationBar'
import arrowDown from '../assets/icons/down-arrow.png'

import imgOne from '../assets/images/Gallery/frontClose1Done.jpg'
import imgTwo from '../assets/images/Gallery/shell_crate-done.jpg'
import imgThree from '../assets/images/Gallery/scaleFinal.png'
import imgFour from '../assets/images/Gallery/russianAfghan.jpg'
import imgFive from '../assets/images/Gallery/samurai.jpg'
import imgSix from '../assets/images/Gallery/soldier.jpg'
import imgSeven from '../assets/images/Gallery/sas.jpg'
import instaIcon from '../assets/icons/instagram-black-white.png'
import HomeButton from '../components/HomeButton'
const Gallery = () => {

  function navigateToInstagram(){
    window.open('https://www.instagram.com/king_st0ne/')
  }
  return (
    <>
      <NavigationBar></NavigationBar>

      <div className='flex justify-center mt-32' >
        <div className='digital-miniature-title'>
          <h1 className='title-text text-center'>MINIATURES</h1>
          <div className='flex justify-center mt-5'><img src={arrowDown} alt="" style={{width:'15px', height:'15px'}}/></div>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-10 px-14 mt-20 mb-10 render-miniature-animation">
      
        <div className='gallery-image'>
            <img src={imgOne} alt="" style={{height:'auto'}}/>
        </div>


        <div className='gallery-image'>
          <img src={imgTwo} alt="" style={{height:'auto'}}/>
        </div>


        <div className='gallery-image'>
          <img src={imgThree} alt="" style={{height:'auto'}}/>
        </div>

        <div className='gallery-image'>
          <img src={imgFour} alt="" style={{height:'auto'}}/>
        </div>

        <div className='gallery-image'>
          <img src={imgFive} alt="" style={{height:'auto'}}/>
        </div>

        <div className='gallery-image'>
          <img src={imgSix} alt="" style={{height:'auto'}}/>
        </div>

        <div className='gallery-image'>
          <img src={imgSeven} alt="" style={{height:'auto'}}/>
        </div>
      </div>
    

    <div className='flex justify-center mb-10' style={{alignItems:'center', height:'10vh'}}>
        <img src={instaIcon} alt="instagram" onClick={navigateToInstagram} style={{width:'40px', height:'40px', cursor: 'pointer'}}/>
    </div>
    
    <div className='hidden lg:block'>
        <HomeButton></HomeButton>

      </div>       
    </>
   
  )
}

export default Gallery