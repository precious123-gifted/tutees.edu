import React, { useContext,useState, useEffect } from 'react'
import { TutorFormStyled } from './TutorForm.styled.jsx'
import {AppContext} from '../../App.jsx'



export default function TutorForm() {
    const{becomeATUtor} = useContext(AppContext)
    const{setBecomeATutor} = useContext(AppContext)
const{form} = useContext(AppContext)
const{tutorLandingPage} = useContext(AppContext)
    

    var uploadedIMG = ''



const [Form1,setForm1] = useState(true)
const [Form2,setForm2] = useState(false)
const [Form3,setForm3] = useState(false)




const functionToTrackStepTwo = () =>{


let textTwo = tutorLandingPage.current.querySelector('.two')
// let nextBTNToTwo = form.current.querySelector('.nextButtonToForm2')
let nextButtonToForm2 = form.current.querySelector('.nextButtonToForm2')


nextButtonToForm2.addEventListener('click',()=>{

textTwo.style.color = '#F9BA15'



})


}


const functionToTrackStepThree = () =>{


let textThree = tutorLandingPage.current.querySelector('.three')
// let nextBTNToTwo = form.current.querySelector('.nextButtonToForm2')
let nextButtonToForm3 = form.current.querySelector('.nextButtonToForm3')


nextButtonToForm3.addEventListener('click',()=>{

textThree.style.color = '#F9BA15'



})


}

const displayProfileImage = () =>{
let uploadBTN = form.current.querySelector('.uploadBTN')
const imageBox = form.current.querySelector('.imageBox')  


uploadBTN.addEventListener('change',(e)=>{
    let file =  e.target.files[0]
let reader = new FileReader();
reader.addEventListener('load',()=>{
uploadedIMG = reader.result
imageBox.style.backgroundImage = `url(${uploadedIMG})`

})
reader.readAsDataURL(file)
})
}

const functionToDisplayFormTwo = () =>{
let nextButtonToForm2 =form .current.querySelector('.nextButtonToForm2')
let form2 = form.current.querySelector('.form2')
let form1 = form.current.querySelector('.form1')



nextButtonToForm2.addEventListener('click',()=>{
form1.style.visibility = 'hidden'
form1.style.position = 'absolute'
 form2.scrollTo({top:400,behavior: "smooth", block: "end", position:'bottom',inline: "nearest",duration:1.5})
form2.style.visibility = 'visible'
form2.style.position = 'relative'


})



}

const functionToDisplayFormThree = () =>{
let nextButtonToForm3 = form.current.querySelector('.nextButtonToForm3')
let form2 = form.current.querySelector('.form2')
let form3 = form.current.querySelector('.form3')


nextButtonToForm3.addEventListener('click',()=>{
form2.style.visibility = 'hidden'
form2.style.position = 'absolute'
 form3.scrollTo({top:400,behavior: "smooth", block: "end", position:'bottom',inline: "nearest",duration:1.5})
form3.style.visibility = 'visible'
form3.style.position = 'relative'

})

}


useEffect(()=>{
displayProfileImage()
functionToDisplayFormTwo()
functionToDisplayFormThree()
functionToTrackStepTwo ()
functionToTrackStepThree()
},[])
  return (
   <TutorFormStyled ref={form}>
    <form action='https://formspree.io/f/mrgdloqk'  method='POST' className='forms'>
        
<div className="form1">
<span className='form1-header'>step 1 : Personal information</span>




<div className="content">

    
   <span className="header">Become part of our Tutors</span>
<div className='imageBox'  style={{width:'19vw',height:'19vw',borderRadius:'100px',backgroundColor:'grey',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'top'}}>

</div>
<label>
Click here to upload your image
<input  className='uploadBTN' type="file" name='Image'accept='image/jpg image/png' style={{display:'none'}} /> 

</label>

   <div className="inputs-field">


   <div className="title-gender input-container">
    <div className='input'>  
    <label htmlFor="Title">Title
    </label>

    <select name="Title" id="title" defaultValue={'mr-mrs'}>
    <option value="mr-mrs" >Mr / Mrs</option>
    <option value="mr">Mr</option> 
    <option value="mrs">Mrs</option>
     <option value="mrs">Ms</option>
   </select>
    </div>

    <div className='input'>  
    <label htmlFor="Gender">Gender
    </label>

    <select  name="Gender" id="gender" defaultValue={'none'}>
    <option value="none">None</option>
    <option value="male">Male</option> 
    <option value="female">Female</option>
   </select>
    </div>

</div>

<div className="first-lastName input-container">
    <div className='input'>  
    <label htmlFor="First-name">First Name
    </label>

    <input name='First-name' className='first-name' type="text" placeholder='Enter your first name'/> 
    </div>

    <div className='input'>  
    <label htmlFor="Last-name">Last Name
    </label>

    <input name='Last-name' className='last-name input' type="text"  placeholder='Enter your last name'/> 
    </div>

</div>



<div className="email-phone input-container">
    <div className='input'>  
    <label htmlFor="Email">Email Address
    </label>

    <input name='Email' className='email ' type="text" placeholder='Enter your email'/> 
    </div>

    <div className='input'>  
    <label htmlFor="Phone-number">Phone Number
    </label>

    <input name='Phone-number' className='phone ' type="text" placeholder='Enter your phone number'/> 
    </div>

</div>


<div className="password-password input-container">
    <div className='input'>  
    <label htmlFor="Password">Password
    </label>

    <input name='Password' className='password' type="text" placeholder='Enter your password'/> 
    </div>

    <div className='input'>  
    <label htmlFor="Confirm-password">Retype password
    </label>

    <input name='Confirm-password' className='re-password' type="text" placeholder='Re-enter your password'/> 
    </div>

</div>

<div className="password-password input-container">
    <div className='input'>  
    <label htmlFor="Password">State
    </label>

    <input name='Password' className='password' type="text" placeholder='Enter your state'/> 
    </div>

    <div className='input'>  
    <label htmlFor="Confirm-password">Local Government
    </label>

    <input name='Confirm-password' className='re-password' type="text" placeholder='enter your local government'/> 
    </div>

</div>


<div className="password-password input-container">
    <div className='input'>  
    <label htmlFor="Password">Residential Address
    </label>

    <input name='Password' className='password' type="text" placeholder='Enter your residential address'/> 
    </div>

    <div className='input'>  
    <label htmlFor="Confirm-password">Location of interest
    </label>

    <input name='Confirm-password' className='re-password' type="text" placeholder='enter your location of interest'/> 
    </div>

</div>

<span className="nextButtonToForm2">
    <span>Next</span>
</span>

 






   </div>
</div>

</div>

<div className="form2">
<span className='form2-header'>step 2 : Your educational background</span>

<div className="content">
<span className="header">
    Educational Background
</span>

<div className="educational-qualification input-container">
    <div className='input'>  
    <label htmlFor="qualification">highest qualification
    </label>

     <select  name="qualification" id="qualification" defaultValue={'none'}>
    <option value="none">None</option>
    <option value="high-school">High School</option> 
    <option value="undergraduate">Undergraduate</option>
    <option value="HND">HND</option>
    <option value="ND">ND</option>
    <option value="BSC">BSC</option>
    <option value="masters">Masters</option>
    <option value="doctorate">Doctorate degree and others</option>
   </select>
    </div>

    <div className='input'>  
    <label htmlFor="school">Where did you complete your highest education
    </label>

    <input name='school' className='school' type="text" placeholder='tell us your school name'/> 
    </div>

<div className='input'>  
    <label htmlFor="school">years of experience
    </label>

    <input name='school' className='school' type="text" placeholder='1 to '/> 
    </div>

<div className='input'>  
    <label htmlFor="school-date">When did you complete your highest education
    </label>

    <input name='school-date' className='school-date' type="text" placeholder='when did  you complete your highest education'/> 
    </div>

<div className='input'>  
    <label htmlFor="school-date">Educational career goal / view point
    </label>

    <input name='school-date' className='school-date' type="text" placeholder='what your educational career goal'/> 
    </div>

<div className='biography-section'>
    <div>
      <label htmlFor="comment">personal biography</label>

<textarea name="comment" id="comment" cols="30" rows="10"></textarea>  
    </div>


</div>

<span className="nextButtonToForm3">
    <span>Next</span>
</span>

</div>



</div>


</div>

<div className="form3">
<div className="content">
    <label htmlFor="header">
        Carefully select the days and time you will be available to teach,
        if the time is no longer convenient for you,you can adjust it.Note that 
        we will use this information when assigning you a tutee.
    
    </label>

<span className="header" >
    Choose your days of availability
</span>

<div className="days-time" style={{marginBottom:'10vw'}}>
    <div className="days">
        <div className="sun">
        <label htmlFor="sun" style={{display:'flex',justifyContent:'space-between'}}>SUN
        </label>
        <input type="time" name="sunday -time" id="" />

        </div>
        <div className="mon">
        <label htmlFor="mon" style={{display:'flex',justifyContent:'space-between'}}>MON
        </label>
        <input type="time" name="monday-time" id="" />

        </div>
          <div className="tue">
        <label htmlFor="tue" style={{display:'flex',justifyContent:'space-between'}}>TUE
        </label>
        <input type="time" name="tuesday-time" id="" />

        </div>
          <div className="wed">
        <label htmlFor="wed" style={{display:'flex',justifyContent:'space-between'}}><span>WED</span> 
        </label>
        <input type="time" name="wednesday-time" id="" />

        </div>
  <div className="thu">
        <label htmlFor="thu" style={{display:'flex',justifyContent:'space-between'}}><span>THU</span>
        </label>
        <input type="time" name="thursday-time" id="" />

        </div>
  <div className="fri">
        <label htmlFor="fri" style={{display:'flex',justifyContent:'space-between'}}>FRI
        </label>
        <input type="time" name="friday-time" id="" />

        </div>
          <div className="sat">
        <label htmlFor="sat" style={{display:'flex',justifyContent:'space-between'}}>SAT
        </label>
        <input type="time" name="saturday-time" id="" />

        </div>



    </div>
 
<div className='expected'>  
    <label htmlFor="school-date">How much do you expect to be paid ?
    </label>

    <input name='school-date' className='school-date' type="text" placeholder='expected amount (NGN)'/> 
    </div>   
</div>


<div className='BTN'><button type='submit'>
    <span>Become A Tutor</span>
</button></div> 








</div>


</div>

</form>

   </TutorFormStyled>
  )
}
