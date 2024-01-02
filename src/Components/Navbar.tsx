import { useRef } from "react";
import DarkMode from "./DarkMode";

type Props = {
  setClassname: React.Dispatch<React.SetStateAction<string>>
  setTop: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar = (props: Props) => {

  const navbarRef = useRef<HTMLDivElement>(null!)

  return (
    <div className="navbar" ref={navbarRef}>
      <span>LIOR</span>
      <nav className="navbar-links">
        <a onClick={() => props.setTop(top => !top)}>Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#roadmap">Road Map</a>
        <a href="#contactme">Contact Me</a>
        <DarkMode setClassname={props.setClassname} navbarRef={navbarRef} />
      </nav>
    </div>
  )
}

export default Navbar