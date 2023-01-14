import { Text, Text3D } from '@react-three/drei'
import React, { useState } from 'react'

const LandingPage = (props) => {
    // define relative positions offsets
    const titlePositionOffset = [-5, 0.8, -0.05]
    const taglinePositionOffset = [-5, 0, 0]
    const buttonPositionOffset = [0, -1, 0]
    const calcPosition = (offset) => {return offset.map((item, index) => {if(props.position){return item+props.position[index]}else{return item}})}
    
    return (
        <>
        <Text3D font={'cocogoose.json'} size={1.5} bevelEnabled bevelThickness={0.2} position={calcPosition(titlePositionOffset)}>
            Blanner
            <meshNormalMaterial />
        </Text3D>
        <Text3D font={'cocogoose.json'} size={0.4} position={calcPosition(taglinePositionOffset)} >
            academic planning gamified.
            <meshBasicMaterial color={[0.3, 0.3, 0.9]} />
        </Text3D>
        <StartButton position={calcPosition(buttonPositionOffset)} />
        </>
    )
}

export default LandingPage

const StartButton = (props) => {
    // state to check for mouse hover over button
    const [hover, setHover] = useState(false)
    // function to execute on mouse click
    const clickTrigger = () => {console.log('Start Button Trigger')}

    return(
        <>
        <mesh {...props} onPointerOver={()=>setHover(true)} onPointerOut={()=>setHover(false)} onClick={clickTrigger}>
            <boxGeometry args={[4, 1, 0.2]} />
            <meshBasicMaterial color={hover ? 'red' : 'pink'} />
            <Text3D font={'cocogoose.json'} size={0.5} position={[-1.1, -0.3, 0]}>
                start
                {/* <meshBasicMaterial color={hover ? 'red' : 'green'} /> */}
            </Text3D>
        </mesh>
        </>
    )
}