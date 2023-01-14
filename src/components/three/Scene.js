import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Lights from './scenario/Lights'
import Test from './elements/Test'
import styles from './Scene.module.scss'
import Camera, { TestViewport } from './scenario/Camera'
import Background from './scenario/Background'

const Scene = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Canvas className={styles.canvas}>
        <color args={[0.03, 0.03, 0.03]} attach="background" />
            <Camera />
            <Lights />
            <Background />
            <Test position={[-2, 0, 0]} />
            <TestViewport />
            <axesHelper />
            <boxHelper />
      </Canvas>
    </Suspense>
  )
}

export default Scene
