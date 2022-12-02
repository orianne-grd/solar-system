import { OrbitControls, Stars } from "@react-three/drei";
import Globe from "../Globe/Globe";
import { planets } from "../../data/planet"
import { useRef, useContext } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import PlanetContext from "../../context/PlanetContext";

const SolarSystem = (props) => {

  const focusPlanet = useContext(PlanetContext);
  console.log(focusPlanet.focus);

  const {
    camera,
    gl: { domElement },
  } = useThree();

  const controls = useRef();

  useFrame(() => {
    // if (Object.keys(focusPlanet.focus).length === 0) {
    //   camera.position.set(0, 20, 100);
    //   controls.current.update()
    // }
  });

  return (
    <>
      <ambientLight intensity={0.05} />
      <pointLight color="#fff6e4" position={[0, 0, 0]} intensity={1.3} />
      <Stars radius={300} depth={60} count={10000} factor={7} saturation={0} fade={true} />
      <OrbitControls ref={controls} args={[camera, domElement]} enableZoom={true} enablePan={true} enableRotate={true} zoomSpeed={1} panSpeed={0.5} rotateSpeed={0.4} />
      {planets?.map((planet, idx) => (
        <Globe planet={planet} key={idx} />
      ))}

      <mesh position={[10, 0, 10]} scale={1}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color={'red'} />
      </mesh>
      <mesh position={[-10, 0, 10]} scale={1}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color={'yellow'} />
      </mesh>
      <mesh position={[10, 0, -10]} scale={1}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color={'blue'} />
      </mesh>
      <mesh position={[-10, 0, -10]} scale={1}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color={'green'} />
      </mesh>
    </>
  )
}

export default SolarSystem;