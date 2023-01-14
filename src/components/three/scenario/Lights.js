import React from 'react'

const Lights = () => {
  return (
    <>
        <pointLight position={[1, 3.1, 1.2]} intensity={1.5} castShadow color={'#ccc'} />
        <pointLight position={[-5, 0.1, 4]} intensity={1.2} castShadow color={'#733'} />
        
        {/* <ambientLight intensity={0.1}/> */}
    </>
  )
}

export default Lights