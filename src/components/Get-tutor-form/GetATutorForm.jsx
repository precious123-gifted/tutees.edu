import React, { useContext, useRef } from 'react'
import {GAT} from './GetATutor Form.styled.jsx'
import formLine from '../../assets/formline.png'
import {AppContext} from '../../App.jsx'
 

export default function GetATutorForm() {
    const{getATUtor} = useContext(AppContext)
    const{setGetATutor} = useContext(AppContext)

const form = useRef(null)

  return (
  <GAT ref={form}>
<div className="form">


<div className="content">
   <span className="header">Schedule your physical class now</span>
   <div className="inputs-field">
<div className="first-lastName input-container">
    <div className='input'>  
    <label htmlFor="first-name">First Name</label>
    <input className='first-name' type="text" placeholder='Enter your first name'/> 
    </div>

    <div className='input'>  
    <label htmlFor="last-name">Last Name</label>
    <input className='last-name input' type="text"  placeholder='Enter your last name'/> 
    </div>

</div>

<div className="sex-classType input-container">
    <div className='input'>  
    <label htmlFor="sex">Sex</label>
   <select name="sex" id="sex">
    <option value="none" selected>None</option>
    <option value="male">Male</option> 
    <option value="female">Female</option>
   </select>
    </div>

    <div className='input'>  
    <label htmlFor="classType">Class type</label>
    <select name="classType" id="classType">
    <option value="none" selected>None</option>
    <option value="male">Male</option> 
    <option value="female">Female</option>
   </select>
    </div>

</div>

<div className="email-phone input-container">
    <div className='input'>  
    <label htmlFor="email">Email Address</label>
    <input className='email ' type="text" placeholder='Enter your email'/> 
    </div>

    <div className='input'>  
    <label htmlFor="phone">Phone Number</label>
    <input className='phone ' type="text" placeholder='Enter your phone number'/> 
    </div>

</div>
<div className="date-hear input-container">
    <div className='input'>  
    <label htmlFor="date">Lesson start date</label>
    <input className='date' type="date" /> 
    </div>

    <div className='input'>  
    <label htmlFor="hear-about">How did you hear about us</label>
    <select name="hear-about" id="hear-about">
    <option value="none" selected>None</option>
    <option value="twitter">Twitter</option> 
    <option value="facebook">Facebook</option>
    <option value="instagram">Instagram</option>
    <option value="linkedin">LinkedIn</option>
   </select>
    </div>

</div>

<div className="address-studyPlan input-container">
    <div className='input'>  
    <label htmlFor="address">Address</label>
    <input className='address ' type="text" placeholder='Enter your address'/> 
    </div>

    <div className='input'>  
    <label htmlFor="study">Study Plan</label>
    <select name="study" id="study">
    <option value="none" selected>None</option>
    <option value="male">Male</option> 
    <option value="female">Female</option>
   </select>
    </div>

</div>

  <span><img src={formLine} alt="" srcset="" /></span>

  <div className="guardian-firstName input-container">
    <div className='input'>  
    <label htmlFor="guardian">Parent / Guardian</label>
    <select name="guardian" id="guardian">
    <option value="mr-mrs" selected>Mr / Mrs</option>
    <option value="mr">Mr</option> 
    <option value="mrs">Mrs</option>
   </select>
    </div>

    <div className='input'>  
    <label htmlFor="first-name">First Name</label>
    <input className='first-name' type="text" placeholder='Enter your first name'/> 
    </div>

</div>

<div className="first-lastName input-container">
    <div className='input'>  
    <label htmlFor="last-name">Last Name</label>
    <input className='last-name' type="text" placeholder='Enter your last name'/> 
    </div>

    <div className='input'>  
    <label htmlFor="address">Address</label>
    <input className='address' type="text" placeholder='Enter your address'/> 
    </div>

</div>


<div className="first-lastName input-container">
    <div className='input'>  
    <label htmlFor="phone">Phone Number</label>
    <input className='phone' type="text" placeholder='000-111-222'/> 
    </div>

    <div className='input'>  
    <label htmlFor="relationship">Whats your relationship with the learner</label>
    <select name="relationship" id="relationship">
    <option value="none" selected>None</option>
    <option value="father">Father</option> 
    <option value="mother">Mother</option>
    <option value="uncle">Uncle</option>
    <option value="aunt">Aunt</option>
   </select>
    </div>

  

</div>

<div className='comment-section'>
    <div>
      <label htmlFor="comment">Any feedback ?kindly send us your comments</label>

<textarea name="comment" id="comment" cols="30" rows="10"></textarea>  
    </div>


</div>

<div className='BTN'>
    <span>Get A Tutor</span>
</div>
   </div>
</div>
</div>
  </GAT>
  )
}
