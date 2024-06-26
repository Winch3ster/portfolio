/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import model from '../assets/3d/portfolioArtPageModel.glb'

const TestModel = (props) => {
  const { nodes, materials } = useGLTF(model);
  return (
    <group {...props} dispose={null} castShadow receiveShadow>
      <mesh
        
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.baseColor}
        position={[0.376, 0, -0.481]}
        rotation={[0, -Math.PI / 4, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials.baseColor}
        position={[0.376, 0, -0.481]}
        rotation={[0, -Math.PI / 4, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials.baseColor}
        position={[0.376, 0, -0.481]}
        rotation={[0, -Math.PI / 4, 0]}
      />
      <group position={[0.376, 0, -0.481]} rotation={[0, -Math.PI / 4, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials["wood 1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials["wood 2"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_2.geometry}
          material={materials.rubber}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.neck.geometry}
        material={materials["wood 2"]}
        position={[0.376, 0, -0.481]}
        rotation={[0, -Math.PI / 4, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.freatboard.geometry}
        material={materials["wood 2"]}
        position={[0.376, 0, -0.481]}
        rotation={[0, -Math.PI / 4, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.frets_and_freatmarks.geometry}
        material={materials.aluminium}
        position={[0.376, 0, -0.481]}
        rotation={[0, -Math.PI / 4, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bridge.geometry}
        material={materials["wood 2"]}
        position={[0.376, 0, -0.481]}
        rotation={[0, -Math.PI / 4, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rosette.geometry}
        material={materials.rosette}
        position={[0.376, 0, -0.481]}
        rotation={[0, -Math.PI / 4, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bridge_pins_and_saddle.geometry}
        material={materials.bone}
        position={[0.376, 0, -0.481]}
        rotation={[0, -Math.PI / 4, 0]}
      />
      <group position={[0.376, 0, -0.481]} rotation={[0, -Math.PI / 4, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane021.geometry}
          material={materials.aluminium}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane021_1.geometry}
          material={materials.bone}
        />
      </group>
      <group position={[0.376, 0, -0.481]} rotation={[0, -Math.PI / 4, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane030.geometry}
          material={materials["fat strings"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane030_1.geometry}
          material={materials["thin strings"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.nut.geometry}
        material={materials.bone}
        position={[0.376, 0, -0.481]}
        rotation={[0, -Math.PI / 4, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GLman_level2.geometry}
        material={materials.GLman}
        position={[0.376, 0, -0.481]}
        rotation={[0, -Math.PI / 4, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.abstract_cube.geometry}
        material={materials["Material.002"]}
        position={[0.376, 0, -0.481]}
        rotation={[0, -Math.PI / 4, 0]}
      />
    </group>
  );
}

useGLTF.preload("/portfolioArtPageModel.glb");


export default TestModel;
