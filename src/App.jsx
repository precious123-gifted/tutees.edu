
import "./App.css";
import LandingPage from "./components/landing-page/landingPage";
import HomePage from "./components/homepage/HomePage";

import Blog from "./components/blog/Blog";




import GetATutorForm from "./components/Get-tutor-form/GetATutorForm";
import TutorForm from "./components/Tutor-form/TutorForm";
import Line from "./components/Line/Line";

import { BrowserRouter, Route, Router, Routes, } from "react-router-dom";
import { createContext, useContext, useEffect, useState } from "react";
import { useRef } from "react";
import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);





export const AppContext = createContext(null)

function App() { 
const nav= useRef(null)
const [home,setHome]=useState(false)
const [getATutor,setGetATutor]=useState(false)
const [becomeATutor,setBecomeATutor]=useState(false)
const [blog,setBlog]=useState(false)
const [landingPage,setLandingPage]=useState(true)
const [getTutorForm,setGetTutorForm]=useState(false)
const about = useRef(null)
const contact = useRef(null)
const app = useRef(null)
const header = useRef(null)
const why = useRef(null)
const how = useRef(null)
const bet = useRef(null)
const ques = useRef(null)
const foot = useRef(null)














useEffect(()=>{

})


  return (
    
    <BrowserRouter>   
     

        
 <AppContext.Provider value={{app,about,nav,header,how,why,contact,bet,home,setHome,blog,setBlog,landingPage,setLandingPage,becomeATutor,setBecomeATutor,getTutorForm,setGetTutorForm}}>
    <div className="App" ref={app}> 
    
   
     
    <Routes>
   <Route path="/" element={ <LandingPage/>}/>   
<Route path="/home" element={ <HomePage/>}/>
   <Route path="/blog" element={ <Blog/>}/>
    <Route path="/get-a-tutor" element={ <GetATutorForm/>}/>
    <Route path="/become-a-tutor" element={ <TutorForm/>}/>
    </Routes>

      
     
     
   
     
        </div>
      </AppContext.Provider>
      
      </BrowserRouter>
  );
}

export default App;
