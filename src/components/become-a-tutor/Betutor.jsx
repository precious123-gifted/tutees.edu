import React, { Component } from 'react'
import { BeTutor } from './Betutor.styled.jsx'
import { useEffect,useRef } from 'react'
import { NavLink } from 'react-router-dom'





export default function Betutor({bet}) {
  return (
    <BeTutor ref={bet}>
    <div className="content">
<div className="header">Become A Tutor</div>
<div className="write-up"><span> TUTEES Educational interventions provides an avenue for experienced and certified teachers to manage and grow their tutoring
business and career. Did you know that there are over 500,000 parents in Nigeria willing to pay a premium (probably equal
to or more than your regular school salary) to teach their kids or even them according to a professional standard? </span></div>
<div className="btn">
          <span ><NavLink style={{ textDecoration: 'none', color: 'inherit' }} to={'/become-a-tutor'}>Get Started</NavLink></span>
</div>

    </div>
  </BeTutor>
  )
}
