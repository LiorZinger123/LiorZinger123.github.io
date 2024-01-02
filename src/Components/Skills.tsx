import { useState } from "react";
import { IoServerOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { GrServers } from "react-icons/gr";

const Skills = () => {

  const [front, setFront] = useState<boolean>(false)
  const [back, setBack] = useState<boolean>(false)
  const [db, setDb] = useState<boolean>(false)
  const frontend = { title: "Frontend Developer", ul: ["HTML", "CSS", "JavaScript", "React", "Redux", "TypeScript"], icon: <IoLogoReact size={20} className="site-icons" />, state: front, stateFunc: setFront}
  const backend = { title: "Backend Developer", ul: ["Node.js", "Express.js", "Python", "Flask"], icon: <IoServerOutline size={20} className="site-icons" />, state: back, stateFunc: setBack}
  const dbs = { title: "DataBases", ul: ["MongoDB", "SQL"], icon: <GrServers size={20} className="site-icons" />, state: db, stateFunc: setDb}
  const selects = [frontend, backend, dbs]

  return (
    <section id='skills' className="site-sections">
        <h1>Skills</h1>
        <div className="section-info selects">

          {selects.map(select => (
            <div className="select" key={select.title}>
              <div className="select-title" onClick={() => select.stateFunc(s => !s)}>
                {select.icon}
                <h3>{select.title}</h3>
                <IoIosArrowDown size={20} className='skiils-icons' />
              </div>

              {select.state &&
                <ul>
                  {select.ul.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              }
              
            </div>
          ))}
        </div>
    </section>
  )
}

export default Skills