import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Lights from './scenario/Lights'
import Test from './elements/Test'
import styles from './Scene.module.scss'
import Camera, { TestViewport } from './scenario/Camera'
import Background from './scenario/Background'
import Book from './elements/Book'
import Box from './elements/Box'
import Shelf from './elements/Shelf'
import LandingPage from './elements/LandingPage'
import BookTest from './elements/BookTest'

const Scene = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Canvas className={styles.canvas}>
        <color args={[0.03, 0.03, 0.03]} attach="background" />
            <Camera />
            <Lights />
            <Background />
            {/* <BookTest /> */}
            <LandingPage position={[0, 10, 0]} />
            {/* <Test position={[-2, 0, 0]} /> */}
            <Book position={[2, 2, 0]} />
            <Box position={[-2, 2, 0]} />
            <Shelf position={[-2, 0, 1]} />
            <TestViewport target={[0, 10, 0]} />
            <axesHelper />
            <boxHelper />
      </Canvas>
    </Suspense>
  )
}

export default Scene
