import { useState, useRef } from "react";
import DarkMode from "./DarkMode";
import { IoIosMenu } from "react-icons/io";
import NavbarMenu from "./NavbarMenu";
import '../css/Navbar.css'

type Props = {
  setClassname: React.Dispatch<React.SetStateAction<string>>
  setTop: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar = (props: Props) => {

  const [menu, setMenu] = useState<boolean>(false)
  const navbarRef = useRef<HTMLDivElement>(null!)

  return (
    <div className="navbar" ref={navbarRef}>
      <span className="navbar-name">LIOR</span>
      <nav className="navbar-links">
        <a onClick={() => props.setTop(top => !top)}>Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#roadmap">Road Map</a>
        <a href="#contactme">Contact Me</a>
        <DarkMode setClassname={props.setClassname} navbarRef={navbarRef} />
        <span className="navbar-menu" onClick={() => setMenu(!menu)}><IoIosMenu size={30} /></span>
        {menu && <NavbarMenu />}
      </nav>
    </div>
  )
}

export default Navbar