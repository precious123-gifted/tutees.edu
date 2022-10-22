import React, { useContext, useRef } from 'react'
import {GAT} from './GetATutor Form.styled.jsx'
import formLine from '../../assets/formline.png'
import {AppContext} from '../../App.jsx'
import Logo from '../../assets/logo.png'
 

export default function GetATutorForm() {
    const{getATUtor} = useContext(AppContext)
    const{setGetATutor} = useContext(AppContext)

const form = useRef(null)

  return (
  <GAT ref={form}>
          <form method='POST' action='https://formspree.io/f/mgeqzpoo'>
<div className="form">
<span className='company-head' style={{height:'20vw',width:'100%',display:'flex',alignItems:'center'}}>  <span><img src={Logo} alt="" srcset="" /> </span><span style={{fontSize:'3vw',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start'}}> <span>TUTEES EDUCATIONAL INTERVENTIONS <br />HOME SCHOOL</span> </span>  </span>

<div className="content">
    
   
   <span className="header">Schedule your physical class now</span>
   <span className='learners-header'>Learners</span>
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
    <label htmlFor="sex">Gender</label>
   <select name="sex" id="sex" defaultValue={'none'}>
    <option value="none" >None</option>
    <option value="male">Male</option> 
    <option value="female">Female</option>
   </select>
    </div>

    <div className='input'>  
    <label htmlFor="classType">Class type</label>
    <select name="classType" id="classType" defaultValue={'none'}>
    <option value="none">None</option>
    <option value="male">Montessori</option> 
    <option value="female">Nursery 1-2</option>
    <option value="female">Grade 1</option>
    <option value="female">Grade 2</option>
    <option value="female">Grade 3</option>
    <option value="female">Grade 4</option>
    <option value="female">Grade 5</option>
    <option value="female">Grade 6</option>
    <option value="female">JSS 1</option>
    <option value="female">JSS 2</option>
    <option value="female">JSS 3</option>
    <option value="female">SSS 1</option>
    <option value="female">SSS 2</option>
    <option value="female">SSS 3</option>
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
    <select name="hear-about" id="hear-about" defaultValue={'none'}>
    <option value="none" >None</option>
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
    <select name="study" id="study" defaultValue={'none'}>
    <option value="none">None</option>
    <option value="male">Male</option> 
    <option value="female">Female</option>
   </select>
    </div>

</div>

  <span><img src={formLine} alt="" srcset="" /></span>

 <span className='learners-header'>Guardian</span>

  <div className="guardian-firstName input-container">
    <div className='input'>  
    <label htmlFor="guardian">Title</label>
    <select name="guardian" id="guardian" defaultValue={'mr-mrs'}>
    <option value="mr-mrs">Mr / Mrs</option>
    <option value="mr">Mr</option> 
    <option value="mrs">Mrs</option>
     <option value="mrs">Ms</option>
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


<div className="phone-number input-container">
    <div className='input'>  
    <label htmlFor="phone">Phone Number</label>
    <input className='phone' type="text" placeholder='000-111-222'/> 
    </div>
 
    <div className='input'>  

    
    <label htmlFor="relationship">Whats your relationship with the learner</label>
    <select name="relationship" id="relationship" defaultValue={'none'}>
    <option value="none">None</option>
    <option value="father">Father</option> 
    <option value="mother">Mother</option>
    <option value="uncle">Uncle</option>
    <option value="aunt">Aunt</option>
    <option value="aunt">Guardian</option>
   </select>
    </div>

  

</div>

<div className="phone-number input-container">
 
  
<div className='input'>  
    <label htmlFor="phone">Email</label>
    <input className='phone' type="text" placeholder='type you email address'/> 
    </div>
</div>
<div className='comment-section'>
    <div>
      <label htmlFor="comment">Any feedback ?kindly send us your comments</label>

<textarea name="comment" id="comment" cols="30" rows="10"></textarea>  
    </div>


</div>

<div className='BTN'>
    <button type="submit">
    <span>Get A Tutor</span>
    </button>
</div>
   </div>
</div>
</div>
  </form>
  </GAT>
  )
}
