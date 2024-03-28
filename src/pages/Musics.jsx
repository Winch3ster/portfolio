import React from 'react'
import NavigationBar from '../components/NavigationBar'

import afterdark from '../assets/images/music/afterdark.jpg'
import ectasy from '../assets/images/music/ectasy.jpg'
import HomeButton from '../components/HomeButton'

const Musics = () => {

    function ScrollToCollection(){
        console.log("scroll detected")
        const section = document.getElementById('collection');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
  return (
    <>
        <NavigationBar backgroundFill={false}></NavigationBar>

        <div className='hidden md:block lg:block'>
            <div className='music-bg' onscr onScroll={ScrollToCollection}>
                <div className='w-1/2 ml-20' style={{color:'#262626'}} >
                    <h1 className='art-title-text text-left'>Music</h1>
                    <p className='text-left'>Explore my musical journey here.
                        <br /> 
                        I was 21 years old when I first touched a guitar and 
                        I have been teaching myself since with the help of YouTube and the Internet. 
                        Yep, it’s kinda old to start but I am glad that I did!
                    </p>
                </div>

                <div className="animated-scroll-container z-20 absolute flex w-full justify-center align-middle bottom-20">
                <p className='mr-5'>Explore</p>
                <div className='icon-scroll'> <div id="scroll"></div> </div>
                
            </div>
        </div>
        </div>
        

        <div id='collection'>
            <div className='block md:hidden lg:hidden'>
                <div className='music-bg-small'>
                    <div className='w-5/6 ml-10' style={{color:'#262626'}} >
                        <h1 className='text-left sub-header'>Music</h1>
                        <p className='text-left'>Explore my musical journey here.</p>
                    </div>

                    
                </div>
            </div>
        </div>



        <div className=' song-container pt-10' style={{color:'#262626'}}>

            
            <h1 className='title-text text-start ml-20 hidden md:block lg:block'>Collections</h1>
            <h1 className='sub-header text-start ml-10 block md:hidden lg:hidden'>Collections</h1>

            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10 gap-y-10 px-14 pt-10 w-5/6 mx-auto">
                
                
                <div className='music-image'>
                    <img src={afterdark} alt="" style={{height:'auto', borderRadius:'30px'}}/>
                    <p className='sub-header text-left'>After Dark</p>
                    <p className='text-dark-gray  text-left'>Mr. Kitty</p>
                </div>


                <div className='music-image'>
                    <img src={ectasy} alt="" style={{height:'auto', borderRadius:'30px'}}/>
                    <p className='sub-header text-left'>Ecstasy</p>
                    <p className='text-dark-gray  text-left'>Crooked Stills</p>
                </div>
                


            </div>

        </div>
        <div className='hidden lg:block'>
        <HomeButton></HomeButton>

      </div>   
    </>
  )
}

export default Musics