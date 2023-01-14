import { Html } from '@react-three/drei'
import React, { useRef } from 'react'

const Book = (props) => {
    // ref for the Book mesh
    const bookRef = useRef()
    // define code to render on surface of book
    const displayCode = 'PC3235B'
    // define dimensions of book
    const dimensions = {
        height: 2,
        length: 2,
        width: 1
    }
    // offset of text layer from mesh
    const meshOffset = 0.005

    return (
        <>
        <mesh {...props} ref={bookRef}  castShadow receiveShadow>
            <boxGeometry args={[dimensions.length, dimensions.height, dimensions.width]} />
            <meshStandardMaterial color={[1, 0, 0]} />\
            <Html occlude={'blending'} transform ref={bookRef} position={[0, 0, dimensions.width/2+meshOffset]}>
                <div>
                    <p>{displayCode}</p>
                </div>
            </Html>
            <Html occlude={'blending'} transform position={[-dimensions.length/2-meshOffset, 0, dimensions.width/2]} rotation={[Math.PI/2, -Math.PI/2, 0]}>
                <div>
                    <p>{displayCode}</p>
                </div>
            </Html>
        </mesh>
        </>
    )
}

export default Book