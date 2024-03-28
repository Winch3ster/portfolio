import { useKeyboardControls, PerspectiveCamera, CameraControls, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CapsuleCollider, RigidBody, vec3 } from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";
import { Controls } from "../pages/Home";
import MainCharacter from "./MainCharacter";
import character from '../assets/3d/PortfolioMainCharacterThreeJSReady2.glb';
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from 'three'


const MOVEMENT_SPEED = 15; //0.3
const CAMERA_SPEED = 1
const IMPULSE_FORCE = 0.1;
const MAX_VEL = 11;
//The reason why the character is buffering up and down is because the gravity tries to pull it down but the translation tries to set it to its value
export let characterIsMoving = false;

let IN_CONTACT_WITH_WALL =false;

export const CharacterController = () => {

  const camera = useRef();

  //let walkDirection = new THREE.Vector3(1, 0, 1)
  //const mesh = useRef();

  /*
  const { animations } = useGLTF(character);
  const { actions } = useAnimations(animations, mesh);

*/


  const jumpPressed = useKeyboardControls((state) => state[Controls.jump]);
  const leftPressed = useKeyboardControls((state) => state[Controls.left]);
  const rightPressed = useKeyboardControls((state) => state[Controls.right]);
  const backPressed = useKeyboardControls((state) => state[Controls.back]);
  const forwardPressed = useKeyboardControls(
    (state) => state[Controls.forward]
  );

  const keys = [leftPressed, rightPressed, backPressed, forwardPressed]  

  const rigidbody = useRef();
 

  const character = useRef();
    const capsule = useRef();

    /*
    useFrame(() => {
      //console.log("Use frame running")

      //console.log("Global translation ")
      //console.log(globalTranslation)
    if (rightPressed && !IN_CONTACT_WITH_WALL) {
      globalTranslation.x += MOVEMENT_SPEED ;
      //impulse.x += IMPULSE_FORCE;
      //console.log("Translation x is increasing")
      //character.current.position.x += MOVEMENT_SPEED;
      //rigidbody.current.position.x += MOVEMENT_SPEED;
      
    }
    if (leftPressed && !IN_CONTACT_WITH_WALL) {
      globalTranslation.x -= MOVEMENT_SPEED ;
      //impulse.x -= IMPULSE_FORCE;
      //character.current.position.x -= MOVEMENT_SPEED;
      //rigidbody.current.position.x -= MOVEMENT_SPEED;
    }
    if (backPressed && !IN_CONTACT_WITH_WALL) {
      //impulse.z += IMPULSE_FORCE;


      globalTranslation.z += MOVEMENT_SPEED;
      //character.current.position.z += MOVEMENT_SPEED;
      //rigidbody.current.position.z += MOVEMENT_SPEED
    }
    if (forwardPressed && !IN_CONTACT_WITH_WALL) {

      //impulse.z -= IMPULSE_FORCE;


      globalTranslation.z -= MOVEMENT_SPEED;
      //character.current.position.z -= MOVEMENT_SPEED;
      
      //rigidbody.current.position.z -= MOVEMENT_SPEED;
    }

    //rigidbody.current.setNextKinematicTranslation(globalTranslation, true)
    rigidbody.current.setTranslation(globalTranslation, true)

    })*/

    
  
    useFrame(() => {
     
      if(camera.current){
        const cameraDistanceY = window.innerWidth < 1024 ? 8 : 10;
      const cameraDistanceZ = window.innerWidth < 1024 ? 15 : 20;
      var playerWorldPos = vec3(rigidbody.current.translation());
      camera.current.setLookAt(
        playerWorldPos.x + 5,
        playerWorldPos.y + (cameraDistanceY),
        playerWorldPos.z + (cameraDistanceZ),
        playerWorldPos.x,
        playerWorldPos.y + 1.5,
        playerWorldPos.z,
        true)

       
      }

      //const impulse = { x: 0, y: 0, z: 0 };
      
      const vector = new THREE.Vector3(0, 0, 0);
      
      // Normalize the vector
     
      const linvel = rigidbody.current.linvel();

      //let changeRotation = false;
      if (rightPressed && linvel.x < MAX_VEL) {
        vector.x += MOVEMENT_SPEED;
        
        //camera.current.position.x += CAMERA_SPEED;

        //changeRotation = true;
      }
      if (leftPressed && linvel.x > -MAX_VEL) {
        vector.x -= MOVEMENT_SPEED;

        //camera.current.position.x -= CAMERA_SPEED;

        //changeRotation = true;
      }
      if (backPressed && linvel.z < MAX_VEL) {
        vector.z += MOVEMENT_SPEED;

        //camera.current.position.z += CAMERA_SPEED;

        //changeRotation = true;
      }
      if (forwardPressed && linvel.z > -MAX_VEL) {
        vector.z -= MOVEMENT_SPEED;

        //camera.current.position.z -= CAMERA_SPEED;

        //changeRotation = true;
      }
      vector.normalize();
      vector.x *= MOVEMENT_SPEED;
      vector.y *= MOVEMENT_SPEED;
      vector.z *= MOVEMENT_SPEED;
      //console.log(vector)
      //console.log("lin vel: " + linvel.x)
      //rigidbody.current.addForce(vector, true)
      rigidbody.current.applyImpulse(vector, true);
      
      
      //console.log("camera position x: " + camera.current.position.x)
      //console.log("camera position y: " + camera.current.position.y)
      //camera 
      //console.log("Camera: " + camera.current)
    });


   
    /*


  useFrame(() => {
    
   //const currentTranslation = { x: 0, y: 0, z: 0 };
   
  const impulse = { x: 0, y: 0, z: 0 };
  
    const linvel = rigidbody.current.linvel();
   
    if (rightPressed  && linvel.x < MAX_VEL) {
      //currentTranslation.x += MOVEMENT_SPEED ;
      impulse.x += IMPULSE_FORCE;
      console.log("This is running")
      //console.log("Translation x is increasing")
      //character.current.position.x += MOVEMENT_SPEED;
      //rigidbody.current.position.x += MOVEMENT_SPEED;
      
    }
    if (leftPressed && linvel.x > -MAX_VEL ) {
      //currentTranslation.x -= MOVEMENT_SPEED ;
      impulse.x -= IMPULSE_FORCE;
      //character.current.position.x -= MOVEMENT_SPEED;
      //rigidbody.current.position.x -= MOVEMENT_SPEED;
    }
    if (backPressed && linvel.z < MAX_VEL) {
      impulse.z += IMPULSE_FORCE;


      //currentTranslation.z += MOVEMENT_SPEED;
      //character.current.position.z += MOVEMENT_SPEED;
      //rigidbody.current.position.z += MOVEMENT_SPEED
    }
    if (forwardPressed && linvel.z > -MAX_VEL) {

      impulse.z -= IMPULSE_FORCE;


      //currentTranslation.z -= MOVEMENT_SPEED;
      //character.current.position.z -= MOVEMENT_SPEED;
      
      //rigidbody.current.position.z -= MOVEMENT_SPEED;
    }
    //capsule.current.applyImpulse(impulse, true)
    //rigidbody.current.setTranslation(currentTranslation, true);
    rigidbody.current.applyImpulse(impulse, true)
    //console.log(impulse)
    checkKeyPressed()
  }
    //console.log(translation)
    //rigidbody.current.rotation.y
    
    
    // move model & camera
    
    /*
    if (rightPressed && linvel.x < MAX_VEL) {
      impulse.x += MOVEMENT_SPEED ;
      character.current.position.x += MOVEMENT_SPEED;
      rigidbody.current.position.x += MOVEMENT_SPEED;
    }
    if (leftPressed && linvel.x > -MAX_VEL) {
      impulse.x -= MOVEMENT_SPEED ;
      character.current.position.x -= MOVEMENT_SPEED;
      rigidbody.current.position.x -= MOVEMENT_SPEED;
    }
    if (backPressed && linvel.z < MAX_VEL) {
      impulse.z += MOVEMENT_SPEED;
      character.current.position.z += MOVEMENT_SPEED;
      rigidbody.current.position.z += MOVEMENT_SPEED
    }
    if (forwardPressed && linvel.z > -MAX_VEL) {
      impulse.z -= MOVEMENT_SPEED;
      character.current.position.z -= MOVEMENT_SPEED;
      rigidbody.current.position.z -= MOVEMENT_SPEED;
    }
    
    
   
    

  });
 */


  function checkKeyPressed(){
    //return true if there is direction of motion
    //Return false if none
    //console.log("Is running")

    for (const direction in keys) {
      //console.log("Direction of motion " + direction + ": "  + keyPressed[direction])

      if (direction) {
        characterIsMoving = true;
      }
    }
  }

  return (

    <group
    >
       
      <CameraControls ref={camera}/>

      <RigidBody
      
        ref={rigidbody}
        colliders={false}
        enabledRotations={[false, false, false]}
        scale={[0.9, 0.9, 0.9]}
        position={[0, 10,0]}
        linearDamping={4}
        //type='kinematicPosition'
        
        

      >
       
       <CapsuleCollider  args={[1, 1]} position={[-12.5, 8.5, 18.5]} />
        <group ref={character}>
        
          <MainCharacter scale={[0.85, 0.85, 0.85]} //position={[0, 0, 0]}
          />
        </group>
      </RigidBody>
    </group>
    
  );
};



/**
 * 
 * 
 *  <PerspectiveCamera
           
          position={[0.1, 0.25, 0.5]}
          
          fov={75}
          near={0.1}
          far={1000}
          aspect={window.innerWidth / window.innerHeight}
          makeDefault={true}
          zoom={2}
          view={false}
          focus={null}
        />



         if(camera.current){
        console.log("Moving camera position")
        const playerPosition = vec3(rigidbody.current.translation())
        
        console.log("Playerposition x" + playerPosition.y)
        camera.current.setLookAt()
        camera.current.setLookAt(
          0.1,
          0.25,
          0.5,
        
         0,0,0,
          true

        )
      }


 */