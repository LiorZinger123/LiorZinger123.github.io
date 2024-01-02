import { useEffect, useRef, useState } from 'react'
import Navbar from './Components/Navbar'
import HomePage from './Components/HomePage'
import About from './Components/About'
import Skills from './Components/Skills'
import RoadMap from './Components/RoadMap'
import ContactMe from './Components/ContactMe'
import './App.css'

function App() {

  const [classname, setClassname] = useState<string>('app app-light-mode')
  const [top, setTop] = useState<boolean>(false)
  const appRef = useRef<HTMLDivElement>(null!)

  useEffect((): void => {
    appRef.current.scrollTo(0, 0)
  }, [top])

  return (
    <div className={classname} ref={appRef}>
      <Navbar setClassname={setClassname} setTop={setTop} />
      <HomePage />
      <About />
      <Skills />
      <RoadMap />
      <ContactMe />
    </div>
  )
}

export default App
