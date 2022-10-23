
import "./App.css";
import LandingPage from "./components/landing-page/landingPage.jsx";
import HomePage from "./components/homepage/HomePage.jsx";
import Blog from "./components/blog/Blog.jsx";
import GetATutorForm from "./components/Get-tutor-form/GetATutorForm.jsx";
import TutorForm from "./components/Tutor-form/TutorForm.jsx";
import TutorLandingPage  from './components/Tutor-landing-page/TutorLandingPage.jsx'
import {Route, Router, Routes,} from "react-router-dom";
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
const form = useRef(null)
const tutorLandingPage = useRef(null)












useEffect(()=>{

})


  return (
    
    
     

        
 <AppContext.Provider value={{app,about,nav,form,foot,header,how,why,contact,bet,home,setHome,blog,setBlog,landingPage,setLandingPage,becomeATutor,setBecomeATutor,getTutorForm,tutorLandingPage,setGetTutorForm}}>
    <div className="App" ref={app}> 
    
   
     
    <Routes>
   <Route  path="/" element={ <LandingPage/>} />   
<Route path="/home" element={ <HomePage/>}/>
   <Route path="/blog" element={ <Blog/>}/>
    <Route path="/get-a-tutor" element={ <GetATutorForm/>}/>
    <Route path="/become-a-tutor" element={ <TutorLandingPage/>}/>
    </Routes>
    
        </div>
      </AppContext.Provider>
      
    
  );
}

export default App;
