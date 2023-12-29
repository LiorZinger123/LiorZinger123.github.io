import { useRef, useState } from "react";
import { LuMoon } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";

type Props = {
  setClassname: React.Dispatch<React.SetStateAction<string>>
  setTop: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar = (props: Props) => {

  const [counter, setCounter] = useState<number>(0)
  const navbarRef = useRef<HTMLDivElement>(null!)

  const changeMode = (): void => {
    const links = [...document.getElementsByTagName('a')]
    if(counter % 2 !== 0){
      document.body.classList.remove('dark-mode')
      document.body.classList.add("light-mode")  
      props.setClassname('app app-light-mode')
      navbarRef.current.style.backgroundColor = 'White'
      links.forEach(a => a.style.color = 'black')
    }
    else{
      document.body.classList.remove('light-mode')
      document.body.classList.add("dark-mode")
      props.setClassname('app app-dark-mode')
      navbarRef.current.style.backgroundColor = 'rgb(15, 14, 14)'
      links.forEach(a => a.style.color = 'white')
    }
    setCounter(counter => counter += 1)
  }

  return (
    <div className="navbar" ref={navbarRef}>
      <span>LIOR</span>
      <nav className="navbar-links">
        <a onClick={() => props.setTop(top => !top)}>Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#services">Services</a>
        <a href="#contact-me">Contact Me</a>
        <a className="fix-icon" onClick={changeMode}>
          {counter % 2 === 0 ? <LuMoon size={20} /> : <MdOutlineWbSunny size={20} />}
        </a>
      </nav>
    </div>
  )
}

export default Navbar