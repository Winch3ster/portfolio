import React, { Suspense, useRef } from 'react'
import NavigationBar  from '../components/NavigationBar'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, PerspectiveCamera} from '@react-three/drei'
import { Model } from '../models/Model'
import { WorldIndex } from '../models/WorldIndex'
import { useNavigate } from "react-router-dom";
import Loader from '../components/Loader'
const Index = () => {

  const world = useRef()

  const navigate = useNavigate();


  function NavigateToInteractiveHome() {
    navigate('../home')
  }
  
  function navigateToDeveloper(){
    console.log("Scroll effect detected")
  }

  return (

    <Suspense fallback={<Loader></Loader>}> 

    
    <div className='p-0 bg-blue-100 w-full h-screen' >
      
      
        <NavigationBar className='absolute top-0 z-20' backgroundFill={false}></NavigationBar>
        
        <div className='absolute w-1/3 top-40 text-left z-10 hidden lg:block md:block'>
          <div className='bg-white w-1/2 p-8 text-center primary-text-color'><h1>Hey there!</h1></div>
          <p className='ml-28 mt-10'> 
            I am Kingston and welcome to my portfolio page! I am a developer, miniature sculptor, and scale modeler. 
            You learn more about me and my work here.
          </p>
          <button className='ml-28 primary-button mt-5' onClick={NavigateToInteractiveHome}>Explore world</button>
        </div>


        <div className='relative w-full top-20 text-left block lg:hidden md:hidden mb-24'>
          <div className='bg-white w-1/2 px-8 py-4 text-center primary-text-color'><h1>Hey there!</h1></div>
          <p className='mt-10 w-5/6 mx-auto text-center'> 
            I am Kingston and welcome to my portfolio page! I am a developer, miniature sculptor, and scale modeler. 
            You learn more about me and my work here.
          </p>
          <div className='flex justify-center'>
          <button className='primary-button mt-5 z-10' onClick={NavigateToInteractiveHome}>Explore world</button>

          </div>
        </div>


       
          <Canvas shadows dpr={[1, 2]} className='h-screen  bg-blue-100' onScroll={navigateToDeveloper}>
            <Stage cpreset="rembrandt" intensity={0.1} contactShadow={true} environment="sunset" >

              <group position={[2, 1.25, 1]}>
                <ambientLight intensity={0.4}></ambientLight>
                <WorldIndex  scale={[0.7, 0.7, 0.7]} ></WorldIndex>
              </group>

              <OrbitControls enableZoom={false} ></OrbitControls>
            </Stage>
          </Canvas>

    </div>
    </Suspense>
  )
}

export default Index


/**
 * 
 * 
 * 
 * 
 * 
          <div className="animated-scroll-container z-20 absolute flex w-full justify-center align-middle bottom-20">
            <p className='mr-5'>About Me</p>
            <div className='icon-scroll'> <div id="scroll"></div></div>
            
        </div>


 * <Canvas shadows dpr={[1, 2]} className='absolute top-0 w-full h-screen ml-60'>
            <Stage cpreset="rembrandt" intensity={0.1} contactShadow={true} environment="sunset" position={[2, 1, -1]}>
              <ambientLight intensity={0.4}></ambientLight>
              <WorldIndex  scale={[0.7, 0.7, 0.7]} ></WorldIndex>

              <OrbitControls enableZoom={false} ></OrbitControls>
            </Stage>
          </Canvas>


 */