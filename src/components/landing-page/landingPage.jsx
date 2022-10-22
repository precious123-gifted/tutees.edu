import React, { useEffect, useRef, useState } from 'react'
import {AppContext} from '../../App.jsx'
import { CSSPlugin } from 'gsap/CSSPlugin'
import { easings } from 'react-spring'
import { TweenLite } from 'gsap/gsap-core'
import { TweenMax } from 'gsap/gsap-core'
import { useContext } from 'react'
import {useNavigate } from 'react-router-dom'
import { LandingPageStyled } from './landingPage.styled.jsx'
import BG1 from '../../assets/landingpage.png'
import BG2 from '../../assets/bg2.png'
import BG3 from '../../assets/bg3.png'
import BG4 from '../../assets/bg4.png'
import BG5 from '../../assets/bg5.png'
import logo from '../../assets/logo.png'
import logob from '../../assets/logob.png'
import {gsap,Power2,Power3,Power4,Circ,Elastic} from 'gsap'
import { NavLink } from 'react-router-dom'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(TweenMax)
gsap.registerPlugin(CSSPlugin)
gsap.registerPlugin(TweenLite)





export default function LandingPage() {

     const navigate = useNavigate();


    let slidingTXT = [
        'EXPAND YOUR LEARNING WITH INDIVIDUAL EDUCATIONAL PERFORMANCE',
'OVERCOME YOUR ACADEMIC CHALLENGES',
'WITH THE BEST SCHOOL FOR YOUR ACADEMIC PERFORMANCE',
'WITH THE BEST LEARNING MATERIALS',
'IN THE BEST WAY WE CAN,SIMPLY CALL US: +2348131274889'
        
    ]
    let img = [
        BG2,
BG1,
BG3,
BG4,
BG5



    ]
    let n = 0

    
    const{setHome} = useContext(AppContext)
    const{landingPage} = useContext(AppContext)
    const{setLandingPage} = useContext(AppContext)
    const llandingPage = useRef(null)
   
    const Delay = (e) => {
    e.preventDefault()
    setTimeout(() => {
        e.unpreventDefault() //make this work
    },2000)
}

const animationOnClickingGetStartedBTN = () =>{
let getStartedBTN = llandingPage.current.querySelector('.BTN')
let buttonTXT = llandingPage.current.querySelector('.BTN-text')


let effect = getStartedBTN.addEventListener('click',(e)=>{
    let LandingPage = llandingPage.current
    let slideText = LandingPage.querySelector('.slideTXT')
 
    
 
      


    setTimeout(() => {
        navigate('/home')
       setHome(true)
    setLandingPage(false) 
        
    },1800); 
   
    TweenMax.to( getStartedBTN,0.10,
     {ease:Circ.easeIn,autoAlpha:1,width:'100%',height:'790px',top:0,right:0,bottom:0,
     borderRadius:'0',backgroundColor:'#e9e7e7',border:'none'})
     TweenMax.to( buttonTXT,1.2,
        {ease:Circ.easeIn,autoAlpha:1,fontSize:'0px'})
})

return ()=>{
    
}

}



    const animate = ()=>{
        let LandingPage = llandingPage.current
        let slideText = LandingPage.querySelector('.slideTXT')
        let bubble = LandingPage.querySelectorAll('.bubble')

        let animation = LandingPage.setInterval(() => { 
   
   
            if(n===img.length-1){
               n = 0
           
               LandingPage.style.backgroundImage = `url(${img[n]})`
               slideText.innerHTML = slidingTXT[n]
            }
            else{
               n++
               LandingPage.style.backgroundImage = `url(${img[n]})`
               slideText.innerHTML = slidingTXT[n]
               
            }
            
            return ()=>{
            clearInterval(animation)
          } 
           }, 8000);
          
    }

    

const animationInterval = () =>{
    let LandingPage = llandingPage.current
let slideText = LandingPage.querySelector('.slideTXT')
let bubble = LandingPage.querySelectorAll('.bubble')
    setInterval(() => { 
   
   
        if(n===img.length-1){
           n = 0
       
           LandingPage.style.backgroundImage = `url(${img[n]})`
           slideText.innerHTML = slidingTXT[n]
        }
        else{
           n++
           LandingPage.style.backgroundImage = `url(${img[n]})`
           slideText.innerHTML = slidingTXT[n]
           
        }
       
       }, 8000);
}

useEffect(()=>{
    animationOnClickingGetStartedBTN()

let LandingPage = llandingPage.current
let slideText = LandingPage.querySelector('.slideTXT')
let bubble = LandingPage.querySelectorAll('.bubble')



    bubble[0].style.backgroundColor = '#434343' 
    setTimeout(() => {
        bubble[0].style.backgroundColor = '#14c46f'  
    }, 8000);



LandingPage.style.backgroundImage = `url(${img[n]})`
slideText.innerHTML = slidingTXT[n]
// bubble[n].childNode.style.opacity = 1

//    if(bubble[n].style.backgroundColor === '#14c46f') {
//     setTimeout(() => {
//         bubble[n].style.backgroundColor = '#434343'
//     }, 8000);
//    }

let animation = setInterval(() => { 
   
    

   
    if(n===img.length-1){
       n = 0
   
       LandingPage.style.backgroundImage = `url(${img[n]})`
       slideText.innerHTML = slidingTXT[n]
    }
    else{
       n++
       LandingPage.style.backgroundImage = `url(${img[n]})`
       slideText.innerHTML = slidingTXT[n]
       
    }
   
   }, 8000);


   let bubbleInterval = setInterval(() => {
    if(n=== 0){
        bubble[0].style.backgroundColor = '#434343' 
        setTimeout(() => {
            bubble[0].style.backgroundColor = '#14c46f'  
        }, 8000);
    }

    if(n=== 1){
        bubble[1].style.backgroundColor = '#434343' 
        setTimeout(() => {
            bubble[1].style.backgroundColor = '#14c46f'  
        }, 8000);
    }
    
    if(n=== 2){
        bubble[2].style.backgroundColor = '#434343' 
        setTimeout(() => {
            bubble[2].style.backgroundColor = '#14c46f'  
        }, 8000);
    }
    
    if(n=== 3){
        bubble[3].style.backgroundColor = '#434343' 
        setTimeout(() => {
            bubble[3].style.backgroundColor = '#14c46f'  
        }, 8000);
    }
    
    if(n=== 4){
        bubble[4].style.backgroundColor = '#434343' 
        setTimeout(() => {
            bubble[4].style.backgroundColor = '#14c46f'  
        }, 8000);
    }
   }, 8000);







return ()=>{
  clearInterval(animation)
} 

},[])



  return (
   
    <LandingPageStyled ref={llandingPage}>
        
        
<div className="content">
    
<div className="logo">
<img src={logo} alt="" srcSet="" />
</div>
    <div className="container">
     <div className="section1">
<div className="headerTXT">
    WE WILL HELP YOU 
</div>
<div className="slideTXT">
  
</div>
</div>
<div className="section2">
<div className="bubbles">
    <div className="bubble">
        <div className="active"></div>
    </div>
    <div className="bubble"><div className="active"></div></div>
    <div className="bubble"><div className="active"></div></div>
    <div className="bubble"><div className="active"></div></div>
    <div className="bubble"><div className="active"></div></div>
</div>
<div style={{position:'absolute'}} className='logob'>
    <img src={logob} alt="" srcSet=""/>
</div>
<div  className="BTN" style={{textDecoration:'none'}}> <div >
   <span className='BTN-text'>Get Started</span>
</div></div>
</div>   
    </div>

</div>


    </LandingPageStyled>
  )
}
