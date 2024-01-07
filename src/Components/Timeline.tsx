import { useRef } from 'react'
import '../css/Timeline.css'

const Timeline = () => {

  const count = useRef<number>(1)
  const stop_infos = [{title: "Full Stack - IDF Top Secret Technology Unit", years: "January 2022 - December 2023"},
                      {title: "IT Administrator - IDF Top Secret Technology Unit", years: "April 2020 - January 2022"},
                      {title: "TMM Course - IDF", years: "May 2020 - August 2020"},
                      {title: "Full Stack - IDF Top Secret Technology Unit", years: "September 2016 - July 2019"}]
                      

  return (
    <section className='site-sections' id="timeline">
        <h1>Timeline</h1>
        <div className="timeline-info">
          {/* <div className="timeline"></div> */}
          <ul className="timeline-stops">
              {stop_infos.map(info => {
                count.current += 1
                let classname = ''
                if(count.current % 2 === 0)
                  classname = 'stop-info stop-info-to-left'
                else
                  classname = 'stop-info stop-info-to-right'
                return (<li className='timeline-stop'>
                  <div className="point"></div>
                  <div className={classname}>
                    <span className='stop-title'>{info.title}</span>
                    <span>{info.years}</span>
                  </div>
                </li>
              )})}
          </ul>
        </div>
        

    </section>
  )
}

export default Timeline