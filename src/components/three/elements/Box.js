import React from 'react'

const Box = (props) => {
  return (
    <>
        <mesh {...props}>
            <boxGeometry args={[2, 1, 1]} />
            <meshStandardMaterial color={[0, 1, 0]} />
        </mesh>
        </>
  )
}

export default Box