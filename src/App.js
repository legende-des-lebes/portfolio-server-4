// src/App.js

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';

// IMPORTANT: Using NAMED imports with curly braces {}
import { Scene } from './Scene';
import { Overlay } from './Overlay';

import './App.css';

export default function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={['#000000']} />
        {/* Make sure the 'pages' prop matches the number of sections */}
        <ScrollControls pages={3} damping={0.1}>
          <Scene />
          <Scroll html>
            <Overlay />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}