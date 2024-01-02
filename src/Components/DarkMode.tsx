import React, { useState } from "react"
import { LuMoon } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";

type Props = {
    setClassname: React.Dispatch<React.SetStateAction<string>>
    navbarRef: React.MutableRefObject<HTMLDivElement>
}

const DarkMode = (props: Props) => {

    const [counter, setCounter] = useState<number>(0)
    
    const changeMode = (): void => {

        const links = [...document.getElementsByTagName('a')]
        const selects = [...document.getElementsByClassName("select")]
        
        if(counter % 2 !== 0){
        document.body.classList.remove('dark-mode')
        document.body.classList.add("light-mode")
        selects.forEach(select => {
            select.classList.remove('select-dark-mode')
            select.classList.add('select-light-mode')
        })
        props.setClassname('app app-light-mode')
        props.navbarRef.current.style.backgroundColor = 'White'
        links.forEach(a => a.style.color = 'black')
        }

        else{
        document.body.classList.remove('light-mode')
        document.body.classList.add("dark-mode")
        selects.forEach(select => {
            select.classList.remove('select-light-mode')
            select.classList.add('select-dark-mode')
        })
        props.setClassname('app app-dark-mode')
        props.navbarRef.current.style.backgroundColor = 'rgb(15, 14, 14)'
        links.forEach(a => a.style.color = 'white')
        }
        
        setCounter(counter => counter += 1)
    }

  return (
    <>
        <a className="fix-icon" onClick={changeMode}>
          {counter % 2 === 0 ? <LuMoon size={20} /> : <MdOutlineWbSunny size={20} />}
        </a>
    </>
  )
}

export default DarkMode