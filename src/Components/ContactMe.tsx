import { useState } from 'react'
import { BsTelephone } from 'react-icons/bs'
import { IoMailOutline } from 'react-icons/io5'
import { GrLocation } from "react-icons/gr";
import { VscSend } from 'react-icons/vsc'
import '../css/ContactMe.css'

const ContactMe = () => {

    const [name, setName] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [mailState, setMailState] = useState<string>('')
    const [msg, setmsg] = useState<string>('')
    const call = {icon: <BsTelephone size={30} className="site-icons way-to-contact-icon" />, title: "Call Me", info: "052-8037971"}
    const mail = {icon: <IoMailOutline size={30} className="site-icons  way-to-contact-icon" />, title: "Mail", info: "liorzinger123@gmail.com"}
    const location = {icon: <GrLocation size={30} className="site-icons way-to-contact-icon" />, title: "Location", info: "Hasahlav 14 Street, Haifa, Israel"}
    const ways_to_contact = [call, mail, location]

  return (
    <section className='site-sections' id="contactme">
        <h1>Contact Me</h1>
        
        <div className="contact-me">
            <div className='ways-to-contact'>
                {ways_to_contact.map(way => (
                    <div key={way.title} className='way-to-contact'>
                        {way.icon}
                        <span className='way-to-contact-title'>{way.title}</span>
                        <span className='way-to-contact-info'>{way.info}</span>
                    </div>
                ))}
            </div>
            
            <div>
                <form>
                    <input type='text' name="name" id="name" value={name} onChange={e => setName(e.target.value)} placeholder='Name' required/>
                    <input type='tel' name="phone" id="phone" value={phone} onChange={e => setPhone(e.target.value)}
                        placeholder='Phone' pattern="[0-9]{3}-[0-9]{7}" required />
                    <input type='text' name="mail" id="mail" value={mailState} onChange={e => setMailState(e.target.value)}
                        placeholder='Mail' className='wide-form-elements' required />
                    <textarea name='msg' id='msg' value={msg} onChange={e => setmsg(e.target.value)} rows={4} cols={20}
                        placeholder='Message' className='wide-form-elements' required />   
                    <button className='btn send-btn'>
                        <p>Send Me</p>
                        <span><VscSend size={25} className="send-btn-icon wide-form-elements" /></span>
                    </button>             
                </form>
            </div>

        </div>
    </section>
  )
}

export default ContactMe