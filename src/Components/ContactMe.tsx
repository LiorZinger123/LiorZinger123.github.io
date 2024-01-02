import React, { useState } from 'react'
import { BsTelephone } from 'react-icons/bs'
import { IoMailOutline } from 'react-icons/io5'

const ContactMe = () => {

    const [name, setName] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [mailState, setMailState] = useState<string>('')
    const [msg, setmsg] = useState<string>('')
    const call = {icon: <BsTelephone size={30} className="site-icons way-to-contact-icon" />, title: "Call Me", info: "052-8037971"}
    const mail = {icon: <IoMailOutline size={30} className="site-icons  way-to-contact-icon" />, title: "Mail", info: "liorzinger123@gmail.com"}
    const location = {icon: <IoMailOutline size={30} className="site-icons way-to-contact-icon" />, title: "Location", info: "Hasahlav 14 Street, Haifa, Israel"}
    const ways_to_contact = [call, mail, location]

  return (
    <section className='site-sections' id="contactme">
        <h1>Contact Me</h1>
        <div className="section-info contact-me">
            <div className='ways-to-contact'>
                {ways_to_contact.map(way => (
                    <div key={way.title} className='way-to-contact'>
                        {way.icon}
                        <span className='way-to-contact-title'>{way.title}</span>
                        <span className='way-to-contact-info'>{way.info}</span>
                    </div>
                ))}
            </div>
            <div className='form-div'>
                <form>
                    <input type='text' name="name" id="name" value={name} onChange={e => setName(e.target.value)} placeholder='Name' />
                    <input type='tel' name="phone" id="phone" value={phone} onChange={e => setPhone(e.target.value)}
                    placeholder='Phone Number' pattern="[0-9]{3}-[0-9]{7}" />
                    <input type='text' name="mail" id="mail" value={mailState} onChange={e => setMailState(e.target.value)}
                    placeholder='Mail' className='wide-form-elements'/>
                    <textarea className='wide-form-elements'/>
                </form>
            </div>
        </div>
    </section>
  )
}

export default ContactMe