import React from 'react'
import { Styled } from './HomePage.styled.jsx'
import Contact from "../Contact/Contact.jsx";
import About from '../about/About.jsx';
import Betutor from '../become-a-tutor/Betutor.jsx';
import Header from '../header/Header.jsx';
import WhyUs from '../whyussection/WhyUs.jsx'
import How from '../how-it-works/How.jsx'
import Footer from "../footer/Footer.jsx";
import Questions from '../questions/Questions.jsx';
import Line2 from "../Line/Line2.jsx";

export default function HomePage() {
  return (
    <Styled>
<Header  />
   
    <WhyUs />
   
    <How />
    <Line2/ >
    <About/ >
    <Betutor/>
     <Questions/>
     <Contact/>
     <Footer/> 


        
    </Styled>
  )
}
