import {OrbitControls, PerspectiveCamera } from '@react-three/drei'

const Camera = () => {
  return (
    <>
        <PerspectiveCamera makeDefault fov={20} position={[0, 4.5, 8]}/>
    </>
  )
}

export default Camera

const TestViewport = (props) => {
    return(
      <>
        {/* <OrbitControls enablePan={false} target={[0, 0.35, 0]} maxPolarAngle={0.15} /> */}
        <OrbitControls {...props} />
      </>
    )
  }

  export {TestViewport}