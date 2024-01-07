import React, { useRef, useEffect } from 'react'

type Props = {
  setMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const NavbarMenu = (props: Props) => {

  const navRef = useRef<HTMLDivElement>(null!)
  
  useEffect((): void => {
    navRef.current.addEventListener('click', (): void => {
      props.setMenu(false)
    })
  }, [])

  return (
    <div className='navbar-menu-list' ref={navRef}>
        <div className='menu-list-home'><a href='#home'>Home</a></div>
        <div className='menu-list-about'><a href='#about'>About</a></div>
        <div><a href='#skills'>Skills</a></div>
        <div><a href='#timeline'>Timeline</a></div>
        <div><a href='#contactme'>Contact Me</a></div>
    </div>
  )
}

export default NavbarMenu