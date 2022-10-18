import React, { Component } from 'react'
import {HOW} from './How.styled.jsx'
import Oneicon from '../../assets/1icon.png'
import Twoicon from '../../assets/2icon.png'
import Threeicon from '../../assets/3icon.png'
import { AppContext } from '../../App.jsx';
import { useContext } from 'react'
import { useRef,useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);




const How = () => {



  const {how} = useContext(AppContext)
const displaySteps = ()=>{
  let steps = how.current.querySelectorAll('.step')

  steps.forEach(step => {
    ScrollTrigger.create({
      trigger: step ,
     
      start: 'top 40%',
      end: 'bottom 15%',
     
      onEnter: () => gsap.to(step, {
        
        opacity: 1,
        stagger: 0.2,
        marginLeft:0,
        duration:1.3
      }),
      onLeave: () => gsap.to(step, {
       
        opacity: 0,
        stagger: 0.2,
        marginLeft:'-1000px',
        duration:1.3
      }),
      onEnterBack: () => gsap.to(step, {
      
        opacity: 1,
        stagger: -0.2,
        marginLeft:0,
        duration:1.3
      }),
  
      onLeaveBack: () => gsap.to(step, {
       
        opacity: 0,
        stagger: -0.2,
        marginLeft:'-1000px',
        duration:1.3
      }),
    });



  });


}


const displayBTN = ()=>{
  let steps = how.current.querySelectorAll('.step')
  let BTN = how.current.querySelectorAll('.btn')
 


    ScrollTrigger.create({
      trigger: steps[2] ,
     
      start: 'top 40%',
      end: 'bottom 15%',
     
      onEnter: () => gsap.to(BTN, {
        
        opacity: 1,
        stagger: 0.2,
        marginLeft:0,
        duration:1.3
      }),
      onLeave: () => gsap.to(BTN, {
       
        opacity: 0,
        stagger: 0.2,
        marginLeft:'-1000px',
        duration:1.3
      }),
      onEnterBack: () => gsap.to(BTN, {
      
        opacity: 1,
        stagger: -0.2,
        marginLeft:0,
        duration:1.3
      }),
  
      onLeaveBack: () => gsap.to(BTN, {
       
        opacity: 0,
        stagger: -0.2,
        marginLeft:'-1000px',
        duration:1.3
      }),
    



  });


}






useEffect(()=>{
displaySteps()
displayBTN()

},)




  return (
    <HOW ref={how}>
        <div className="content" >
          <div className="header">
            <span>How It Works</span>
          </div>
          <div className="steps">
            <div className='step1 step'>
              <div className="number"><img src={Oneicon} alt="" srcset="" /></div>
              <div className="write-up">
                <span>Tell us where you need help.
                  Connect with professionals in all subjects 
                  and skills you might want your child to learn.</span>
              </div>
            </div>
            <div className='step2 step'>
            <div className="number"><img src={Twoicon} alt="" srcset="" /></div>
            <div className="write-up">
              <span>
              We match your child up with a tutor.
              We offer your child the perfect tutor to work with your requirements.
              </span>
            </div>
            </div>
            <div className='step3 step'>
            <div className="number"><img src={Threeicon} alt="" srcset="" /></div>
            <div className="write-up">
              <span>
                Meet the Tutor.
                Take a convenient time to meet the tutor and
                 start  lessons with the learning option of your choice.
              </span>
            </div>
            </div>

            <div className="btn">
               <span className='GAT list'><NavLink style={{textDecoration:'none',color:'inherit'}} to={'/get-a-tutor'}>Get A Tutor</NavLink></span>
            </div>
          </div>
        </div>
      </HOW>
  )
}

export default How
