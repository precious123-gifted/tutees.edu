import React from 'react'
import { Styled } from './HomePage.styled'
import Contact from "../Contact/Contact";
import About from '../about/About';
import Betutor from '../become-a-tutor/Betutor';
import Header from '../header/Header';
import WhyUs from '../whyussection/WhyUs'
import How from '../how-it-works/How'
import Footer from "../footer/Footer";
import Questions from '../questions/Questions';
import Line2 from "../Line/Line2";

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
