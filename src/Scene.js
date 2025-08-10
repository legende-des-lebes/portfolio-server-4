// src/Scene.js

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, Stars } from '@react-three/drei';

export const Scene = () => {
  const scroll = useScroll();
  const groupRef = useRef();

  useFrame(() => {
    // This will animate our 3D objects based on scroll later
    groupRef.current.position.y = -scroll.offset * 10;
  });

  return (
    <group ref={groupRef}>
      <Stars radius={50} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      {/* Placeholder Meshes */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={2} />
      </mesh>
      <mesh position={[2, -3, -2]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#8A2BE2" emissive="#8A2BE2" emissiveIntensity={2} />
      </mesh>
      <mesh position={[-2, -6, -4]}>
        <coneGeometry args={[0.3, 0.5, 32]} />
        <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={2} />
      </mesh>
    </group>
  );
};