import React, { Component, useContext } from 'react'
import {HEader} from './Header.styled.jsx'
import { useRef,useState } from 'react'
import { useEffect } from 'react'
import {gsap,Circ,Elastic,Power0,Power1,Power2} from 'gsap'
import headerIll from '../../assets/header-ill.png'
import burgerIcon from '../../assets/burgerIcon.png'
import exitIcon from '../../assets/exit.png'
import headerIll1 from '../../assets/header-ill1.png'
import logo from '../../assets/logo1.png'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLink } from 'react-router-dom';
import {AppContext} from '../../App.jsx'
import {NavBar} from './nav/Nav.styled.jsx'



gsap.registerPlugin(ScrollTrigger);



const Header = () => {

const{about} = useContext(AppContext)
const{header} = useContext(AppContext)
const{how} = useContext(AppContext)
const{why} = useContext(AppContext)
const{nav}=useContext(AppContext)
const{contact}=useContext(AppContext)
const{app}=useContext(AppContext)
const{blog}=useContext(AppContext)
const{setBlog}=useContext(AppContext)
const{home}=useContext(AppContext)
const{setHome}=useContext(AppContext)
const{getTUtorForm} = useContext(AppContext)
const{setGetTutorForm} = useContext(AppContext)
const{becomeATUtor} = useContext(AppContext)
const{setBecomeATutor} = useContext(AppContext)

const [serviceVisibility,setServiceVisibility] = useState(false)
const NOV  = serviceVisibility === true?'visible':serviceVisibility === false?'hidden':null

const portraitView = window.matchMedia('(max-width: 1050px) and (max-height: 3050px) and (orientation: portrait)')


const functionToScrollHeaderElementsToView = () =>{
let About = about.current
    let Contact = contact.current
    let Header = header.current
    let writeUp = header.current.querySelector('.write-up')
  let BTN = header.current.querySelector('.btn')
  let section2 = header.current.querySelector('.section2')
  let Nav = nav.current


  gsap.to(writeUp,2,{marginLeft:0,ease:Power2.easeIn,})
  gsap.to(BTN,3,{opacity: 1,marginLeft:0,ease:Power2.easeIn})
  gsap.to(section2,1.6,{opacity: 1,marginRight:0,ease:Power2.easeIn})

  gsap.to(Nav,3,{opacity:1,top:0,ease:Power2.easeIn,})


}

const functionToScrollToAboutPage = () =>{
    let Header = header.current
let aboutBTN = Header.querySelectorAll('.aboutBTN')
 let About = about.current

  aboutBTN.forEach(btn => {
      btn.addEventListener('click',()=>{ 
    console.log('shakabom')
  About.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest",duration:1.5})
  })
  });
}
const functionToScrollToContactPage = () =>{
  let Header = header.current
    let Contact = contact.current
let contactBTN = Header.querySelectorAll('.contactBTN')

  contactBTN.forEach(btn => {
      btn.addEventListener('click',()=>{ 
    console.log('shakabom')
  Contact.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest",duration:1.5})
  })
  });


}
  
const functionToScrollToWhyChooseUsPage = () =>{
let whyChooseUsTXT =  header.current.querySelector('.chooseBTN')
let whyChooseUsPage = why.current


whyChooseUsTXT.addEventListener('click',()=>{

whyChooseUsPage.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest",duration:1.5})
})
}

const functionToSlideMenuInAndOut = () =>{
let menu = header.current.querySelector('.menuDiv')
let openIcon = header.current.querySelector('.menuIcon')
let closeIcon = header.current.querySelector('.exitIcon')

openIcon.addEventListener('click',()=>{
gsap.to(menu,0.8,{left:'40vw'})


})
closeIcon.addEventListener('click',()=>{
  gsap.to(menu,0.8,{left:'100vw'})
  
  
  })
}

const functionToDisplayBlog = () =>{
  let blogBTN = header.current.querySelectorAll('.blog')
blogBTN.forEach(btn => {
   btn.addEventListener('click',()=>{
    setHome(false)
    setBlog(false)
    
  })
});
 
}
const functionToDisplayGetTutorForm = () =>{
  let getTutorBTN = header.current.querySelectorAll('.GAT')
getTutorBTN.forEach(btn => {
   btn.addEventListener('click',()=>{
    setHome(false)
    setGetTutorForm(true) 
   
  })
});
 
}

const functionToDisplayBecomeATutorForm = () =>{
  let becomeTutorBTN = header.current.querySelectorAll('.BAT')
becomeTutorBTN.forEach(btn => {
   btn.addEventListener('click',()=>{
    setHome(false)
    setBecomeATutor(true) 
  
  })
});
 
}
const functionToDisplayHeaderContent = () =>{

  let writeUp = header.current.querySelector('.write-up')
  let BTN = header.current.querySelector('.btn')
  let section2 = header.current.querySelector('.section2')
 



  ScrollTrigger.create({
    trigger: header.current,
    start: 'top 17%',
    end: 'bottom 85%',
   
   
    onLeave: () => gsap.to(writeUp, {
      
      opacity: 0,
      stagger: 0.2,
      marginLeft:'-500px',
      duration:1.3
    }),
    onEnterBack: () => gsap.to(writeUp, {
      
      opacity: 1,
      stagger: -0.2,
      marginLeft:0,
      duration:1.3
    }),


  });

  ScrollTrigger.create({
    trigger: header.current,
    start: 'top 17%',
    end: 'bottom 85%',
    
    duration:1.3,

    
    
    onLeave: () => gsap.to(BTN, {
      
      opacity: 0,
      stagger: 0.2,
      marginLeft:'-500px',
      duration:1.1
    }),
    onEnterBack: () => gsap.to(BTN, {
     
      opacity: 1,
      stagger: -0.2,
      marginLeft:0,
      duration:1.1
    }),
  });



  ScrollTrigger.create({
    trigger: header.current,
    start: 'top 17%',
    end: 'bottom 85%',
    
    duration:1.3,

    
  
    onLeave: () => gsap.to(section2, {
      
      opacity: 0,
      stagger: 0.2,
      marginRight:'-500px',
      duration:1.1
    }),
    onEnterBack: () => gsap.to(section2, {
     
      opacity: 1,
      stagger: -0.2,
      marginRight:0,
      duration:1.1
    }),
  });

}
const setServiceTextClickEventListener = () =>{
let servicesTXT = header.current.querySelectorAll('.services-TXT')
 

if(portraitView.matches){
servicesTXT.forEach(btn => {
  
  btn.addEventListener('click',()=>{ 
    setServiceVisibility(!serviceVisibility)
    console.log(serviceVisibility)
    
  
 
  })
});}

}

const  functionToToggleServiceListState = () =>{
let servicesList = header.current.querySelectorAll('.services-list')
servicesList.forEach(x=>{ 
      x.style.visibility = NOV
    })

}

const setServiceTextHoverEventListener = () =>{
let servicesTXT = header.current.querySelectorAll('.services-TXT')

servicesTXT.forEach(btn => {
  
  btn.addEventListener('mouseover',()=>{ 
    setServiceVisibility(true)
    console.log(serviceVisibility)
  })
   btn.addEventListener('mouseleave',()=>{ 
    setServiceVisibility(false)
    console.log(serviceVisibility)
  })
});



}

const functionToScrollToTop = () =>{
let logo = header.current.querySelector('.logo')
let Header = header.current


logo.addEventListener('click',()=>{
Header.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest",duration:1.5})

})

}



useEffect(()=>{
functionToDisplayBlog()
functionToSlideMenuInAndOut()
functionToDisplayHeaderContent()
functionToDisplayGetTutorForm()
functionToDisplayBecomeATutorForm()
functionToScrollHeaderElementsToView()
functionToScrollToTop()
functionToScrollToWhyChooseUsPage()
functionToToggleServiceListState()
functionToScrollToAboutPage()
functionToScrollToContactPage()
setServiceTextClickEventListener()
setServiceTextHoverEventListener()
 

})

  return (
    <HEader ref={header}>
       <NavBar className='nav' ref={nav}>
        <div className='content'>
<div className='logo-div'>
  <span><img src={logo} className='logo' alt="" srcset="" /></span>
  <div className="menuIcon">
    <img src={burgerIcon} alt="" srcset="" />
</div>
</div>
<div className="menuDiv">

<div className='list-div'>
    <span className='home list'><NavLink style={{textDecoration:'none',color:'inherit'}} to={'/'}>Home</NavLink></span>
    <span className='GAT list'><NavLink style={{textDecoration:'none',color:'inherit'}} to={'/get-a-tutor'}>Get A Tutor</NavLink></span>
    <span className='services'>

      <div className='services-TXT list' >Services</div>
    <div className='services-list'>
      <div>Montessori early years education</div>
      <div>Home Work Help</div>
      <div>Virtual lessons</div>
      <div>In-person learning support</div>
      <div>Learning challenge interventions</div>
      <div>E-Videos</div>
      <div>
Examinations Prep(SAT,Check Point,IGCSE,WAEC,NECO,
National Common Entrance.</div>
     
      </div></span>
      <span className='contactBTN'>Contact Us</span>
    <span className='blog list'><NavLink style={{textDecoration:'none',color:'inherit'}} to={'/blog'}>Blog</NavLink></span>
    <span className='aboutBTN list'>About Us</span>
    <span className='BAT list'><NavLink style={{textDecoration:'none',color:'inherit'}} to={'/become-a-tutor'}>Become A Tutor</NavLink></span>
    

  </div>
  <div className="exitIcon"><img src={exitIcon} alt="" srcset="" /></div>
</div>

<div className='list-and-button-div'>
  <div className='list-div'>
    <span className='home list'><NavLink style={{textDecoration:'none',color:'inherit'}} to={'/'}>Home</NavLink></span>
     <span className='GAT list'><NavLink className='GAT' style={{textDecoration:'none',color:'inherit'}} to={'/get-a-tutor'}>Get A Tutor</NavLink></span>
    <span className='services'>

      <div className='services-TXT list' >Services</div>
    <div className='services-list'>
      <div>Montessori early years education</div>
      <div>Home Work Help</div>
      <div>Virtual lessons</div>
      <div>In-person learning support</div>
      <div>Learning challenge interventions</div>
      <div>E-Videos</div>
      <div>
Examinations Prep(SAT,Check Point,IGCSE,WAEC,NECO,
National Common Entrance.</div>
     
      </div></span>
    <span className='blog list'><NavLink style={{textDecoration:'none',color:'inherit'}} to={'/blog'}>Blog</NavLink></span>
    <span className='chooseBTN list'>Why Choose Us</span>
    <span className='aboutBTN list'>About Us</span>
    <span className='BAT list'><NavLink style={{textDecoration:'none',color:'inherit'}} to={'/become-a-tutor'}>Become A Tutor</NavLink></span>
    

  </div>
  <div className='button-div'>
    <div className='signup-div contactBTN'>
      <span>Contact Us</span>
    </div>
     <div className='login-div'>
      <span>Login</span>
    </div> 
  </div>
</div>
        </div>
      </NavBar>
       <div className='content'>
        <div className="section1">
        <div className='write-up'>
          <span>
          Hire The Best Tutors
For Your Child's Academic
Success
          </span>
        </div>
      <NavLink className='GAT' style={{textDecoration:'none'}} to={'/get-a-tutor'}>  <div className='btn'>
          
            <span >Get A Tutor</span>
           
        </div>  </NavLink> 
        </div>


        <div className="section2">
            <div className="img">
            <img className='img1' src={headerIll} alt="" srcset="" />
            <img className='img2'  src={headerIll1} alt="" srcset="" />   
            </div>

        </div>
        
       </div>
      </HEader>
  )
}

export default Header
