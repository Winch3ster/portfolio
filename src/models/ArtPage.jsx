import * as THREE from 'three'
import { useRef, useState } from 'react'
import { easing } from 'maath'
import { Canvas, useFrame } from '@react-three/fiber'
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
  Stage
} from '@react-three/drei'

import model from '../assets/3d/PortfolioArtPageFinal2.glb'
import Indicator from '../components/Indicator'







const ArtScene = (props) =>  {
  const { nodes, materials } = useGLTF(model);

    function adjustIndicatorMarkToFitScreen(){
      let adjustToFitScreen = false;
      if(window.innerWidth < 768){
        adjustToFitScreen = true;
      }
  
      return adjustToFitScreen
    }

    let adjustToFitScreen = adjustIndicatorMarkToFitScreen()
  return (
    <group {...props} dispose={null}>

      <mesh 
        geometry={nodes.Cylinder003.geometry}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={new THREE.Color('#c9b499')} />
      </mesh>

      <mesh 
        geometry={nodes.Cylinder004.geometry}  
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={new THREE.Color('#c9b499')} />
      </mesh>

      <mesh 
        geometry={nodes.Cylinder005.geometry}  
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color={new THREE.Color('#c9b499')} />
      </mesh>



      <mesh geometry={nodes.neck.geometry} material={materials['wood 2']} />

      <group>
        {/**position ==> {z, y, x} -x --> right */}
      <Indicator description={"Guitar"} page={1} scale={[0.5, 0.5, 0.5]} position={[0.1, 2.5, -0.8]}></Indicator>
      <mesh geometry={nodes.freatboard.geometry} material={materials['wood 2']} />
      </group>
      


      <mesh geometry={nodes.frets_and_freatmarks.geometry} material={materials.aluminium} />
      <mesh geometry={nodes.bridge.geometry} material={materials['wood 2']} />
      <mesh geometry={nodes.rosette.geometry} material={materials.rosette} />
      <mesh geometry={nodes.bridge_pins_and_saddle.geometry} material={materials.bone} />
      <mesh geometry={nodes.nut.geometry} material={materials.bone} />

      <group>
        {/**position ==> {z, y, x} -x --> right */}
      <Indicator  positionFitScreen={adjustToFitScreen} description={"Digital Modelling"} page={3} position={[0.1, 2.8, -2.2]}></Indicator>
      <mesh geometry={nodes.abstract_cube001.geometry} material={materials['Material.002']} />

      </group>

      <group>
         {/**position ==> {z, y, x} -x --> right -z --> backward*/}
      <Indicator description={"Miniatures"} page={2} scale={[0.5, 0.5, 0.5]} position={[-1.7, 3.85, -0.5]}></Indicator>
      <mesh
        geometry={nodes.GLMan.geometry}
        material={materials['GLman.001']}
        position={[-0.002, -0.003, 0.006]}
      />
      </group>
     
      <mesh geometry={nodes.Plane001.geometry} material={materials['wood 1']} />
      <mesh geometry={nodes.Plane001_1.geometry} material={materials['wood 2']} />
      <mesh geometry={nodes.Plane001_2.geometry} material={materials.rubber} />
      <mesh geometry={nodes.Plane021.geometry} material={materials.aluminium} />
      <mesh geometry={nodes.Plane021_1.geometry} material={materials.bone} />
      <mesh geometry={nodes.Plane030.geometry} material={materials['fat strings']} />
      <mesh geometry={nodes.Plane030_1.geometry} material={materials['thin strings']} />
    </group>
  )
}

useGLTF.preload('/PortfolioArtPageFinal2.glb')


export default ArtScene;




