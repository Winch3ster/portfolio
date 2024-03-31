import '../App.css'
import React, { Suspense, useRef, useState, useMemo  } from 'react'
import { Canvas,useFrame } from '@react-three/fiber'
import Loader from '../components/Loader'

import { Stats, OrbitControls, KeyboardControls, Environment, useHelper, Stage, Text, PerspectiveCamera, Text3D, Html} from '@react-three/drei'
import {CharacterController} from '../models/CharacterController'

import { DirectionalLightHelper } from 'three';
import { PointLight  } from 'three';

import { Model } from '../models/Model'
import Fairy from '../models/Fairy'
import { Physics, RigidBody, vec3, CuboidCollider } from '@react-three/rapier'
import Indicator from "../components/Indicator";

/*<div className='absolute top-28 left-0 right-0 z-10'>
            PopUp
        </div>*/


export let pressurePlateActivated;

export const Controls = {
    forward: "forward",
    back: "back",
    left: "left",
    right: "right",
    jump: "jump",
    };


    
const Notification = () => {
    return (
        <Html 
  
    position={[16,1,-7]}

    
    rotateOnWorldAxis={[0,-Math.PI / 2,0]}
    >
      
        <h1 className=' w-40 text-left px-3' style={{color: 'white', marginLeft:'-110px'}} >Mini games coming soon</h1>

        <div className='exclamation-mark-container'>
            <div className='exclamation-mark-upper'></div>
            <div className='exclamation-mark-lower'></div>
        </div>   
    </Html>
    );
  };

  

const Home = () => {



    const lightRef = useRef();
    const ref = useRef()
    const orbit =useRef();
   const camera = useRef();

    //useHelper(pointLight, PointLightHelper, 0.5, "red" )

    const map = useMemo(
        () => [
          { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
          { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
          { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
          { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
          { name: Controls.jump, keys: ["Space"] },
        ],
        []
      );

  
    //Adjust the world size according to screen size
    const adjustModelSize =() => {
        let screenSize = null;
        let modelScale = null;
        //let screenPosition = [5, -1, -34];
        //let rotation = [0.4, -0.6, 0];

        let screenPosition = [0, 0, 0];
        let rotation = [0, 0, 0];

        if(window.innerWidth < 768){
            screenSize = [0.9, 0.9, 0.9];
            modelScale = [0.15, 0.15, 0.15];
        }else{
            screenSize = [1, 1, 1];
            modelScale = [0.13, 0.13, 0.13];
        }

        return [screenSize, screenPosition, rotation, modelScale]
    }


    const [islandScale, islandPosition, islandRotation, modelScale] = adjustModelSize();

    //const [characterIsMoving, setCharacterIsMoving] = useState(false);

    //camera={{ position:[2.3, 6, 8], fov: 50, zoom: 1.5}}


    const rotateCamera = () => {
        controls.current.rotateLeft(Math.PI / 4); // Rotate the camera left by 45 degrees
      };

  
//controls={ref} 
  return (
    <Suspense fallback={<Loader></Loader>}>
    
  

    
    <section className='w-full h-screen relative' >
       
        <KeyboardControls map={map}>

        
        <Canvas  dpr={[1, 2]} >
        
       <Notification />

        <Stage cpreset="rembrandt" intensity={0.1}  environment="sunset">

        <Text  rotation-y={0.4} position={[-45, 6, 0]} color="gray" scale={[10, 10, 10]} >Welcome</Text>

        <Physics gravity={[0,-19.81,0]} colliders={false} debug>
       
            <ambientLight intensity={0.5}></ambientLight>

           
                <Indicator description={"Developer"} position={[-1,7,-10]} page={0} darkText={true}></Indicator>

                <Indicator description={"Contact Me"} position={[-15,7,10]} page={4} darkText={true}></Indicator>

                <Indicator description={"Visit Arts Site"} position={[-33,5,28]} page={5} darkText={true}></Indicator>

                <Model scale={[6, 6, 6]} />                

                <CharacterController />
              
                <Fairy position={[-27, 1.5, 23.5]} scale={[0.8, 0.8, 0.8]} rotation={[0, 0.5, 0]}></Fairy>
          
            </Physics>
            </Stage>
        
       
        </Canvas>
        </KeyboardControls>
    </section>
    </Suspense>
  )
}

export default Home
//<directionalLight position={[8,13,15]} intensity={2}/>

//characterIsMoving = {characterIsMoving}
//setCharacterIsMoving = {setCharacterIsMoving}

/*
position={[-30, 6, -5]} color="gray" scale={[10, 10, 10]} 
  
<OrbitControls ref={ref} />
 <pointLight color={'#c2cfff'} intensity={50} position={[0, 5,0]} ></pointLight>


<ambientLight position={[0.244, 1.127, -1.129]} intensity={1.8}/>

            <hemisphereLight position={[0, 10, 0]} intensity={0.5} groundColor={0xFFAA00} color={0xE8CF54}/>

                    
            <directionalLight position={[5.00, 11.263, 9.162]} intensity={1}/>    

            <Physics colliders={false} debug>
                <World2
                    scale = {islandScale}
                    position = {islandPosition}
                    rotation = {islandRotation}
                />
               
            <CharacterController scale = {modelScale}/>
                
               
            </Physics>
            <Fairy
                scale = {modelScale}
                position = {[-4.744, 0.265, 4.055]}
                rotation = {[0, 45, 0]}
            />
*/


