import { Html, Text, Text3D } from '@react-three/drei';
import { useFrame, meshNormalMaterial } from '@react-three/fiber';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'
import styles from './Test.module.scss'

const Test = (props) => {
    const ref = useRef();
    const [hover, setHover] = useState(false)
    const [click, setClick] = useState(false)

    // useEffect(() => {
    //   if (hover) {
    //     gsap.fromTo(ref.current, {scale: 1}, {scale:1.5, duration: 1.8})
    //   } else {
    //     gsap.fromTo(ref.current, {scale:1.5, duration: 1.8}, {scale: 1})
    //   }
    // }, [hover])
    

    // rotate ref item on every frame load
    // useFrame ((state, delta) => {ref.current.rotation.z += 0.002})

    return (
        <>
            <mesh
                {...props}
                ref={ref}
                scale={click ? 1.5 : 1}
                onClick={(e) => {e.stopPropagation();setClick(!click)}}
                onPointerOver={(e) => {e.stopPropagation();setHover(true)}}
                onPointerOut={(e) => {e.stopPropagation();setHover(false)}}
            >
                <boxGeometry args={[2, 1, 1]} />
                <meshStandardMaterial wireframe={props.wireframe}
                    color={hover ? 'red' : 'orange'}
                />
                <Html occlude='blending' transform position={[0, 0, 0.51]} ref={ref} fullscreen>
                    <div className={styles.htmlContent}>
                        <h1>ESP2111 Sensor System Electronics</h1>
                        <p>This module introduces students to the fundamental electronic principles of sensor systems for a variety of different disciplines. Particular emphasis will be given to circuits that are used in research and development, such as sensor amplifiers, filters, and data-acquisition. The module has both analogue and digital circuit principles, and involves project activities that involve hands-on construction of sensors, their circuits and translating their signals into digital data on to a computer.</p>
                    </div>
                </Html>
            </mesh>

            <Text3D font={'./cocogoose.json'}> Cool boi</Text3D>
        </>
    )
}

export default Test



{/* <Text3D
                curveSegments={32}
                bevelEnabled
                bevelSize={0.04}
                bevelThickness={0.1}
                height={0.08}
                lineHeight={0.8}
                letterSpacing={-0.06}
                font={'/cocogoose.json'}
                size={1} >
                {`Academic\nPlanner`}
                <meshNormalMaterial />
            </Text3D> */}