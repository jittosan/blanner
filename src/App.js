import Scene from './components/three/Scene';
import styles from './App.module.scss'
import Header from './components/com/Header';

function App() {
  return (
    <>
    <div className={styles.content}>
      <Header />
      <Scene />
    </div>
    </>
  );
}

export default App;
