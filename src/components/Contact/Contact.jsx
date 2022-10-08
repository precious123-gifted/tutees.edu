import React, { useRef } from 'react'
import { ContactStyle } from './contact.styled.jsx'
import fblogo from '../../assets/fblogo.png'
import instalogo from '../../assets/instalogo.png'
import twitterlogo from '../../assets/twitterlogo.png'
import whatsapplogo from '../../assets/whatsapplogo.png'
import emaillogo from '../../assets/emaillogo.png'
import youtubelogo from '../../assets/youtubelogo.png'
import { AppContext } from '../../App.jsx'
import { useContext } from 'react'



export default function Contact() {
const {contact} = useContext(AppContext)


  return (
   <ContactStyle ref={contact}>
<div className="content">
    <div className="contact">
<div className="header"><span>Get In Touch</span></div>
<div className="whatsapp"><img src={whatsapplogo} alt="" srcset="" /><span>+234 813 127 4889</span></div>
<div className="email"><img src={emaillogo} alt="" srcset="" /><span>mail</span></div>

    </div>

<div className="follow-div">
<div className="header"><span>Follow Us</span></div>
<div className="socials">
<span className="fb"><img src={fblogo} alt="" srcset="" /></span>
<span className="insta"><img src={instalogo} alt="" srcset="" /></span>
<span className="youtube"><img src={youtubelogo} alt="" srcset="" /></span>
<span className="twitter"><img src={twitterlogo} alt="" srcset="" /></span>
    
</div>
</div>


<div className="message-div">
<div className="header"><span>Send us a message</span></div>
<div className="inputs">

<div className="name">
<label htmlFor="name">Your Name</label>
<input type="text" name="name" id="name" />

</div>

<div className="email">
<label htmlFor="email">Your Email</label>
<input type="text" name="email" id="email" />

</div>

<div className="message">
<label htmlFor="message">Your Message</label>
<input type="text" name="message" id="message" />

</div>

<div className="BTN">
    <input type="button" value="Send" />
</div>

</div>

</div>
</div>


   </ContactStyle>
  )
}
