import React from 'react'

const Box = (props) => {
  return (
    <>
        <mesh {...props}  castShadow receiveShadow>
            <boxGeometry args={[2, 1, 1]} />
            <meshStandardMaterial color={[0, 1, 0]} />
        </mesh>
        </>
  )
}

export default Box