import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import SolarSystem from './components/SolarSystem/SolarSystem';
import {PlanetProvider} from './context/PlanetContext';

function App() {
  return (
    <>
      <PlanetProvider>
        <Canvas camera={{ fov: 45, position: [100, 50, 100] }}>
          <Suspense fallback={null}>
            <SolarSystem />
          </Suspense>
        </Canvas>
      </PlanetProvider>
    </>
  );
}




export default App;
