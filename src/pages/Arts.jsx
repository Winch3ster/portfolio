import * as THREE from 'three'
import { Suspense, useRef, useState } from 'react'
import { easing } from 'maath'
import { Canvas, useFrame } from '@react-three/fiber'
import NavigationBar from '../components/NavigationBar'
import Loader from '../components/Loader'
import {
  useGLTF,
  Center,
  Caustics,
  Environment,
  Lightformer,
  RandomizedLight,
  PerformanceMonitor,
  AccumulativeShadows,
  MeshTransmissionMaterial,
  OrbitControls,
  SpotLight,
  Stage,
  Text
} from '@react-three/drei'

import ArtScene from '../models/ArtPage'
import ArtOverlay from '../components/ArtOverlay'

const Arts = () => {




  const [perfSucks, degrade] = useState(false)

  const adjustModelForScreenSize = () => {
    let screenScale = null;
    let screenPosition  = [0, -6.5, -43];
    let textScale = [1,1,1]
    let isSmallScreen = false;
    let cameraPosition = [0, 10, 8];

    if(window.innerWidth < 768){
      screenScale = [0.5, 0.5, 0.5];
      screenPosition = [0, -1.3, 0];
      textScale = [0.5,0.5,0.5]
      isSmallScreen = true;
      cameraPosition = [0, 1, 10];
    }else{

      screenScale = [0.7, 0.7, 0.7];
      screenPosition = [0, -1.3, 0];
    }

    return [screenScale, screenPosition, textScale, isSmallScreen, cameraPosition]
  }

  const [modelScale, modelPosition, textScale, isSmallScreen, cameraPosition] = adjustModelForScreenSize()


  return (
 
    <Suspense fallback={<Loader></Loader>}> 
    <div className='w-full h-screen overflow-hidden'>
    <NavigationBar backgroundFill={false}></NavigationBar>


      <Canvas
        className='w-full h-screen z-0 relative'
        shadows="soft"
        dpr={[1, perfSucks ? 1.5 : 2]}
        eventSource={document.getElementById('root')}
        eventPrefix="client"
        camera={{ position: cameraPosition, fov: 26 }}
        
        >

        {/** PerfMon will detect performance issues */}
        <PerformanceMonitor onDecline={() => degrade(true)} />

      

        <group scale={modelScale} position={modelPosition} rotation={[0, -1.6, 0]}>
          <ArtScene />
          <AccumulativeShadows frames={100} alphaTest={0.1} opacity={0.9} color="#fa8c55" scale={20} position={[0, -0.0001, 0]}>
            <RandomizedLight amount={5} radius={6} ambient={0.3} intensity={1} position={[-1.5, 2.5, -2.5]} bias={0.001} />
          </AccumulativeShadows>
          
        </group>
  
        <Env perfSucks={perfSucks} isSmallScreen={isSmallScreen}/>

        
        <Text position={[0, 0.9, -3]} scale={textScale} color="gray">Art Studio</Text>

        <OrbitControls></OrbitControls>
      </Canvas>
      
      <ArtOverlay></ArtOverlay>
    </div>
    </Suspense>
  )
}

export default Arts

function Env({ perfSucks, isSmallScreen }) {
    const ref = useRef()
    useFrame((state, delta) => {
     
      // Animate the environment as well as the camera
      if (!perfSucks && !isSmallScreen) {
        //easing.damp3(ref.current.rotation, [Math.PI / 2, 0, state.clock.elapsedTime / 5 + state.pointer.x], 0.2, delta)
        easing.damp3(state.camera.position, [Math.sin(state.pointer.x / 4) * 9, 1.25 + state.pointer.y, Math.cos(state.pointer.x / 4) * 9], 0.5, delta)
        state.camera.lookAt(0, 0, 0)
      }
    })
    // Runtime environments can be too slow on some systems, better safe than sorry with PerfMon
  //   /<color attach="background" args={['#ffe2d4']} />
    return (
  
      
  
  <Environment frames={perfSucks ? 1 : Infinity} preset="sunset" resolution={256} background blur={1} >
              
                        <group ref={ref}>
                      
                      <Lightformer   intensity={1.5}  color="#c2bbb6"  position={[5, 3, 1]} scale={[10, 5, 1]} />
                      <Lightformer   intensity={1.5}  color="#c2bbb6"  position={[-5, 3, 1]} scale={[10, 5, 1]} />
              
                      <Lightformer   intensity={1}  color="#c2bbb6"  position={[-5, 2, -2.5]} scale={[10, 5, 1]} />
                      <Lightformer   intensity={1}  color="#c2bbb6"  position={[5, 2, -2.5]} scale={[10, 5, 1]} />
              
                     
                    
                    </group>
                  </Environment>
    
    )
  }




/**
 * 
 * 
 * 
 * 
                      <Lightformer   intensity={1.5}  color="#ffb98c"  position={[-5, 3, 1]} scale={[10, 5, 1]} />

<Canvas className='w-full h-screen bg-red-200'>
            <Stage className='w-full h-screen' cpreset="rembrandt" intensity={0.1}   shadows="accumulative" environment="dawn" >
                <ambientLight position={[1, 1, 20]} intensity={0.3}></ambientLight>
                <ArtPage scale={[0.5, 0.5, 0.5]}></ArtPage>
                <OrbitControls enableZoom={false}></OrbitControls>    

            </Stage>
        </Canvas>


     <div className='art-background '>
        <div className='w-1/3'>
            <h1 className='art-title-text text-white'>Kingston</h1>
            <p className='text-white'>Learn more about my artistic side</p>
            <div className='w-full flex justify-between'>
                <button className='art-button'>Explore</button>
                <button className='art-button'>View</button>
            </div>
        </div>
    </div>



 */