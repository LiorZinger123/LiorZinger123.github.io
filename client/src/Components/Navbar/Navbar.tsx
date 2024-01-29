import { useState, useRef } from "react";
import DarkMode from "../DarkMode/DarkMode";
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import NavbarMenu from "./NavbarMenu";
import './Navbar.css'

type Props = {
  setClassname: React.Dispatch<React.SetStateAction<string>>
  setTop: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar = (props: Props) => {

  const [menu, setMenu] = useState<boolean>(false)
  const [counter, setCounter] = useState<number>(1)
  const navbarRef = useRef<HTMLDivElement>(null!)

  const handleOpen = (): void => {
    const navbarMenuListEl = document.getElementById('navbar-menu-list')
    const darkModeIconEl = document.getElementById("dark-mode-icon")
    navbarMenuListEl?.setAttribute("style","bottom: 80%;")
    darkModeIconEl?.setAttribute('style', 'visibility: hidden')
    setMenu(true)
  }

  const handleClose = (): void => {
    const navbarMenuListEl = document.getElementById('navbar-menu-list')
    const darkModeIconEl = document.getElementById("dark-mode-icon")
    navbarMenuListEl?.setAttribute("style","bottom: -150%;")
    darkModeIconEl?.setAttribute('style', 'visibility: visible')
    setMenu(false)
  }

  return (
    <div className="navbar" ref={navbarRef}>
      {!menu && <span className="navbar-name">LIOR</span>}
      <nav className="navbar-links">
        <a className='top-navbar-links' onClick={() => props.setTop(top => !top)}>Home</a>
        <a className='top-navbar-links' href="#about">About</a>
        <a className='top-navbar-links' href="#skills">Skills</a>
        <a className='top-navbar-links' href="#timeline">Timeline</a>
        <a className='top-navbar-links' href="#contactme">Contact Me</a>
        <a className='top-navbar-links' href="#aboutme">About Me</a>
        <DarkMode setClassname={props.setClassname} navbarRef={navbarRef} counter={counter} setCounter={setCounter} />
        {!menu ? <span className="navbar-menu" onClick={handleOpen}><IoIosMenu size={30} /></span>
        : <span className='navbar-menu' onClick={handleClose}><IoCloseSharp size={30} /></span>}
      </nav>
      <NavbarMenu setMenu={setMenu} />
    </div>
  )
}

export default Navbar