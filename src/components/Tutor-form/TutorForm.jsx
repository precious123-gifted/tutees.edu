import React, { useContext, useEffect } from 'react'
import { TutorFormStyled } from './TutorForm.styled.jsx'
import {AppContext} from '../../App.jsx'
import { useRef } from 'react'


export default function TutorForm() {
    const{becomeATUtor} = useContext(AppContext)
    const{setBecomeATutor} = useContext(AppContext)

    

  return (
   <TutorFormStyled>
<div className="form">


<div className="content">
   <span className="header">Become part of our Tutors</span>
   <div className="inputs-field">


   <div className="title-gender input-container">
    <div className='input'>  
    <label htmlFor="title">Title</label>
    <select name="title" id="title">
    <option value="mr-mrs" selected>Mr / Mrs</option>
    <option value="mr">Mr</option> 
    <option value="mrs">Mrs</option>
   </select>
    </div>

    <div className='input'>  
    <label htmlFor="gender">Gender</label>
    <select name="gender" id="gender">
    <option value="none" selected>None</option>
    <option value="male">Male</option> 
    <option value="female">Female</option>
   </select>
    </div>

</div>

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


<div className="password-password input-container">
    <div className='input'>  
    <label htmlFor="password">Password</label>
    <input className='password' type="text" placeholder='Enter your password'/> 
    </div>

    <div className='input'>  
    <label htmlFor="re-password">Retype password</label>
    <input className='re-password' type="text" placeholder='Re-enter your password'/> 
    </div>

</div>


<label for='BTN'>By registring you agree to our terms and policies</label>
<div className='BTN'>
    <span>Become A Tutor</span>
</div>
   </div>
</div>
</div>


   </TutorFormStyled>
  )
}
