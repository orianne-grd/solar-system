import React, { useRef, useContext } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Mesh, TextureLoader } from "three";
import * as THREE from "three";
import PlanetContext from "../../context/PlanetContext";

const Globe = ({ planet }) => {

    const focusPlanet = useContext(PlanetContext);

    let isSun = planet.pos === 0 ? true : false;

    const [arr, setArr] = React.useState([]);

    const colorMap = useLoader(TextureLoader, planet.img);
    const globeRef = useRef();
    const globe = useRef();

    useFrame(({ clock }) => {
        if (!isSun) {
            const elapsedTime = clock.getElapsedTime();
            globeRef.current.rotation.y = elapsedTime / planet.speedRotation;
        }
    })

    // let pos = [];
    function setPoints(e) {
        
        setArr([...arr, 
        <mesh position={[e.point.x, e.point.y, e.point.z]} rotation={globeRef.rotation} >
            <sphereGeometry args={[0.3, 8, 8]} />
            <meshStandardMaterial color={'red'} />
        </mesh>]
        )
    }


    return (
        <>
            <group ref={globeRef}>
                {arr}
                <mesh ref={globe} position={[planet.pos, 0, planet.pos]} scale={planet.scale} onClick={(e) => { setPoints(e); focusPlanet.setFocus(globe) }}>
                    <sphereGeometry args={[1, 32, 32]} />
                    {isSun ? (
                        <meshBasicMaterial map={colorMap} />
                    ) : (
                        <meshStandardMaterial map={colorMap} metalness={0.2} roughness={0.7} />)
                    }
                </mesh>
                {/* {!isSun && getPoints(planet.pos, 0, planet.pos, planet.scale) } */}
            </group>
            {!isSun &&
                <mesh rotation-x={Math.PI / 2}>
                    <torusGeometry args={[planet.pos * 1.4, 0.02, 8, 64]} />
                    <meshBasicMaterial color={'white'} />
                </mesh>
            }
        </>
    )


}

export default Globe;
