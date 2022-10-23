import React, { useContext, useEffect, useRef, useState } from 'react';
import { LandingPageStyled } from './LandingPage.styled';
import Logo from '../../assets/logo1.png'
import One from '../../assets/icon-one.png'
import Two from '../../assets/icon-two.png'
import Three from '../../assets/icon-three.png'
import Four from '../../assets/icon-four.png'
import Five from '../../assets/icon-five.png'
import TutorForm from '../Tutor-form/TutorForm';
import {AppContext} from '../../App.jsx'
import Tutor from '../../assets/tutor.jpg'




const LandingPage = () => {
const [Form,setForm] = useState(false)
const{form} = useContext(AppContext)
const{tutorLandingPage} = useContext(AppContext)


const functionToSwitchToRegistrationForm = () =>{
    
    let getStartedBTN = tutorLandingPage.current.querySelector('.btn')
   getStartedBTN.addEventListener('click',()=>{
setForm(true)

})

    return () => {
      
    };
}

const functionToTrackStepOne = () =>{

let getStartedBTN = tutorLandingPage.current.querySelector('.btn')
let textOne = tutorLandingPage.current.querySelector('.one')


getStartedBTN.addEventListener('click',()=>{

textOne.style.color = '#F9BA15'



})


}





useEffect(() => {
functionToSwitchToRegistrationForm()
functionToTrackStepOne()


}, []);


useEffect(() => {
// functionToTrackStepTwo()


}, []);


    return (
        <LandingPageStyled ref={tutorLandingPage}>
<div className="content">
<div className="nav">
    <div className="nav__content">
       <div className="logo"><img src={Logo} alt="" srcset="" /></div>
<div className="steps">
    <div className="step one"><div className="icon"><img src={One} alt="" srcset="" /></div> <span>Personal Information</span></div>
    <div className="step two"><div className="icon"><img src={Two} alt="" srcset="" /></div> <span>Educational Background</span></div>
    <div className="step three"><div className="icon"><img src={Three} alt="" srcset="" /></div> <span>Days Available </span></div>
    <div className="step four"><div className="icon"><img src={Four} alt="" srcset="" /></div> <span>Experience & Identification</span></div>
    <div className="step five"><div className="icon"><img src={Five} alt="" srcset="" /></div> <span>Verification</span></div>
</div> 
    </div>


</div>

<div className="header">
    <div className="header__content">
<div className='IMG-div'>
<img src={Tutor} alt="" srcset="" />
</div>

<div className="section2">



{
Form === false ? 
<div className='writeup-div'>
    <div className="writeup-div__header">
        <span>
            Become Part of our Tutors Today
        </span>
    </div>
<span className='writeup-div__write-up'>
    PrepClass Home Tutors provides an avenue for experienced teachers to manage and grow their home tutoring business.

Did you know that there are over 500,000 parents in Nigeria willing to pay the premium rate (which may be equal to your current salary or more) in order to connect their children with quality teachers that will teach their kids/themselves according to professional standards? 
    Tutees Educational Intervention provides an avenue for experienced teachers to manage and grow their home tutoring business.

Did you know that there are over 500,000 parents in Nigeria willing to pay the premium rate (which may be equal to your current salary or more) in order to connect their children with quality teachers that will teach their kids/themselves according to professional standards? 

</span>
<div className="btn">
    <span>Get Started</span>
</div>
</div>
 
 : Form === true ? <TutorForm/> : null

}

</div>
    </div>
</div> 







</div>

            
        </LandingPageStyled>
    );
}

export default LandingPage;
