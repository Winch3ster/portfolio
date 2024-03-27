
import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import model from '../models/testModel'
import TestModel from '../models/testModel'


const Testart = () =>  {
  const ref = useRef()
  return (
    <div className='h-screen w-full'>
      <Canvas shadows="soft" dpr={[1, 2]} camera={{ fov: 50 }} className='h-screen w-full' color='black'>
        <Suspense fallback={null}>
          
            <directionalLight position={[6, 6, -1.5]} intensity={5} castShadow></directionalLight>
          
            <TestModel></TestModel>
          
        
        </Suspense>
        <OrbitControls ref={ref} />
      </Canvas>
    </div>
    
  )
}


export default Testart;