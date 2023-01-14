import { Html } from '@react-three/drei'
import React, { useRef } from 'react'

const Shelf = (props) => {
    // ref for the Book mesh
    const bookRef = useRef()
    // define code to render on surface of book
    const displayCode = 'Sem 1'
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
            <mesh {...props}>
                <boxGeometry args={[dimensions.length, dimensions.height, dimensions.width]} />
                <meshStandardMaterial color={[0, 0, 1]} />
                <Html occlude={'blending'} transform ref={bookRef} position={[0, 0, dimensions.width/2+meshOffset]}>
                    <div>
                        <p>{displayCode}</p>
                    </div>
                </Html>
            </mesh>
            </>
    )
}

export default Shelf